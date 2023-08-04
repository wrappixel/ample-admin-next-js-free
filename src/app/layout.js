import Head from "next/head";
import "@/styles/style.scss";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <Head>
        <title>Ample Admin Next Js Free Admin Dashboard</title>
        <meta name="description" content="Ample Admin Next Js Free Admin Dashboard" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  )
}