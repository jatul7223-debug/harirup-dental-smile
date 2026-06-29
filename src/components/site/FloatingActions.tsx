import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-card text-foreground shadow-card border border-border hover:bg-accent transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={`tel:${clinic.phoneTel}`}
        aria-label="Call clinic"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft hover:scale-105 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${clinic.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp chat"
        className="grid h-14 w-14 place-items-center rounded-full shadow-soft hover:scale-105 transition"
        style={{ background: "#25D366", color: "#fff" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.2 7.9L.3 31.7l8-2.1c2.3 1.2 4.9 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.8 1.3 1.3-4.7-.3-.5C3.4 20.7 2.7 18.4 2.7 16 2.7 8.7 8.7 2.7 16 2.7S29.3 8.7 29.3 16 23.3 28.8 16 28.8zm7.4-9.7c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5s-1.4 1.4-1.4 3.4 1.5 3.9 1.7 4.2c.2.3 2.9 4.5 7.1 6.3 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.7-1.9.3-.9.3-1.8.2-1.9-.1-.2-.4-.3-.8-.5z"/>
        </svg>
      </a>
    </div>
  );
}
