import { useEffect, useState } from 'react'
import './App.css'
import { getRamdomFact } from './services/facts.js'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsworld}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    getRamdomFact().then(newFact => setFact(newFact))
  }, [])

  // Para recuperar la imagen cada vez que cambia la cita
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3)
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageURL(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRamdomFact(setFact)
    setFact(newFact)
  }

  return (

    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={`Image extraxted using the first three words for ${fact}`} />}
      </section>
    </main>

  )
}
