"use client";

import { useState } from "react";
import type { nav as Nav } from "@/content/site";
import { T } from "@/components/T";

// Dropdown menu for widths where the full nav doesn't fit.
export function MobileNav({ items }: { items: typeof Nav }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Menu"
        className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:border-fg/40 hover:text-fg"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-16 border-b border-line bg-bg/95 backdrop-blur-md">
          <ul className="mx-auto max-w-5xl px-4 py-2 sm:px-6">
            {items.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-muted transition hover:text-fg"
                >
                  <T t={n.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
