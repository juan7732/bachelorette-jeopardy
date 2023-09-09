import Board from './features/game/Board';

function App() {

  return (
    <div className='flex flex-col justify-evenly items-center h-screen'>
      <h1 className="font-primary uppercase">DeJeopardy</h1>
      <Board />
    </div>
  )
}

export default App
