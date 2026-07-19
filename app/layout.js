import "./globals.css";

export const metadata = {
  title: "K&D Dienstleistungen",
  description: "Gartenpflege und Dienstleistungen in Hamm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}