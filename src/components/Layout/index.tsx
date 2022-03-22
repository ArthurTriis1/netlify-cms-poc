import React, { ReactNode } from 'react'
import { GlobalStyles } from 'twin.macro'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
)

export default Layout