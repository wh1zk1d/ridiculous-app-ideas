import { useState } from 'react'
import useData from './useData'
import styled from 'styled-components'

const Card = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.011), 0 0px 5.3px rgba(0, 0, 0, 0.016), 0 0px 10px rgba(0, 0, 0, 0.02),
    0 0px 17.9px rgba(0, 0, 0, 0.024), 0 0px 33.4px rgba(0, 0, 0, 0.029), 0 0px 80px rgba(0, 0, 0, 0.04);
  padding: 3rem;
  text-align: center;
  max-width: 42em;
  width: 60vw;
`

const App = () => {
  const [idea, setIdea] = useState(null)
  const { topics, types, techs } = useData()

  const getRandomEntry = arr => {
    const i = Math.floor(Math.random() * arr.length)
    return arr[i]
  }

  const createIdea = () => {
    const topic = getRandomEntry(topics)
    const type = getRandomEntry(types)
    const tech = getRandomEntry(techs)

    const idea = `Build a ${type} like app about ${topic} and use "${tech}" for it`
    setIdea(idea)
  }

  return (
    <div className='app'>
      <Card>
        <h1>Ridiculous App Ideas 🤪</h1>

        {idea && <h2>{idea}</h2>}

        <button onClick={createIdea}>{!idea ? 'Create an idea!' : 'Create another one!'}</button>
      </Card>
    </div>
  )
}

export default App
