"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Languages, Menu, Moon, Search as SearchIcon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useSettings } from "@/i18n/provider";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { SearchDialog, Kbd } from "./search-dialog";

/** Header chrome reacts to page scroll past a small threshold. */
function subscribeScroll(onChange: () => void): () => void {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrolled(): boolean {
  return window.scrollY > 8;
}

const subscribeNever = () => () => {};

function getIsMac(): boolean {
  return /Mac|iPhone|iPad/i.test(navigator.userAgent);
}

const NAV = [
  { href: "/domains", key: "domains" as const },
  { href: "/kpis", key: "kpis" as const },
  { href: "/academy", key: "academy" as const },
  { href: "/practice", key: "practice" as const },
  { href: "/workspace", key: "workspace" as const },
];

export function Header() {
  const { d, tr, theme, toggleTheme, locale, toggleLocale } = useSettings();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Both are external browser state, read through useSyncExternalStore so the
  // server render and the hydration pass agree without a mount-time setState.
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, () => false);
  const isMac = useSyncExternalStore(subscribeNever, getIsMac, () => false);

  // Cmd/Ctrl+K from anywhere, and "/" when not already typing.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const typing =
        e.target instanceof HTMLElement &&
        (e.target.tagName === "INPUT" ||
          e.target.tagName === "TEXTAREA" ||
          e.target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-colors duration-300",
          scrolled
            ? "border-border bg-bg/85 backdrop-blur-lg"
            : "border-transparent bg-bg/60 backdrop-blur",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="ms-4 hidden items-center gap-1 lg:flex" aria-label={tr(d.nav.menu)}>
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active ? "text-text" : "text-muted hover:text-text",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {tr(d.nav[item.key])}
                  {active ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 34 }
                      }
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ms-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 rounded-lg border border-border bg-surface-2/70 px-3 py-2 text-xs text-muted transition-colors hover:border-border-strong hover:text-text sm:flex"
            >
              <SearchIcon className="size-3.5" aria-hidden />
              <span>{tr(d.nav.search)}</span>
              <Kbd>{isMac ? "⌘K" : "Ctrl K"}</Kbd>
            </button>

            <IconButton
              label={tr(d.nav.search)}
              onClick={() => setSearchOpen(true)}
              className="sm:hidden"
            >
              <SearchIcon className="size-4" aria-hidden />
            </IconButton>

            <IconButton label={tr(d.language.toggle)} onClick={toggleLocale}>
              <span className="flex items-center gap-1 text-[11px] font-semibold">
                <Languages className="size-4" aria-hidden />
                {locale === "ar" ? "EN" : "ع"}
              </span>
            </IconButton>

            <IconButton label={tr(d.theme.toggle)} onClick={toggleTheme}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={reduce ? false : { opacity: 0, rotate: -35, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, rotate: 35, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  {theme === "dark" ? (
                    <Moon className="size-4" aria-hidden />
                  ) : (
                    <Sun className="size-4" aria-hidden />
                  )}
                </motion.span>
              </AnimatePresence>
            </IconButton>

            <IconButton
              label={menuOpen ? tr(d.nav.close) : tr(d.nav.menu)}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden"
            >
              {menuOpen ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
            </IconButton>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              className="overflow-hidden border-t border-border bg-surface lg:hidden"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
              aria-label={tr(d.nav.menu)}
            >
              <ul className="px-4 py-3 sm:px-6">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-surface-2 text-text"
                          : "text-muted hover:bg-surface-2/60 hover:text-text",
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {tr(d.nav[item.key])}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}

function IconButton({
  children,
  label,
  onClick,
  className,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-2/70 text-muted transition-colors hover:border-border-strong hover:text-text",
        className,
      )}
    >
      {children}
    </button>
  );
}
