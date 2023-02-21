import { ReactNode } from 'react'

import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footer/Footer'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
