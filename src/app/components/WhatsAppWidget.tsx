import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { GOLD, NAVY } from "./shared";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-3xl shadow-2xl overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.1)", background: "white" }}>
          {/* Header */}
          <div className="p-4 flex items-center gap-3" style={{ background: "#25D366" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>Bolakin Edu-Consult</div>
              <div className="text-white/80 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white/80 inline-block animate-pulse" />
                Typically replies instantly
              </div>
            </div>
            <button className="ml-auto text-white/80 hover:text-white" onClick={() => setOpen(false)} aria-label="Close">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4" style={{ background: "#E5DDD5" }}>
            <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[90%]">
              <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                👋 Hello! Welcome to Bolakin Edu-Consult. How can we help you today?
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {[
                  { label: "🎓 Study Abroad", msg: "Hi! I want to study abroad with Bolakin Edu-Consult." },
                  { label: "✈️ Visa Help", msg: "Hi! I need visa processing help from Bolakin Edu-Consult." },
                  { label: "💰 Scholarships", msg: "Hi! I need scholarship guidance from Bolakin Edu-Consult." },
                ].map((opt) => (
                  <a
                    key={opt.label}
                    href={`https://wa.me/2347019825460?text=${encodeURIComponent(opt.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-full border transition-colors hover:bg-green-50"
                    style={{ borderColor: "#25D366", color: "#25D366", fontFamily: "Outfit, sans-serif" }}
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/2347019825460?text=Hi!%20I%27m%20interested%20in%20studying%2Ftraveling%20abroad%20with%20Bolakin%20Edu-Consult.%20Can%20you%20help%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ background: "#25D366", color: "white", fontFamily: "Outfit, sans-serif" }}
          >
            <MessageCircle className="w-4 h-4" />
            Start Conversation
          </a>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
