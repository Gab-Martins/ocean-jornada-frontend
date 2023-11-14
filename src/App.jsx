import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags: ["Status:Vivo", "AAA:aaa", "BBB:bbb"]
  }
  const item2 = {
    name: " Morty",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
}
  const item3 = {
    name: "Summer Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
}
  //const itens = [item1, item2, item3]

  const[itens, setItens] = useState([])

  async function carregarDadosApi(){
    const apiUrl = "https://rickandmortyapi.com/api/character/"

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItens(body.results)
  }

  useEffect(function (){
    carregarDadosApi()
  }, [])

  return (
    <>
      <div className='cards'>
      {itens.map(function(item){
        return <Card item = {item}/>
      })}
      </div>
    </>
  )
}

export default App
