import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repostería Claudia Patricia",
  description: "Tortas, cupcakes, postres fríos y galletas artesanales. Pedidos por WhatsApp.",
  keywords: ["repostería", "pastelería", "tortas", "cupcakes", "postres", "Cartagena"],
  openGraph: {
    title: "Repostería Claudia Patricia",
    description: "Dulzura en cada detalle. Pedidos por WhatsApp.",
    url: "https://tu-dominio.vercel.app", // 👈 cámbialo por tu URL real
    siteName: "Repostería Claudia Patricia",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}