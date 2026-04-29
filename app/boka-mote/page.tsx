"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BokaMote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const successRef = useRef<HTMLHeadingElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!acceptedPrivacy) {
      setSubmitError("Du behöver godkänna integritetspolicyn.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Failed");

      setIsSuccess(true);
      setAcceptedPrivacy(false);

      setTimeout(() => {
        successRef.current?.focus();
      }, 0);
    } catch (error) {
      setSubmitError("Något gick fel. Försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <main className="relative min-h-screen text-white">
        <div className="fixed inset-x-0 top-0 z-[120] h-[10px]">
          <Image
            src="/line-axa.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <Header variant="boka" />

        <section className="relative px-6 pt-[180px] pb-28 md:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111c_0%,#0a1724_40%,#142b44_100%)]" />

          <div className="relative mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-[12px] uppercase tracking-[0.25em] text-[#F5B74E]">
                Boka ett första samtal
              </p>

              <h1 className="mt-4 text-[42px] md:text-[64px] leading-[0.95] font-semibold tracking-[-0.05em]">
                Låt oss prata om
                <br />
                vad som faktiskt
                <br />
                gör skillnad
              </h1>

              <p className="mt-6 text-[18px] text-white/80 max-w-xl leading-[1.8]">
                Ett första samtal där vi tittar på nuläge, vad som är oklart och
                vad som sannolikt borde prioriteras först.
              </p>

              <div className="mt-12 space-y-4">
                {[
                  "Vad ni gör idag och vad som fungerar",
                  "Vad som känns oklart eller står still",
                  "Vad som borde prioriteras först",
                ].map((text) => (
                  <div
                    key={text}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                  >
                    <p className="text-white/90">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[28px] border border-[#e5dccd] bg-[#f7f3eb] p-8 text-[#1A2430] shadow-xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="text-sm text-red-600">
                      {submitError}
                    </div>
                  )}

                  <Input label="Namn" name="name" required />
                  <Input label="Företag" name="company" />
                  <Input label="E-post" name="email" type="email" required />

                  <Textarea label="Kort om behov" name="message" required />

                  <div className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={acceptedPrivacy}
                      onChange={(e) =>
                        setAcceptedPrivacy(e.target.checked)
                      }
                      className="mt-1 accent-[#F5B74E]"
                    />
                    <span>
                      Jag godkänner{" "}
                      <a
                        href="/integritetspolicy"
                        className="text-[#8a5a14] underline"
                      >
                        integritetspolicyn
                      </a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#1A2430] text-white py-3 font-medium hover:bg-[#24364a]"
                  >
                    {isSubmitting ? "Skickar..." : "Skicka"}
                  </button>
                </form>
              ) : (
                <div>
                  <h2 ref={successRef} tabIndex={-1} className="text-2xl font-medium">
                    Tack!
                  </h2>
                  <p className="mt-3">
                    Vi återkommer så snart vi kan.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

/* COMPONENTS */

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-[#cfc6ba] px-4 py-3 bg-white outline-none focus:border-[#8a5a14] focus:shadow-[0_0_0_3px_rgba(138,90,20,0.15)]"
      />
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        {...props}
        rows={5}
        className="mt-2 w-full rounded-xl border border-[#cfc6ba] px-4 py-3 bg-white outline-none focus:border-[#8a5a14] focus:shadow-[0_0_0_3px_rgba(138,90,20,0.15)]"
      />
    </div>
  );
}