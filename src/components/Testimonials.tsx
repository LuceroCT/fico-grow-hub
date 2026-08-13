import { Quote } from "lucide-react";

// TODO: reemplazar data dummy con testimonios reales de clientes del piloto. Incluir foto si está disponible.
const testimonials = [
  {
    text: "Antes perdía horas cada fin de mes ordenando mis facturas en Excel. Con FICO lo tengo todo claro en minutos. No entiendo cómo trabajaba antes sin esto.",
    name: "Carlos Mendoza",
    role: "Gerente General · Distribuidora CM",
    sector: "Distribución de alimentos",
    initials: "CM",
    avatarClass: "bg-primary text-primary-foreground",
  },
  {
    text: "Lo que más me sorprendió fue lo fácil que fue empezar. En un día ya estaba emitiendo facturas y viendo mis números reales. Y encima es gratis.",
    name: "Ana Torres",
    role: "Socia fundadora · Textiles Andinos SAC",
    sector: "Manufactura textil",
    initials: "AT",
    avatarClass: "bg-accent text-accent-foreground",
  },
  {
    text: "Por fin puedo saber cuánto me deben y cuánto tengo disponible sin llamar a mi contador. FICO me da esa tranquilidad todos los días.",
    name: "Roberto Silva",
    role: "Director Comercial · Servicios RS EIRL",
    sector: "Servicios empresariales",
    initials: "RS",
    avatarClass: "bg-muted text-muted-foreground",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">
          Lo que dicen quienes ya usan FICO
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <Quote className="size-8 text-primary/25" aria-hidden="true" />
              <p className="mt-4 flex-1 leading-relaxed text-foreground/85">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-semibold ${t.avatarClass}`}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.sector}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
