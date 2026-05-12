import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repostería Claudia Patricia",
  description: "Tortas, cupcakes, postres fríos y galletas artesanales. Pedidos por WhatsApp.",
  keywords: ["repostería", "pastelería", "tortas", "cupcakes", "postres", "Cartagena"],
  openGraph: {
    title: "Repostería Claudia Patricia",
    description: "Dulzura en cada detalle. Pedidos por WhatsApp.",
    url: "https://pasteleria-net.vercel.app",
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}