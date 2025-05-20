import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Clínica RBS - Odontologia e Estética Premium em Castro/PR",
  description:
    "Transforme seu sorriso com a Clínica RBS. Referência em odontologia estética e saúde bucal em Castro/PR com atendimento personalizado e tecnologia de ponta.",
  icons: {
    icon: [
      { url: "/images/favicon.ico", type: "image/png", sizes: "16x16" },
      { url: "/images/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/images/favicon.ico", type: "image/png", sizes: "16x16" },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
          <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4YRJV2398P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4YRJV2398P');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
