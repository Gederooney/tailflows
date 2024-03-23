import React from 'react'

const ComingSoon = ({ text }: { text?: string }) => {
  return (
    <>
      <h1 className="max-w-2xl mx-auto mb-8 text-5xl font-bold text-center dark:text-white animate-pulse text-secondary-900">
        Bientôt disponible
      </h1>
      <p className="max-w-xl mx-auto mb-8 text-lg text-center dark:text-white text-secondary-900">
        {text ??
          'Nous travaillons fort pour que cette page soit disponible bientôt. Revenez nous voir bientôt et Restez connecté!'}
      </p>
    </>
  )
}

export default ComingSoon
