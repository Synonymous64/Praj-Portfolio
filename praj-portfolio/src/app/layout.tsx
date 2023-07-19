import "@/scss/index.scss"
import type { Metadata } from 'next'
import { Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Praj Portfolio',
  description: "This website describes and reflects every minute aspect of the Prajwal's Journey in Software Engineering",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} ${raleway.className}`}>{children}</body>
    </html>
  )
}
