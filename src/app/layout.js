import "./globals.css";

export const metadata = {
  title: "PegasusOSX — Autonomous On-Chain Agent Infrastructure",
  description:
    "Developer-first platform for building automated on-chain agents with deep DeFi integrations, tokenized ownership, and reliable 24/7 execution."
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