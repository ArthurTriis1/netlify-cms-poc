import React, { ReactNode } from 'react'
import { GlobalStyles } from 'twin.macro'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout