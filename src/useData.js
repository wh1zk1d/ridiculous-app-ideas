import { useState } from 'react'

const useData = () => {
  const [topics] = useState(['Dinosaurs', 'Space pirates', 'Willem Dafoe', 'Star Wars'])
  const [types] = useState(['Tinder', 'To-Do', 'Wiki', 'Instagram', 'Netflix'])
  const [techs] = useState(['useState', 'API fetching', 'React Router', 'Hooks'])

  return { topics, types, techs }
}

export default useData
