import {useContext} from 'react'
import noteContext from '../context/noteContext'

const Home = () => {
const a = useContext(noteContext)

  return (
    <h1>This is an about page {a.name} and age is {a.age}</h1>
  )
}

export default Home;

