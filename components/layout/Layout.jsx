
import { View, Header, Footer } from '@/components'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Layout = ({ children }) => (
  
  <View
    display="grid"
    gridTemplateColumns="1fr"
    gridTemplateRows="auto 1fr auto"

    minHeight="100vh"
    alignItems="start"
    width="100%"
  >
    <Header />
    <main style={{maxWidth:"100vw",overflow:"hidden"}}>
       <FloatingWhatsApp avatar={'/logo.png'} placeholder={'Mesaj'} phoneNumber={'+9005348642135'}   chatMessage={'Merhaba! Nasıl yardımcı olabiliriz?'} accountName={'Mirza Kalıp'} statusMessage={'Genellikle yarım saat içerisinde cevap verir'} />

      {children}
 
    </main>
    <Footer />
  </View>
)

export default Layout
