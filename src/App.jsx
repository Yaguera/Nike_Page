import { Hero,PopularProducts,CustomerReviews,Footer,Services,SpecialOffer,Subscribe,SuperQuality } from './sections';
import Nav from './components/Nav';

const App = () => (
    <main className='relative'>
      <Nav/>
      <section id='home' className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section id='products' className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )

export default App
