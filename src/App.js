import { useState } from 'react'
import useData from './hooks/useData'
import waait from './utils/waait'
import styled from 'styled-components'

const Card = styled.div`
  background: var(--primary);
  box-shadow: -12px 12px 0px var(--secondary);
  color: #fff;
  padding: 8rem;
  text-align: center;
  max-width: 44em;
  width: 90vw;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: -8px 8px 0px var(--secondary);
  }

  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`

const App = () => {
  const [idea, setIdea] = useState(null)
  const { topics, types, techs } = useData()

  const getRandomEntry = arr => {
    const i = Math.floor(Math.random() * arr.length)
    return arr[i]
  }

  const createIdea = async () => {
    const topic = getRandomEntry(topics)
    const type = getRandomEntry(types)
    const tech = getRandomEntry(techs)

    idea ? setIdea('Generating another ridiculous idea...') : setIdea('Generating a ridiculous idea...')

    await waait(2)

    const ridiculousIdea = `Build a ${type} like app about ${topic} and use "${tech}" for it ⚡️`
    setIdea(ridiculousIdea)
  }

  return (
    <div className='app'>
      <Card>
        <h1>
          Ridiculous App Ideas<sup>&trade;</sup>
        </h1>

        {idea ? <h2>{idea}</h2> : <h2>[The next big thing 💸]</h2>}

        <button onClick={createIdea}>{!idea ? '👉🏼 Create an idea! 👈🏼' : 'Create another one!'}</button>
      </Card>
      <div className='copyright'>
        Made by{' '}
        <a
          href='https://github.com/wh1zk1d/ridiculous-app-ideas'
          title='Check me out on GitHub'
          target='_blank'
          rel='noopener noreferrer'>
          wh1zk1d
        </a>
        , who's kinda ridiculous himself.
        <br />
        Feel free to add your own funky ideas!
      </div>
    </div>
  )
}

export default App
