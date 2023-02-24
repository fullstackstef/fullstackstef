import { ReactNode } from 'react'

import Navbar from '@/components/navbar/Navbar'
import MobileNavbar from '@/components/mobileNavbar/MobileNavbar'
import Footer from '@/components/footer/Footer'

import useMediaQuery from '@/hooks/useMediaQuery'
interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const small = useMediaQuery('(max-width: 576px)')
  const medium = useMediaQuery('(max-width: 768px)')
  const large = useMediaQuery('(max-width: 992px)')

  return (
    <>
      {small || medium || large ? <MobileNavbar /> : <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
