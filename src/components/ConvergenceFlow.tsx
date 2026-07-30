import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  FileText,
  Landmark,
  LineChart,
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
    text: "Facturas y comprobantes electrónicos.",
  },
  {
    icon: BarChart3,
    name: "SIRE",
    text: "Registros de ventas y compras.",
  },
  {
    icon: LineChart,
    name: "Excel",
    text: "Reportes y control financiero.",
  },
  {
    icon: Landmark,
    name: "Estados de cuenta",
    text: "Ingresos, gastos y movimientos.",
  },
];

// Four symmetric curves from each card (top) into a single convergence point.
const starts = [125, 375, 625, 875];
const paths = starts.map((x) => `M ${x} 0 C ${x} 40, 500 30, 500 76`);

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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12">
      {/* Fuentes de información */}
      <div className="grid grid-cols-2 items-stretch gap-4 lg:grid-cols-4">
        {tools.map(({ icon: Icon, name, text }, i) => (
          <article
            key={name}
            style={{ animationDelay: `${i * 90}ms` }}
            className={`flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-[400ms] hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)] ${
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

      {/* Convergencia */}
      <div className="relative">
        <svg
          viewBox="0 0 1000 84"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-14 w-full sm:h-16"
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
                  transition: `stroke-dashoffset 800ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
                }}
              />
              {visible && (
                <circle r="2.5" fill="var(--primary-glow)" opacity="0.9">
                  <animateMotion
                    dur="3.2s"
                    begin={`${i * 0.5}s`}
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

        {/* Punto de convergencia */}
        <span
          className={`absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[image:var(--gradient-cta)] transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Mensaje de transición */}
      <p className="mt-4 text-center text-xs tracking-wide text-muted-foreground sm:text-sm">
        Centraliza la información que ya utilizas.
      </p>

      {/* Tarjeta FICO */}
      <div className="mx-auto mt-4 max-w-md rounded-3xl bg-[image:var(--gradient-brand)] p-[1.5px] shadow-[var(--shadow-lift)]">
        <div className="rounded-3xl bg-card px-6 py-7 text-center">
          <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground">
            F
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold">Todo en un solo lugar</h3>
          <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
            Toda la información importante de tu empresa, organizada en una sola vista.
          </p>
        </div>
      </div>
    </div>
  );
}
