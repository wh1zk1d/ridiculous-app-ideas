import { useState } from 'react'

const useData = () => {
  const [topics] = useState([
    'Dinosaurs',
    'Space pirates',
    'Willem Dafoe',
    'Star Wars',
    'Rick and Morty',
    'Plants',
    'Coffee',
  ])
  const [types] = useState(['Tinder', 'To-Do', 'Wiki', 'Instagram', 'Netflix'])
  const [techs] = useState(['useState', 'API fetching', 'React Router', 'Hooks', 'Context'])

  return { topics, types, techs }
}

export default useData
