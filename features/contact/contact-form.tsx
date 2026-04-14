"use client";

import { useState } from "react";
import { maskWhatsappBR } from "@/utils/phone";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [whatsappDigits, setWhatsappDigits] = useState("");

  const onSubmit = () => {
    if (!name || whatsappDigits.length < 10 || !message) {
      return;
    }
    fetch(
      `${process.env.NEXT_PUBLIC_EVOLUTION_API_URL}/message/sendText/${process.env.NEXT_PUBLIC_EVOLUTION_API_INSTANCE_NAME}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.NEXT_PUBLIC_EVOLUTION_API_KEY ?? "",
        },
        body: JSON.stringify({
          text: `*ATENÇÃO*: Novo contato via formulário do Portfólio\n*Nome:* ${name}\n*WhatsApp:* https://wa.me/${whatsappDigits}\n*Mensagem:*  ${message}`,
          number: process.env.NEXT_PUBLIC_EVOLUTION_API_PHONE ?? "",
        }),
      },
    ).then((_response) => {
      console.log(_response);
      setStatus("success");
    });
  };

  const { masked: whatsappMasked } = maskWhatsappBR(whatsappDigits);

  return (
    <div className="rounded-2xl bg-slate-900/70 p-6 shadow-lg shadow-black/25 backdrop-blur transition-shadow duration-200 hover:shadow-xl hover:shadow-black/35">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm text-slate-200">
          Nome
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition-colors duration-200 focus:border-emerald-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          WhatsApp
          <input
            value={whatsappMasked}
            onChange={(e) => setWhatsappDigits(maskWhatsappBR(e.target.value).digits)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition-colors duration-200 focus:border-emerald-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Mensagem
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none transition-colors duration-200 focus:border-emerald-400"
          />
        </label>
      </div>
      <button
        type="button"
        className="mt-5 cursor-pointer rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        onClick={onSubmit}
      >
        Enviar mensagem
      </button>
      {status === "success" ? (
        <p role="status" className="mt-3 text-sm text-emerald-400">
          Mensagem enviada com sucesso. Retornarei em breve.
        </p>
      ) : null}
    </div>
  );
}
