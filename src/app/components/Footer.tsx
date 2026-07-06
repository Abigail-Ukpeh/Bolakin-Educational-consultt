import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Instagram, Facebook, Send, CheckCircle, Plane } from "lucide-react";
import { Logo, BLUE, GOLD, NAVY, WA_LINK } from "./shared";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <footer className="pt-20 pb-8 relative overflow-hidden" style={{ background: NAVY }}>
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Plane className="w-48 h-48 rotate-12" style={{ color: "white" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size={42} />
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}>
              Helping Nigerian students achieve their dreams of studying, living, and working abroad. Trusted. Proven. Delivered.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/bolakineduconsult_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://threads.net/@bolakineduconsult_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.1)" }}
                aria-label="Threads"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.312-.883-2.371-.889h-.048c-.833 0-1.99.231-2.72 1.171l-1.696-1.37c.937-1.208 2.308-1.793 4.084-1.799h.061c3.954.025 6.09 2.581 6.095 7.228 0 .177-.009.353-.024.527.949.642 1.713 1.442 2.249 2.465 1.004 1.898.987 4.357-.45 5.754-1.905 1.858-4.045 2.658-7.237 2.678z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-black tracking-widest mb-5 uppercase" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>
              Our Offices
            </h3>
            <div className="space-y-5">
              {[
                { city: "Lagos", address: "No 8, Akinsetan Street, Badore Ajah, Lagos" },
                { city: "Abeokuta", address: "Shop 17, Mosque New Complex, 5 Somorin Street, opposite Araromi Street, Abeokuta 110121, Ogun State" },
              ].map((office) => (
                <div key={office.city} className="flex gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <div>
                    <div className="text-xs font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{office.city}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}>{office.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-sm font-black tracking-widest mb-5 uppercase" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>
              Contact Us
            </h3>
            <div className="space-y-3 mb-6">
              {["0906 439 1093", "0816 090 0787", "+234 701 982 5460"].map((num) => (
                <a key={num} href={`tel:${num.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-xs hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  <Phone className="w-3 h-3 flex-shrink-0" style={{ color: GOLD }} />
                  {num}
                </a>
              ))}
            </div>

            <h4 className="text-xs font-black tracking-wider mb-3 uppercase" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>
              Join Our Travel Community
            </h4>
            {submitted ? (
              <div className="flex items-center gap-2 text-xs" style={{ color: "#22C55E", fontFamily: "Outfit, sans-serif" }}>
                <CheckCircle className="w-4 h-4" /> You're in! We'll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 rounded-full text-xs outline-none"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "Inter, sans-serif" }}
                />
                <button type="submit" className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity" style={{ background: GOLD }} aria-label="Subscribe">
                  <Send className="w-3.5 h-3.5" style={{ color: NAVY }} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>
            © {new Date().getFullYear()} Bolakin Edu-Consult. All rights reserved. | We Deliver As Promised!
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <span key={link} className="text-xs cursor-pointer hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
