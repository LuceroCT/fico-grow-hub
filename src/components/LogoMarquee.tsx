// TODO: reemplazar placeholders con logos reales.
// Aplicar filter: grayscale(100%) a cada <img>
const logos = ["Logo empresa", "Logo empresa", "Logo empresa", "Logo empresa", "Logo empresa"];

export function LogoMarquee() {
  const track = [...logos, ...logos];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-16">
        <p className="text-center text-sm text-muted-foreground">
          Nuestros clientes facturan a las empresas más grandes del Perú
        </p>

        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-start gap-10">
            {track.map((label, i) => (
              <div key={i} className="flex shrink-0 flex-col items-center gap-2">
                <div
                  className="h-[60px] w-[160px] rounded-xl bg-muted"
                  style={{ filter: "grayscale(100%)" }}
                  aria-hidden="true"
                />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Si también les vendes a ellas, FICO está hecho para ti.
        </p>
      </div>
    </section>
  );
}
