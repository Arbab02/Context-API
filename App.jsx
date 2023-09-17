import Home from './components/Home'
import NoteState from './context/NoteState'



function App() {


  return (
    <NoteState>
    <>
      <Home/>
    </>
    </NoteState>

  )
}

export default App;
