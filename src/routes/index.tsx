import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Zap,
} from "lucide-react";

import dashboardMockup from "@/assets/fico-dashboard.jpg";
import { SourceFlow } from "@/components/SourceFlow";
import { LogoMarquee } from "@/components/LogoMarquee";
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
      { title: "FICO | Facturación y control financiero para tu negocio" },
      {
        name: "description",
        content:
          "FICO es el aliado financiero del emprendedor peruano: factura ante SUNAT, entiende tus números y toma mejores decisiones desde un solo lugar.",
      },
      { property: "og:title", content: "FICO | El aliado financiero de tu negocio" },
      {
        property: "og:description",
        content:
          "Facturación electrónica válida ante SUNAT y un panel claro de tu negocio. Menos tiempo en trámites, más tiempo para crecer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const quickBenefits = [
  "Facturas válidas ante SUNAT",
  "Cobra a tiempo, siempre",
  "Liquidez cuando la necesitas",
];



const benefits = [
  {
    icon: FileText,
    title: "Emite y olvídate",
    text: "Factura en segundos y con la tranquilidad de estar en regla. Dedica ese tiempo a vender, no a trámites.",
  },
  {
    icon: BarChart3,
    title: "Sabe cómo va tu negocio",
    text: "Entiende cuánto entra, cuánto sale y cuánto te queda, sin fórmulas ni hojas de cálculo.",
  },
  {
    icon: Zap,
    title: "Cobra antes de tiempo",
    text: "Adelanta el cobro de tus facturas emitidas y mantén tu negocio en movimiento. Sin esperas, sin trámites complicados.",
  },
  {
    icon: Sparkles,
    title: "Un consejo cuando lo necesitas",
    text: "Pronto tendrás un coach financiero con IA que te acompaña a decidir con más seguridad.",
    soon: true,
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
            <a href="#recorrido" className="hidden text-sm text-muted-foreground sm:block">
              <Button variant="ghost" size="sm">
                Ver recorrido
              </Button>
            </a>
            <Button variant="hero" size="sm" className="rounded-full px-5">
              Crear mi cuenta
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
              Para empresas peruanas que venden a otras empresas
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              Factura, <span className="text-gradient-light">cobra</span> a tiempo y haz crecer tu
              negocio
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Emite comprobantes válidos ante SUNAT, entiende tu flujo de caja y accede a liquidez
              cuando más lo necesitas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl">
                Crear mi cuenta
                <ArrowRight />
              </Button>
              <Button
                variant="outlineBrand"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#recorrido">
                  <PlayCircle />
                  Ver recorrido
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
            <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-card shadow-[var(--shadow-lift)]">
              <img
                src={dashboardMockup}
                alt="Panel de FICO mostrando ventas, cobros y comprobantes del negocio"
                width={1200}
                height={912}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos de clientes */}
      <LogoMarquee />

      {/* Beneficios */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Menos tiempo administrando. Más tiempo creciendo.
          </h2>
          <p className="mt-4 text-muted-foreground">FICO centraliza todo lo que ya usas</p>
        </div>

        <SourceFlow />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text, soon }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-[400ms] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                {soon && (
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground">
                    Próximamente
                  </span>
                )}
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Liquidez */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-brand)] text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-halo)]" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Liquidez para tu negocio
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Tienes facturas emitidas.
            <br />
            No esperes 60 días para cobrarlas.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
            La falta de liquidez es la principal razón por la que las empresas peruanas dejan de
            crecer. Con FICO puedes adelantar el cobro de tus facturas hoy. Sin trámites bancarios.
            Sin complicaciones. Nosotros nos encargamos de encontrar la mejor opción para ti.
          </p>

          <div className="mt-12">
            <p className="font-display text-5xl font-semibold text-gradient-light sm:text-6xl">
              7 de cada 10
            </p>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">
              MYPE peruanas enfrenta problemas de liquidez en algún momento del año
            </p>
            <p className="mx-auto mt-2 max-w-md text-[11px] text-primary-foreground/50">
              [Fuente: reemplazar con dato verificado - INEI / Produce / BCRP]
            </p>
          </div>

          <div className="mt-10">
            <Button variant="soft" size="xl" asChild>
              <a href="https://wa.me/51XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                Quiero adelantar mis facturas
                <ArrowRight />
              </a>
            </Button>
            <p className="mt-4 text-xs text-primary-foreground/60">
              Te respondemos en menos de 24 horas
            </p>
          </div>
        </div>
      </section>

      {/* Recorrido */}
      <section id="recorrido" className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
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
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
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
