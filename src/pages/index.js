import Header from '../components/Header'
import CharactersList from '../components/CharactersList'

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <section className="py-5 bg-dark">
          <CharactersList />
        </section>
      </main>
    </>
  )
}