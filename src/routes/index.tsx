import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardList,
  Clock,
  Compass,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MessageCircle,
  PlayCircle,
  Wallet,
} from "lucide-react";

import { LogoMarquee } from "@/components/LogoMarquee";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FICO | Capital de trabajo para tu negocio" },
      {
        name: "description",
        content:
          "FICO es el aliado financiero de tu negocio: capital de trabajo de hasta S/ 10,000 para empresas que ya venden y facturan, con acompañamiento para usarlo estratégicamente.",
      },
      { property: "og:title", content: "FICO | El aliado financiero de tu negocio" },
      {
        property: "og:description",
        content:
          "Capital de trabajo de hasta S/ 10,000 para empresas B2B que ya facturan. Respondemos en menos de 24 horas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const quickBenefits = [
  "Respuesta en menos de 24 horas",
  "Montos de hasta S/ 10,000",
  "Acompañamiento para usarlo bien",
];

const solicitudSteps = [
  { label: "Envías tu solicitud", done: true },
  { label: "Evaluamos tu negocio", done: false },
  { label: "Te respondemos en menos de 24 horas", done: false },
];

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Solicita",
    text: "Completa un formulario corto, toma menos de 2 minutos.",
  },
  {
    n: "02",
    icon: Clock,
    title: "Te respondemos",
    text: "Evaluamos tu negocio y te contactamos en menos de 24 horas.",
  },
  {
    n: "03",
    icon: Lightbulb,
    title: "Úsalo con estrategia",
    text: "Si te aprobamos, te acompañamos con recomendaciones para sacarle el máximo provecho al capital.",
  },
];

const audience = [
  {
    icon: Building2,
    title: "Empresas B2B",
    text: "Vendes y facturas a otras empresas en el Perú.",
  },
  {
    icon: Wallet,
    title: "Hasta S/ 10,000",
    text: "Capital de trabajo para tus necesidades del día a día.",
  },
  {
    icon: Compass,
    title: "Acompañamiento",
    text: "Recomendaciones para usar el capital de forma estratégica.",
  },
];

const faqs = [
  {
    q: "¿Mis facturas son válidas ante SUNAT?",
    a: "Sí. Cada comprobante que emites con FICO cumple con la normativa vigente y queda registrado correctamente.",
  },
  {
    q: "¿Necesito conocimientos de contabilidad?",
    a: "No. FICO traduce tus números a un lenguaje simple para que puedas decidir con confianza.",
  },
  {
    q: "¿Puedo migrar mi información actual?",
    a: "Sí. Te acompañamos en el proceso para que empieces con tu historial ordenado desde el primer día.",
  },
  {
    q: "¿Cómo puedo adelantar el cobro de mis facturas con FICO?",
    a: "Desde la plataforma puedes solicitar el adelanto de tus facturas emitidas. Nosotros evaluamos tu caso y te presentamos la mejor opción disponible. El proceso es simple y sin papeleo innecesario.",
  },
  {
    q: "¿FICO es solo para empresas grandes?",
    a: "No. FICO está diseñado para empresas medianas y pequeñas que venden a otras empresas. Si ya emites facturas electrónicas, FICO está hecho para ti.",
  },
  {
    q: "¿Mis clientes necesitan estar en FICO para que yo pueda usarlo?",
    a: "No. Tus clientes no necesitan registrarse ni hacer nada. FICO trabaja con tu información, no con la de ellos.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground">
              F
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">FICO</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="#como-funciona" className="hidden text-sm text-muted-foreground sm:block">
              <Button variant="ghost" size="sm">
                Cómo funciona
              </Button>
            </a>
            <Button variant="hero" size="sm" className="rounded-full px-5" asChild>
              <a href="#solicitar">Solicitar capital</a>
            </Button>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden bg-[image:var(--gradient-brand)] text-primary-foreground"
      >
        <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-halo)]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-24 lg:pb-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
              Para empresas B2B que ya facturan
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              El <span className="text-gradient-light">aliado financiero</span> de tu negocio
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Capital de trabajo de hasta S/ 10,000 para empresas que ya venden y facturan, con
              recomendaciones para usarlo estratégicamente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#solicitar">
                  Solicitar capital
                  <ArrowRight />
                </a>
              </Button>
              <Button
                variant="outlineBrand"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                {/* PLACEHOLDER: reemplazar con el número real de WhatsApp */}
                <a href="https://wa.me/51XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Escríbenos por WhatsApp
                </a>
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {quickBenefits.map((b) => (
                <li
                  key={b}
                  className="flex min-w-0 items-start gap-2 text-sm text-primary-foreground/80"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-float">
            {/* PLACEHOLDER: ilustración provisional, se puede reemplazar por una imagen final */}
            <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-card text-card-foreground shadow-[var(--shadow-lift)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-6 py-4">
                <p className="font-display text-sm font-semibold">Tu solicitud</p>
                <span className="rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Hasta S/ 10,000
                </span>
              </div>
              <div className="px-6 py-6">
                <ol className="relative space-y-5">
                  <span
                    aria-hidden
                    className="absolute top-2 bottom-4 left-3 w-px bg-[var(--color-border)]"
                  />
                  {solicitudSteps.map((s) => (
                    <li key={s.label} className="relative flex items-start gap-3">
                      <span
                        className={`z-10 grid size-6 shrink-0 place-items-center rounded-full ${
                          s.done
                            ? "bg-[image:var(--gradient-brand)] text-primary-foreground"
                            : "border border-border bg-secondary"
                        }`}
                      >
                        {s.done ? (
                          <Check className="size-3.5" />
                        ) : (
                          <span className="size-1.5 rounded-full bg-muted-foreground/40" />
                        )}
                      </span>
                      <span
                        className={`pt-0.5 text-sm ${
                          s.done ? "font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Logos de clientes */}
      <LogoMarquee />

      {/* Cómo funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Capital de trabajo en 3 pasos</h2>
          <p className="mt-4 text-muted-foreground">Un proceso simple, humano y rápido.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ n, icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-[400ms] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-2xl font-semibold text-primary/30">{n}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Para quién es */}
      {/* PLACEHOLDER: ajustar el copy cuando se definan condiciones finales */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Hecho para empresas que ya venden</h2>
            <p className="mt-4 text-muted-foreground">
              Si tu negocio factura a otras empresas, FICO puede ser tu aliado.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {audience.map(({ icon: Icon, title, text }, i) => {
              const isFeatured = i === 1;
              return (
                <article
                  key={title}
                  className={
                    isFeatured
                      ? "relative overflow-hidden rounded-3xl bg-[image:var(--gradient-brand)] p-7 text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-[400ms] md:-translate-y-2 hover:shadow-[var(--shadow-lift)] lg:p-8"
                      : "rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all duration-[400ms] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
                  }
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${
                      isFeatured ? "bg-primary-foreground/15 text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p
                    className={`mt-3 leading-relaxed ${
                      isFeatured ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#solicitar">
                Solicitar capital
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <Testimonials />

      {/* Recorrido */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Mira cómo se siente usar FICO</h2>
          <p className="mt-4 text-muted-foreground">
            Un recorrido corto por la plataforma, sin tecnicismos.
          </p>
        </div>

        {/* TODO: reemplazar placeholder con <iframe> del video de recorrido de FICO */}
        <div className="mx-auto mt-10 grid aspect-video w-full max-w-[900px] place-items-center overflow-hidden rounded-3xl border border-border bg-[#F1F1F5] shadow-[var(--shadow-soft)]">
          <div className="text-center">
            <PlayCircle className="mx-auto size-12 text-primary" />
            <p className="mt-3 font-display font-medium">Video de recorrido próximamente</p>
            <p className="text-sm text-muted-foreground">
              Reemplazar con embed de YouTube, Loom o Vimeo
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="solicitar" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">

        <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--gradient-brand)] px-6 py-16 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Tu negocio merece más tiempo para crecer.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/85">
            Empieza hoy con orden y claridad. Nosotros nos encargamos del resto.
          </p>
          <Button variant="soft" size="xl" className="mt-8">
            Crear mi cuenta
            <ArrowRight />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
              <Accordion type="single" collapsible className="mt-5">
                {faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold">Contacto</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Mail className="size-4 shrink-0 text-primary" />
                    <a href="mailto:hola@fico.pe">hola@fico.pe</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="size-4 shrink-0 text-primary" />
                    <a href="#top">Escríbenos por WhatsApp</a>
                  </li>
                </ul>
                <div className="mt-5 flex gap-2">
                  <a
                    href="#top"
                    aria-label="Instagram de FICO"
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href="#top"
                    aria-label="LinkedIn de FICO"
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <a href="#top">Términos y condiciones</a>
                  </li>
                  <li>
                    <a href="#top">Política de privacidad</a>
                  </li>
                  <li>
                    <a href="#top">Tratamiento de datos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} FICO. Hecho en Perú para negocios peruanos.</p>
            <p>Comprobantes electrónicos válidos ante SUNAT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
