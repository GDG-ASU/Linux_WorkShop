import Hero from './components/Landing/Hero'
import Content from './components/Landing/Content'
import Footer from './components/Footer'
import Student from './components/Student'

function App() {

  return (
    <section className='container space-y-24 pb-12'>
      <Hero />
      <Student/>
      <Content />
      <Footer />
    </section>
  )
}

export default App
