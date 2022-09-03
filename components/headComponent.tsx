import Head from 'next/head'
import React from 'react'

interface HeadProps {
    title : string
}

export const HeadComponent = ({ title } : HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <script src="https://unpkg.com/@alpinejs/persist@3.10.3/dist/cdn.min.js"></script>
      <script src="https://unpkg.com/alpinejs" defer></script>
      <link rel="shortcut icon" href="images/ai-glass.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>

      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@600&display=swap"
          rel="stylesheet" />
      <link rel="stylesheet" href="https://unpkg.com/akar-icons-fonts/src/css/akar-icons.css" />
    </Head>
  )
}
