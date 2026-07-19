import Image from "next/image";
// import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import {
  Phone, Mail, MapPin, MessageCircle, Check, Leaf, Trash2, Wrench,
  PaintBucket, Hammer, Droplets, Layers, Square, Sparkles, Sun,
  Clock, ShieldCheck, Home as HomeIcon,
} from "lucide-react";
import ContactForm from "../components/ContactForm.js";
import heroImage from "../public/hero-garten.jpeg"; 

export const metadata = {
  title: "K&D Dienstleistungen – Garten, Entrümpelung & Allrounder in Hamm",
  description:
    "K&D Dienstleistungen aus Hamm: Gartenpflege, Entrümpelung, Maler-, Pflaster- und Reparaturarbeiten. Zuverlässig, pünktlich und fair – Hilfe direkt aus Ihrer Nachbarschaft.",
  openGraph: {
    title: "K&D Dienstleistungen – Hilfe aus Ihrer Nachbarschaft",
    description:
      "Gartenpflege, Entrümpelung und Allround-Service in Hamm und Umgebung. Faire Preise, schnelle Termine.",
    type: "website",
  },
};

const services = [
  { icon: Leaf, title: "Gartenpflege", desc: "Rasen mähen, Hecken schneiden, Beete pflegen, Bäume zurückschneiden." },
  { icon: Trash2, title: "Entrümpelung", desc: "Keller, Dachboden, Wohnung oder Garage – schnell und sauber geräumt." },
  { icon: Wrench, title: "Allrounder", desc: "Vielseitige Hilfe rund ums Haus, wenn Sie eine helfende Hand brauchen." },
  { icon: PaintBucket, title: "Malerarbeiten", desc: "Innen- und Außenanstriche, sauber und ordentlich ausgeführt." },
  { icon: Hammer, title: "Möbelmontage", desc: "Aufbau und Demontage von Möbeln – stressfrei für Sie." },
  { icon: Droplets, title: "Dachrinnen- & Fassadenreinigung", desc: "Gründliche Reinigung für ein gepflegtes Zuhause." },
  { icon: Layers, title: "Tapezierarbeiten", desc: "Tapeten anbringen, entfernen oder erneuern – mit ruhiger Hand." },
  { icon: Square, title: "Pflasterarbeiten", desc: "Wege, Einfahrten und Terrassen – fachgerecht verlegt." },
  { icon: Sparkles, title: "Einfache Reparaturen", desc: "Kleine Reparaturen, die im Alltag liegen bleiben – wir erledigen sie." },
  { icon: Sun, title: "Wintergartenreinigung", desc: "Glas und Rahmen strahlend sauber, innen wie außen." },
];

const reasons = [
  { icon: HomeIcon, title: "Aus Ihrer Nachbarschaft", desc: "Wir sind in Hamm zu Hause – kurze Wege, persönliche Betreuung." },
  { icon: Clock, title: "Pünktlich & verlässlich", desc: "Termine werden eingehalten. Was wir versprechen, halten wir." },
  { icon: ShieldCheck, title: "Sauber & sorgfältig", desc: "Wir arbeiten gewissenhaft und hinterlassen alles ordentlich." },
];

const PHONE_1 = "0178 2328251";
const PHONE_2 = "0163 9828199";
const WHATSAPP = "4917823282510";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
       <a href="#top" className="flex items-center gap-3">
  <Image
    src="/transparent-logo.png"
    alt="K&D Dienstleistungen"
    width={60}
    height={60}
    className="rounded-md object-contain"
  />

  <span className="hidden text-sm font-medium sm:inline">
    Dienstleistungen
  </span>
</a>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <a href="#leistungen">Leistungen</a>
            <a href="#warum">Warum wir?</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
         <a
  href={`https://wa.me/${WHATSAPP}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground"
>
  <MessageCircle className="h-4 w-4" />
  <span className="hidden sm:inline">WhatsApp</span>
  <span className="sm:hidden">Chat</span>
</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden bg-[#0d1f17]">
        <Image src={heroImage} alt="" fill priority className="-z-20 object-cover" placeholder="blur" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(110deg, rgba(8,22,16,0.92) 0%, rgba(8,22,16,0.75) 55%, rgba(8,22,16,0.45) 100%)" }} />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.15fr_1fr] lg:py-40">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              <MapPin className="h-3.5 w-3.5" /> Hamm & Umgebung · Aus der Nachbarschaft
            </p>
            <h1 className="text-[2.5rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Garten, Haushalt, kleine Reparaturen — <span className="text-accent">wir packen an.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              K&D Dienstleistungen: zuverlässige Hilfe direkt aus Ihrer Nachbarschaft in Hamm. Faire Preise, pünktliche Termine, saubere Arbeit.
            </p>
           <div className="mt-8 flex flex-wrap gap-3">
 <a
    href={`https://wa.me/${WHATSAPP}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-lg"
  >
    <MessageCircle className="h-4 w-4" /> WhatsApp
  </a>

  <a
    href="#kontakt"
    className="inline-flex items-center rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white"
  >
    Kostenlos anfragen
  </a>
</div>
            <ul className="mt-10 grid max-w-xl grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium text-white sm:grid-cols-4">
              {["Zuverlässig", "Pünktlich", "Fair", "Nachbarschaftlich"].map((b) => (
                <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {b}</li>
              ))}
            </ul>
          </div>
          <aside className="hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Schnell erreichbar</p>
            <div className="mt-4 space-y-4 text-white">
              <a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="flex items-center gap-3"><Phone className="h-5 w-5" /><span className="text-lg font-semibold">{PHONE_1}</span></a>
              <a href={`tel:${PHONE_2.replace(/\s/g, "")}`} className="flex items-center gap-3"><Phone className="h-5 w-5" /><span className="text-lg font-semibold">{PHONE_2}</span></a>
              <a href="mailto:kd.dienstleistungen@gmx.de" className="flex items-center gap-3 break-all"><Mail className="h-5 w-5 shrink-0" /><span className="text-sm">kd.dienstleistungen@gmx.de</span></a>
              <div className="flex items-center gap-3 text-white/80"><MapPin className="h-5 w-5 shrink-0" /><span className="text-sm">Hohenhöveler Str. 1a, 59075 Hamm</span></div>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Unsere Leistungen</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Ein Ansprechpartner für viele Aufgaben.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-6 hover:border-secondary/50 hover:shadow-md transition">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-secondary/10 text-secondary"><Icon className="h-5 w-5" /></div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="warum" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Nachbarn, auf die Sie zählen können.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/15 bg-white/5 p-6">
                <Icon className="h-6 w-6" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Lassen Sie uns sprechen.</h2>
            <p className="mt-3 text-muted-foreground">Beschreiben Sie kurz, was wir für Sie erledigen sollen.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-secondary" /><div><p className="font-semibold">Telefon</p><a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="block">{PHONE_1}</a><a href={`tel:${PHONE_2.replace(/\s/g, "")}`} className="block">{PHONE_2}</a></div></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-secondary" /><a href="mailto:kd.dienstleistungen@gmx.de">kd.dienstleistungen@gmx.de</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-secondary" /><span>Hohenhöveler Straße 1a, 59075 Hamm</span></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
         <div>
  <a href="#top" className="inline-flex">
    <Image
      src="/transparent-logo.png"
      alt="K&D Dienstleistungen"
      width={60}
      height={60}
      className="object-contain"
    />
  </a>

  <p className="mt-3 text-sm text-muted-foreground">
    Ihr verlässlicher Partner aus der Nachbarschaft.
  </p>
</div>
          <div>
            <h4 className="font-semibold">Kontakt</h4>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>{PHONE_1}</li><li>{PHONE_2}</li><li>kd.dienstleistungen@gmx.de</li><li>Hohenhöveler Straße 1a, 59075 Hamm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Impressum</h4>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>K&D Dienstleistungen</li><li>Inhaber: Dimche Kjumbev</li><li>Einzelunternehmen</li>
              <li>Hohenhöveler Straße 1a, 59075 Hamm</li><li>Steuernummer: [wird ergänzt]</li>
              <li>Kleinunternehmer gem. § 19 UStG</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">© 2026 K&D Dienstleistungen.</div>
        </div>
      </footer>
    </div>
  );
}
