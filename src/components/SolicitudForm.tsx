import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const facturacionOptions = [
  "Menos de S/ 20,000",
  "S/ 20,000 – 50,000",
  "S/ 50,000 – 100,000",
  "Más de S/ 100,000",
];

const rubroOptions = [
  "Comercio",
  "Servicios",
  "Manufactura y producción",
  "Construcción",
  "Transporte y logística",
  "Tecnología",
  "Otro",
];

const capitalOptions = [
  "Hasta S/ 2,500",
  "S/ 2,500 – 5,000",
  "S/ 5,000 – 7,500",
  "S/ 7,500 – 10,000",
];

const schema = z.object({
  nombre: z.string().trim().min(1, "Ingresa tu nombre completo"),
  empresa: z.string().trim().min(1, "Ingresa el nombre de tu empresa"),
  ruc: z
    .string()
    .min(1, "Ingresa el RUC de tu empresa")
    .regex(/^\d{11}$/, "El RUC debe tener exactamente 11 dígitos"),
  whatsapp: z
    .string()
    .min(1, "Ingresa tu número de WhatsApp")
    .regex(/^9\d{8}$/, "Ingresa un celular peruano válido de 9 dígitos (empieza con 9)"),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico")
    .email("Ingresa un correo electrónico válido"),
  facturacion: z.string().min(1, "Selecciona tu facturación mensual"),
  rubro: z.string().min(1, "Selecciona el rubro de tu negocio"),
  capital: z.string().min(1, "Selecciona el capital que necesitas"),
  acepta: z.boolean().refine((v) => v, {
    message: "Debes aceptar la Política de privacidad y el Tratamiento de datos",
  }),
});

type SolicitudValues = z.infer<typeof schema>;

const onlyDigits = (value: string, max: number) => value.replace(/\D/g, "").slice(0, max);

export function SolicitudForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<SolicitudValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      empresa: "",
      ruc: "",
      whatsapp: "",
      email: "",
      facturacion: "",
      rubro: "",
      capital: "",
      acepta: false,
    },
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  const selectField = (
    name: "facturacion" | "rubro" | "capital",
    label: string,
    options: string[],
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="h-11 rounded-xl">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="rounded-3xl bg-card p-6 text-left text-card-foreground shadow-[var(--shadow-lift)] sm:p-10">
        {submitted ? (
          <div className="py-10 text-center" role="status">
            <CheckCircle2 className="mx-auto size-14 text-primary" />
            <h3 className="mt-5 text-2xl font-semibold">¡Gracias! Recibimos tu solicitud</h3>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Te contactaremos por WhatsApp o correo en menos de 24 horas.
            </p>
          </div>
        ) : (
          <Form {...form}>
            {/* TODO: conectar el envío a backend (Lovable Cloud / Supabase) y notificación por correo */}
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input autoComplete="name" className="h-11 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="organization"
                          className="h-11 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ruc"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>RUC</FormLabel>
                      <FormControl>
                        <Input
                          inputMode="numeric"
                          placeholder="20123456789"
                          className="h-11 rounded-xl"
                          {...field}
                          onChange={(e) => field.onChange(onlyDigits(e.target.value, 11))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          placeholder="987654321"
                          className="h-11 rounded-xl"
                          {...field}
                          onChange={(e) => field.onChange(onlyDigits(e.target.value, 9))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          placeholder="nombre@empresa.pe"
                          className="h-11 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {selectField("facturacion", "Facturación mensual aproximada", facturacionOptions)}
                {selectField("rubro", "Rubro", rubroOptions)}
                {selectField("capital", "Capital que necesitas", capitalOptions)}
              </div>

              <FormField
                control={form.control}
                name="acepta"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <div className="flex items-start gap-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(v) => field.onChange(v === true)}
                          className="mt-0.5"
                        />
                      </FormControl>
                      <FormLabel className="text-sm leading-relaxed font-normal text-muted-foreground">
                        Acepto la{" "}
                        {/* PLACEHOLDER: enlazar a la página real de Política de privacidad */}
                        <a href="#top" className="font-medium text-primary underline-offset-4 hover:underline">
                          Política de privacidad
                        </a>{" "}
                        y el{" "}
                        {/* PLACEHOLDER: enlazar a la página real de Tratamiento de datos */}
                        <a href="#top" className="font-medium text-primary underline-offset-4 hover:underline">
                          Tratamiento de datos
                        </a>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-8 text-center">
                <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                  Enviar solicitud
                  <ArrowRight />
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Solo atendemos empresas B2B que ya facturan.
                </p>
              </div>
            </form>
          </Form>
        )}
      </div>

      {/* PLACEHOLDER: número real */}
      <a
        href="https://wa.me/51XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
      >
        <MessageCircle className="size-4" />
        ¿Prefieres escribirnos?{" "}
        <span className="font-semibold underline underline-offset-4">Habla por WhatsApp</span>
      </a>
    </div>
  );
}
