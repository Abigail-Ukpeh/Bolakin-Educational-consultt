import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppWidget } from "./WhatsAppWidget";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Outfit, sans-serif" }}>
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
