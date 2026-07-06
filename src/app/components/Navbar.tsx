import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo, BLUE, GOLD, NAVY, WA_LINK } from "./shared";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Countries", path: "/countries" },
  { label: "Pricing", path: "/pricing" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 2px 20px rgba(11,77,161,0.12)" : "0 1px 0 rgba(11,77,161,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" aria-label="Home">
              <Logo size={38} />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold transition-all"
                  style={{
                    color: isActive(link.path) ? "white" : NAVY,
                    background: isActive(link.path) ? GOLD : "transparent",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{ background: BLUE, color: "white", fontFamily: "Outfit, sans-serif" }}
            >
              Apply Now
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setOpen(!open)}
              style={{ color: BLUE }}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: NAVY }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <Logo size={36} />
          <button onClick={() => setOpen(false)} style={{ color: "white" }} aria-label="Close menu">
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 pt-6 gap-2 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-5 py-4 rounded-2xl text-lg font-bold transition-all"
              style={{
                color: isActive(link.path) ? NAVY : "white",
                background: isActive(link.path) ? GOLD : "rgba(255,255,255,0.06)",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-6">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base w-full"
            style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
          >
            Apply Now <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
