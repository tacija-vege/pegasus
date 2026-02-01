import "./globals.css";

export const metadata = {
  title: "Sentio Landing",
  description: "Landing page recreation with Next.js + Tailwind v4"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-white antialiased overflow-x-clip">
        {children}
      </body>
    </html>
  );
}