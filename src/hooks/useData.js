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
  const [types] = useState(['Tinder', 'To-Do', 'Wiki', 'Instagram', 'Netflix', 'Interactive', 'Shop'])
  const [techs] = useState(['useState', 'API fetching', 'React Router', 'a custom hook', 'Context', 'Zustand'])

  return { topics, types, techs }
}

export default useData
