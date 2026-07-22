import "./globals.css";
import Script from "next/script";

export const metadata = {

    metadataBase: new URL("https://kd-hausundgarten.de"),

    alternates: {
     canonical: "/",
  },

  title: "K&D Dienstleistungen",
  description: "Gartenpflege und Dienstleistungen in Hamm",

  openGraph: {

    title: "K&D Dienstleistungen | Gartenpflege in Hamm",
    description: "K&D Dienstleistungen bietet professionelle Gartenpflege, Entrümpelung, Transporte, Montage, Allround-Service und viele weitere Dienstleistungen in Hamm und Umgebung.",
    url: "https://kd-hausundgarten.de", 
    siteName: "K&D Dienstleistungen",
    images: [
      {
        url: "/hero-garten.jpeg",
        width: 1200,
        height: 630,
        alt: "K&D Dienstleistungen",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "K&D Dienstleistungen",
    description: "Professionelle Gartenpflege und Dienstleistungen in Hamm.",
    images: ["/hero-garten.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body suppressHydrationWarning>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R772F1EHZS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R772F1EHZS');
          `}
        </Script>

        {children}

      </body>
    </html>
  );
}