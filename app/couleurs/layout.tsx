import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Générateur de nuances de couleurs ',
  description:
    'Générer vos nuances, palettes de couleurs avec notre cercle chromatique. Créer facilement votre dégradé de couleur et copier la config tailwindcss pour votre projet',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
