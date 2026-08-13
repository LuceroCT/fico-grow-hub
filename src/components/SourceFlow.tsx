import { BarChart3, ChevronRight, FileText, Landmark, LineChart } from "lucide-react";

const sources = [
  { icon: FileText, name: "SUNAT" },
  { icon: BarChart3, name: "SIRE" },
  { icon: LineChart, name: "Excel" },
  { icon: Landmark, name: "Estados de cuenta" },
];

function Arrow() {
  return <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground/50" />;
}

export function SourceFlow() {
  return (
    <div className="mt-10 flex flex-wrap items-start justify-center gap-x-3 gap-y-6 sm:gap-x-5">
      {sources.map(({ icon: Icon, name }) => (
        <div key={name} className="flex items-start gap-3 sm:gap-5">
          <div className="flex w-24 flex-col items-center gap-2 text-center sm:w-28">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-secondary text-muted-foreground">
              <Icon className="size-5" />
            </span>
            <span className="text-xs leading-tight text-muted-foreground">{name}</span>
          </div>
          <Arrow />
        </div>
      ))}

      <div className="flex w-24 flex-col items-center gap-2 text-center sm:w-28">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-lift)]">
          F
        </span>
        <span className="text-xs leading-tight font-semibold text-foreground">FICO</span>
      </div>
    </div>
  );
}
