import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import Gallery from '@/components/ui/Gallery'
import SectionCards from '@/components/ui/SectionCards'
import Milestones from '@/components/ui/Milestones'
import Partners from '@/components/ui/Partners'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <SectionCards />
      <Milestones />
      <Partners />
      <Footer />
      <div style={{ height: '100vh', background: '#080808' }} />
    </main>
  )
}