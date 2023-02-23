import { ReactNode } from 'react'

import Navbar from '@/components/navbar/Navbar'
import MobileNavbar from '@/components/mobileNavbar/MobileNavbar'
import Footer from '@/components/footer/Footer'

import useMediaQuery from '@/hooks/useMediaQuery'
interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
