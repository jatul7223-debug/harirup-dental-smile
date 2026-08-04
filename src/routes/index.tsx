import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Stethoscope, Activity, Sparkles, Smile, Shield, Baby, AlertCircle,
  Scissors, Sun as SunIcon, Phone, MapPin, Mail, Clock, Star, ArrowRight,
  Award, HeartPulse, Wallet, CalendarCheck, ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { FloatingActions } from "@/components/site/FloatingActions";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";
import { Placeholder } from "@/components/site/Placeholder";
import { clinic } from "@/lib/clinic";
import { clinicPhotos, heroPhoto, clinicExteriorPhoto } from "@/lib/photos";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harirup Dental Care — Dr. Harish Khamkar | Manchar" },
      {
        name: "description",
        content:
          "Gentle, modern dental care in Manchar by Dr. Harish Khamkar. Cleanings, root canals, implants, braces and more. Book your appointment today.",
      },
      { property: "og:title", content: "Harirup Dental Care — Dr. Harish Khamkar" },
      {
        property: "og:description",
        content: "Caring for your smile, naturally. Modern dental clinic in Manchar, Maharashtra.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Routine check-ups, fillings and preventive care for the whole family.", details: "[Detailed description of general dentistry services, what's included, and what to expect during a visit.]" },
  { icon: Activity, title: "Root Canal Treatment", desc: "Painless, modern endodontic care that saves your natural teeth.", details: "[Detailed description of single-sitting and multi-sitting root canal procedures.]" },
  { icon: Sparkles, title: "Teeth Cleaning & Whitening", desc: "Professional scaling, polishing and safe whitening for a brighter smile.", details: "[Detailed description of cleaning and in-clinic whitening options and pricing.]" },
  { icon: Smile, title: "Braces / Orthodontics", desc: "Traditional braces and clear aligners to straighten your smile.", details: "[Detailed description of orthodontic treatment options, duration, and pricing.]" },
  { icon: Shield, title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels natural.", details: "[Detailed description of implant procedure, materials used, and aftercare.]" },
  { icon: SunIcon, title: "Cosmetic Dentistry", desc: "Veneers, smile makeovers and aesthetic restorations.", details: "[Detailed description of cosmetic procedures and outcomes.]" },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe, gentle removal — including wisdom teeth.", details: "[Detailed description of extraction process and post-op care.]" },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Friendly, kid-focused care to build healthy habits early.", details: "[Detailed description of pediatric services and child-friendly environment.]" },
  { icon: AlertCircle, title: "Emergency Dental Care", desc: "Quick response for dental pain, trauma and urgent care.", details: "[Detailed description of emergency services and how to reach the clinic after hours.]" },
];

const whyUs = [
  { icon: Award, title: "Experienced Doctor", desc: "Led by Dr. Harish Khamkar with [years]+ years of experience." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Strict sterilization protocols and a spotless clinic." },
  { icon: HeartPulse, title: "Painless Treatment", desc: "Modern techniques and gentle care for anxiety-free visits." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent costs with flexible payment options." },
  { icon: CalendarCheck, title: "Flexible Timing", desc: "Convenient hours that fit your schedule, six days a week." },
  { icon: Sparkles, title: "Modern Equipment", desc: "Up-to-date dental technology for accurate diagnosis and care." },
];

const reviews = [
  { name: "[Patient Name]", rating: 5, text: "[Excellent care from Dr. Harish. The clinic is clean, modern and the team made me feel completely at ease.]" },
  { name: "[Patient Name]", rating: 5, text: "[Best dental experience I've had in Manchar. Painless root canal and very fair pricing.]" },
  { name: "[Patient Name]", rating: 5, text: "[Highly recommend Harirup Dental Care. Dr. Khamkar explains everything clearly and is very patient.]" },
];

const faqs = [
  { q: "How often should I visit the dentist?", a: "We recommend a check-up and cleaning every 6 months to catch issues early and keep your smile healthy." },
  { q: "Is root canal treatment painful?", a: "Modern root canal treatment is virtually painless thanks to effective local anesthesia. Most patients describe it as similar to a routine filling." },
  { q: "Do you treat children?", a: "Yes — we offer pediatric dentistry in a friendly, calm environment designed to make kids comfortable." },
  { q: "How much do dental implants cost?", a: "Implant pricing depends on the case. We provide a transparent estimate after a quick consultation. [Add starting price if desired.]" },
  { q: "Do you handle dental emergencies?", a: "Yes. For urgent dental pain or trauma, call us directly and we'll do our best to see you the same day." },
];

function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" />
    </>
  );
}

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground">Harirup Dental Care</p>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center reveal">
      <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> {clinic.doctor}, BDS [MDS]
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            {clinic.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
            Welcome to <strong className="text-foreground">{clinic.name}</strong> in Manchar — modern,
            gentle dentistry by {clinic.doctor}. From routine check-ups to advanced treatments, we keep your
            smile healthy and beautiful.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <AppointmentDialog
              trigger={
                <Button size="lg" className="rounded-full px-6">
                  Book an Appointment <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              }
            />
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <a href={`tel:${clinic.phoneTel}`}>
                <Phone className="mr-1 h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Sterile clinic</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> 5-star rated</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Mon–Sat open</div>
          </div>
        </div>
        <div className="reveal">
          <img
            src={heroPhoto.url}
            alt={heroPhoto.alt}
            className="aspect-[4/5] sm:aspect-[5/4] w-full rounded-2xl object-cover shadow-soft"
          />
        </div>

      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: "[10+]", label: "Years of experience" },
    { value: "[5000+]", label: "Patients treated" },
    { value: "[BDS, MDS]", label: "Qualifications" },
  ];
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <img
          src={clinicExteriorPhoto.url}
          alt={clinicExteriorPhoto.alt}
          loading="lazy"
          className="aspect-square w-full max-w-md mx-auto rounded-2xl object-cover shadow-card reveal"
        />

        <div className="reveal">
          <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Meet {clinic.doctor}
          </h2>
          <p className="mt-4 text-muted-foreground">
            [Short bio about Dr. Harish Khamkar — qualifications, specializations, years of experience,
            and a personal note about his approach to dentistry. Replace this text with the doctor's
            actual background.]
          </p>
          <p className="mt-3 text-muted-foreground">
            At <strong className="text-foreground">{clinic.name}</strong>, our mission is simple: deliver
            honest, gentle dental care in a calm, modern environment. We treat every patient like family.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                <div className="text-xl sm:text-2xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="services" className="section-pad bg-muted/40">
      <div className="container-x">
        <SectionTitle
          eyebrow="Services"
          title="Complete dental care under one roof"
          subtitle="From everyday preventive care to advanced treatments — we've got you covered."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.title}
                className="group p-6 rounded-2xl border-border bg-card shadow-card hover:shadow-soft hover:-translate-y-1 transition reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <button
                  onClick={() => setActive(i)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </Card>
            );
          })}
        </div>
      </div>
      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          {active !== null && (
            <>
              <DialogHeader>
                <DialogTitle>{services[active].title}</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground">{services[active].details}</p>
              <AppointmentDialog
                trigger={<Button className="w-full mt-2">Book this service</Button>}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionTitle
          eyebrow="Why choose us"
          title="Care that puts you first"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" className="section-pad bg-muted/40">
      <div className="container-x">
        <SectionTitle eyebrow="Gallery" title="Inside our clinic" subtitle="A peek at our space and care in action." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {clinicPhotos.map((p, i) => (
            <button
              key={p.url}
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-2xl reveal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={p.url}
                alt={p.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition hover:scale-105 hover:opacity-90"
              />
            </button>
          ))}
        </div>
      </div>
      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader><DialogTitle>Clinic photo</DialogTitle></DialogHeader>
          {active !== null && (
            <img
              src={clinicPhotos[active].url}
              alt={clinicPhotos[active].alt}
              className="w-full rounded-xl object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


function Reviews() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[idx];
  return (
    <section id="reviews" className="section-pad">
      <div className="container-x">
        <SectionTitle eyebrow="Reviews" title="Loved by our patients" />
        <Card className="mt-12 mx-auto max-w-3xl rounded-3xl border-border bg-card p-8 sm:p-12 shadow-soft text-center reveal">
          <div className="flex justify-center gap-1 text-primary">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-lg sm:text-xl text-foreground leading-relaxed">"{r.text}"</p>
          <p className="mt-5 font-semibold">{r.name}</p>
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8 rounded-full">
            <a href={clinic.mapsLink} target="_blank" rel="noreferrer">
              Read more reviews on Google <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-pad bg-muted/40">
      <div className="container-x max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <Accordion type="single" collapsible className="mt-10 reveal">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="rounded-xl border border-border bg-card px-4 mb-3 shadow-card">
              <AccordionTrigger className="text-left hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent", { description: "We'll get back to you soon." });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionTitle eyebrow="Contact" title="Visit us or get in touch" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 reveal">
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=Harirup+Dental+Care+Dr+Harish+Khamkar+Patilwada+Manchar+Maharashtra+410503&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} title="Address" lines={[clinic.address]} />
              <InfoCard icon={Phone} title="Phone" lines={[clinic.phoneDisplay]} href={`tel:${clinic.phoneTel}`} />
              <InfoCard icon={Mail} title="Email" lines={[clinic.email]} href={`mailto:${clinic.email}`} />
              <InfoCard icon={Clock} title="Hours" lines={[clinic.hours]} />
            </div>
            <Button asChild className="w-full sm:w-auto rounded-full">
              <a href={clinic.mapsLink} target="_blank" rel="noreferrer">
                <MapPin className="mr-1 h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>

          <Card className="p-6 sm:p-8 rounded-2xl bg-card shadow-card reveal">
            <h3 className="text-xl font-semibold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We typically respond within a few hours.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="c-name" label="Name"><Input id="c-name" required maxLength={80} /></Field>
                <Field id="c-phone" label="Phone"><Input id="c-phone" type="tel" required pattern="[0-9+\s\-]{7,20}" /></Field>
              </div>
              <Field id="c-email" label="Email"><Input id="c-email" type="email" required maxLength={120} /></Field>
              <Field id="c-date" label="Preferred date & time"><Input id="c-date" type="datetime-local" /></Field>
              <Field id="c-msg" label="Message"><Textarea id="c-msg" rows={4} maxLength={1000} required /></Field>
              <Button type="submit" size="lg" className="w-full rounded-full">Send Message</Button>
              <p className="text-xs text-muted-foreground">Sends to [info@harirupdentalcare.com]</p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function InfoCard({
  icon: Icon, title, lines, href,
}: { icon: typeof Phone; title: string; lines: string[]; href?: string }) {
  const body = (
    <div className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:shadow-soft transition h-full">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">{title}</div>
        {lines.map((l, i) => <div key={i} className="text-sm text-foreground mt-0.5">{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href}>{body}</a> : body;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            {clinic.name}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{clinic.tagline}</p>
          <p className="mt-3 text-sm text-muted-foreground">{clinic.address}</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {["About", "Services", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${clinic.phoneTel}`} className="hover:text-foreground">{clinic.phoneDisplay}</a></li>
            <li><a href={`mailto:${clinic.email}`} className="hover:text-foreground">{clinic.email}</a></li>
            <li><a href={clinic.mapsLink} target="_blank" rel="noreferrer" className="hover:text-foreground">View on Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
