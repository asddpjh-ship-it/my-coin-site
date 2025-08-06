import "./globals.css";

export const metadata = {
  title: "CryptoNova",
  description: "The next generation decentralized token",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
