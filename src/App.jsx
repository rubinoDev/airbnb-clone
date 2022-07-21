import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Card } from "./components/Card"

import '../styles/styles.css'

import data from './data';
function App() {

  const cards = data.map(card => <Card 
  key = {card.id}
  {...card}

  />)

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <main>
      <section className="hero">
        <Hero/>
      </section>

      <section className="cards">
        {cards}
        
      </section>

      </main>
    </div>
  )
}

export default App
