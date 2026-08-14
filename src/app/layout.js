import "./globals.css"; // Mantiene tus estilos globales de Tailwind cargados

export const metadata = {
  title: "MOMS-BOUTIQUE",
  description: "Luxury Boutique Storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

