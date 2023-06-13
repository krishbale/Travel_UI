import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'

export default  function Home() {
 
  return (
    <>
   < Navbar />
   <Landing />
    </>
  
  )
}
