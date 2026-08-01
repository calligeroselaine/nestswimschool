"use client";

import { cloneElement, isValidElement, useState, type ReactElement } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./Button";
import { programs } from "@/lib/data/programs";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  program: z.string().trim().optional(),
  message: z.string().trim().min(10, "Tell us a little more about what you're after."),
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const inputClass =
  "w-full rounded-xl border border-line-on-dark bg-foam/5 px-4 py-3 text-sm text-foam placeholder:text-foam/40 outline-none transition-colors focus:border-sunlit aria-invalid:border-red-300";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        id="enquiry-form"
        role="status"
        className="mx-auto mt-10 max-w-[520px] rounded-2xl border border-sunlit/40 bg-foam/5 p-8 text-center"
      >
        <p className="font-display text-md text-foam uppercase">Thanks — we&rsquo;ve got it!</p>
        <p className="mt-2 text-sm text-foam/75">
          Your enquiry is in. We&rsquo;ll be in touch shortly to sort out your free trial.
        </p>
      </div>
    );
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto mt-10 grid max-w-[560px] gap-4 text-left"
    >
      {/* Honeypot — hidden from real users, catches basic bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("company")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Your name" error={errors.name?.message}>
          <input className={inputClass} autoComplete="name" {...register("name")} />
        </Field>
        <Field name="email" label="Email" error={errors.email?.message}>
          <input type="email" className={inputClass} autoComplete="email" {...register("email")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="phone" label="Phone (optional)" error={errors.phone?.message}>
          <input type="tel" className={inputClass} autoComplete="tel" {...register("phone")} />
        </Field>
        <Field name="program" label="Program you're interested in" error={errors.program?.message}>
          <select className={inputClass} defaultValue="" {...register("program")}>
            <option value="" className="text-ink">
              Not sure yet
            </option>
            {programs.map((program) => (
              <option key={program.slug} value={program.name} className="text-ink">
                {program.shortName}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field name="message" label="Tell us about your swimmer" error={errors.message?.message}>
        <textarea
          rows={4}
          className={inputClass}
          placeholder="Age, experience in the water, preferred location or times..."
          {...register("message")}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-300">
          Something went wrong sending your enquiry. Please try again shortly.
        </p>
      )}

      <p className="text-xs text-foam/55">
        By submitting this form you agree to be contacted by SwimNest about your enquiry. Your
        details are only ever used to get back to you — see our{" "}
        <Link href="/privacy-policy" className="text-sunlit underline">
          Privacy Policy
        </Link>
        .
      </p>

      <Button type="submit" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}

function Field({
  name,
  label,
  error,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  children: ReactElement<Record<string, unknown>>;
}) {
  const errorId = `${name}-error`;
  const field = isValidElement(children)
    ? cloneElement(children, {
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })
    : children;

  return (
    <label className="block">
      <span className="mb-1.5 block text-2xs font-bold tracking-[0.08em] text-foam/70 uppercase">
        {label}
      </span>
      {field}
      {error && (
        <span id={errorId} role="alert" className="mt-1 block text-xs text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}
