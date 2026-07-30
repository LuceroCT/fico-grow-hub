import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  FileText,
  Landmark,
  LineChart,
  StickyNote,
  type LucideIcon,
} from "lucide-react";

type Tool = {
  icon: LucideIcon;
  name: string;
  text: string;
};

const tools: Tool[] = [
  {
    icon: FileText,
    name: "SUNAT",
    text: "Emisión de facturas y comprobantes electrónicos.",
  },
  {
    icon: BarChart3,
    name: "SIRE",
    text: "Consulta de ventas, compras y registros electrónicos.",
  },
  {
    icon: LineChart,
    name: "Excel",
    text: "Control financiero y reportes personalizados.",
  },
  {
    icon: Landmark,
    name: "Estados de cuenta",
    text: "Seguimiento de ingresos, gastos y movimientos bancarios.",
  },
  {
    icon: StickyNote,
    name: "Notas",
    text: "Pendientes, recordatorios e ideas del negocio.",
  },
];

// Curved paths from each card (top) converging into FICO (bottom center).
const starts = [100, 300, 500, 700, 900];
const paths = starts.map(
  (x) => `M ${x} 0 C ${x} 70, 500 60, 500 150`,
);

export function ConvergenceFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-14">
      {/* Tarjetas de herramientas */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map(({ icon: Icon, name, text }, i) => (
          <article
            key={name}
            style={{ animationDelay: `${i * 90}ms` }}
            className={`rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-[400ms] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)] ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">{name}</h3>
            <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      {/* Flujo de convergencia */}
      <div className="relative">
        <svg
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-24 w-full sm:h-32"
        >
          <defs>
            <linearGradient id="flowStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--border)" />
              <stop offset="100%" stopColor="var(--primary-glow)" />
            </linearGradient>
          </defs>
          {paths.map((d, i) => (
            <g key={d}>
              <path
                d={d}
                fill="none"
                stroke="url(#flowStroke)"
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: visible ? 0 : 1,
                  transition: `stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
                }}
              />
              {visible && (
                <circle r="3" fill="var(--primary-glow)" opacity="0.9">
                  <animateMotion
                    dur="3.2s"
                    begin={`${i * 0.45}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                  />
                </circle>
              )}
            </g>
          ))}
        </svg>

        {/* Mensaje de transición */}
        <p className="-mt-2 text-center text-xs tracking-wide text-muted-foreground sm:text-sm">
          Centraliza la información que ya utilizas.
        </p>
      </div>

      {/* Tarjeta FICO */}
      <div className="mx-auto mt-6 max-w-md rounded-3xl bg-[image:var(--gradient-brand)] p-[1.5px] shadow-[var(--shadow-lift)]">
        <div className="rounded-3xl bg-card px-6 py-8 text-center">
          <h3 className="font-display text-xl font-semibold">Todo en un solo lugar</h3>
          <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
            Toda la información importante de tu empresa, organizada en una sola vista.
          </p>

          {/* Mockup abstracto */}
          <div className="mt-6 rounded-2xl border border-border bg-background p-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
            </div>
            <div className="mt-4 flex h-24 items-end justify-center gap-2">
              {[38, 58, 30, 72, 48, 84].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                  className={`w-4 rounded-t-md bg-[image:var(--gradient-cta)] ${
                    visible ? "animate-fade-up" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="mt-4 h-1.5 w-2/3 rounded-full bg-secondary" />
            <div className="mt-2 h-1.5 w-1/3 rounded-full bg-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
