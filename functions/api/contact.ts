// Cloudflare Pages Function — POST /api/contact
// Receives the contact form, validates server-side (defense in depth),
// and forwards the payload to the owner via Telegram Bot API.

interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

const VALID_DDDS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28,
  31, 32, 33, 34, 35, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55,
  61, 62, 63, 64, 65, 66, 67, 68, 69,
  71, 73, 74, 75, 77, 79,
  81, 82, 83, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 10 && digits.length !== 11) return false;
  const ddd = parseInt(digits.slice(0, 2), 10);
  if (!VALID_DDDS.has(ddd)) return false;
  if (digits.length === 11 && digits[2] !== '9') return false;
  return true;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ ok: false, error: 'server_misconfigured' }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !phone || !message) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }
  if (name.length > 100 || email.length > 200 || phone.length > 20 || message.length > 4000) {
    return json({ ok: false, error: 'too_long' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }
  if (!isValidPhone(phone)) {
    return json({ ok: false, error: 'invalid_phone' }, 400);
  }

  const text =
    `📬 <b>Novo contato no portfólio</b>\n\n` +
    `<b>Nome:</b> ${escapeHtml(name)}\n` +
    `<b>Email:</b> ${escapeHtml(email)}\n` +
    `<b>Telefone:</b> ${escapeHtml(phone)}\n\n` +
    `<b>Mensagem:</b>\n${escapeHtml(message)}`;

  const tgUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const tgResp = await fetch(tgUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!tgResp.ok) {
    return json({ ok: false, error: 'telegram_failed' }, 502);
  }

  return json({ ok: true });
};
