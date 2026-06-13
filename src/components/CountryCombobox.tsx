import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { countries, flagOf, type Country } from '@/lib/countries';

interface CountryComboboxProps {
  value: Country;
  onChange: (country: Country) => void;
  searchPlaceholder: string;
}

const CountryCombobox = ({ value, onChange, searchPlaceholder }: CountryComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.dial.includes(q) ||
          c.iso.toLowerCase() === q,
      )
    : countries;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between border-b border-border/70 bg-transparent py-2.5 text-[15px] text-foreground transition-colors duration-300 hover:border-gold/40 focus:border-gold/60 focus:outline-none"
      >
        <span>
          {flagOf(value.iso)} {value.name}{' '}
          <span className="text-foreground-muted">({value.dial})</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-foreground-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-1 max-h-64 overflow-auto border border-border bg-background-panel shadow-soft">
          <div className="sticky top-0 flex items-center gap-2 border-b border-border/60 bg-background-panel px-3 py-2">
            <Search className="h-4 w-4 flex-shrink-0 text-foreground-muted" strokeWidth={1.5} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none"
            />
          </div>
          {filtered.length === 0 ? (
            <div className="px-3 py-3 text-sm text-foreground-muted">—</div>
          ) : (
            filtered.map((c) => (
              <button
                key={c.iso}
                type="button"
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                  setQuery('');
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-gold/10 ${
                  c.iso === value.iso ? 'text-gold-light' : 'text-foreground'
                }`}
              >
                <span>
                  {flagOf(c.iso)} {c.name}
                </span>
                <span className="text-foreground-muted">{c.dial}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CountryCombobox;
