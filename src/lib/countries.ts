export interface Country {
  iso: string; // ISO 3166-1 alpha-2
  name: string;
  dial: string; // international dialing code, e.g. "+55"
}

// Derives the flag emoji from the ISO code (regional indicator symbols).
// On some platforms (e.g. Windows) it may render as the country letters instead.
export function flagOf(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

export const countries: Country[] = [
  { iso: 'AR', name: 'Argentina', dial: '+54' },
  { iso: 'AU', name: 'Australia', dial: '+61' },
  { iso: 'AT', name: 'Austria', dial: '+43' },
  { iso: 'BE', name: 'Belgium', dial: '+32' },
  { iso: 'BR', name: 'Brazil', dial: '+55' },
  { iso: 'BG', name: 'Bulgaria', dial: '+359' },
  { iso: 'CA', name: 'Canada', dial: '+1' },
  { iso: 'CL', name: 'Chile', dial: '+56' },
  { iso: 'CN', name: 'China', dial: '+86' },
  { iso: 'CO', name: 'Colombia', dial: '+57' },
  { iso: 'HR', name: 'Croatia', dial: '+385' },
  { iso: 'CY', name: 'Cyprus', dial: '+357' },
  { iso: 'CZ', name: 'Czechia', dial: '+420' },
  { iso: 'DK', name: 'Denmark', dial: '+45' },
  { iso: 'EE', name: 'Estonia', dial: '+372' },
  { iso: 'FI', name: 'Finland', dial: '+358' },
  { iso: 'FR', name: 'France', dial: '+33' },
  { iso: 'DE', name: 'Germany', dial: '+49' },
  { iso: 'GR', name: 'Greece', dial: '+30' },
  { iso: 'HK', name: 'Hong Kong', dial: '+852' },
  { iso: 'HU', name: 'Hungary', dial: '+36' },
  { iso: 'IS', name: 'Iceland', dial: '+354' },
  { iso: 'IN', name: 'India', dial: '+91' },
  { iso: 'IE', name: 'Ireland', dial: '+353' },
  { iso: 'IL', name: 'Israel', dial: '+972' },
  { iso: 'IT', name: 'Italy', dial: '+39' },
  { iso: 'JP', name: 'Japan', dial: '+81' },
  { iso: 'LV', name: 'Latvia', dial: '+371' },
  { iso: 'LT', name: 'Lithuania', dial: '+370' },
  { iso: 'LU', name: 'Luxembourg', dial: '+352' },
  { iso: 'MT', name: 'Malta', dial: '+356' },
  { iso: 'MX', name: 'Mexico', dial: '+52' },
  { iso: 'NL', name: 'Netherlands', dial: '+31' },
  { iso: 'NZ', name: 'New Zealand', dial: '+64' },
  { iso: 'NO', name: 'Norway', dial: '+47' },
  { iso: 'PL', name: 'Poland', dial: '+48' },
  { iso: 'PT', name: 'Portugal', dial: '+351' },
  { iso: 'RO', name: 'Romania', dial: '+40' },
  { iso: 'SG', name: 'Singapore', dial: '+65' },
  { iso: 'SK', name: 'Slovakia', dial: '+421' },
  { iso: 'SI', name: 'Slovenia', dial: '+386' },
  { iso: 'ZA', name: 'South Africa', dial: '+27' },
  { iso: 'KR', name: 'South Korea', dial: '+82' },
  { iso: 'ES', name: 'Spain', dial: '+34' },
  { iso: 'SE', name: 'Sweden', dial: '+46' },
  { iso: 'CH', name: 'Switzerland', dial: '+41' },
  { iso: 'AE', name: 'United Arab Emirates', dial: '+971' },
  { iso: 'GB', name: 'United Kingdom', dial: '+44' },
  { iso: 'US', name: 'United States', dial: '+1' },
  { iso: 'UY', name: 'Uruguay', dial: '+598' },
];

export const DEFAULT_COUNTRY: Country =
  countries.find((c) => c.iso === 'BR') ?? countries[0];
