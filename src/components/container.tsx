import React from 'react'

export default function ContainerDiv({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full max-w-screen-2xl h-screen mx-auto px-2 py-8">
        {children}
    </div>
  )
}
