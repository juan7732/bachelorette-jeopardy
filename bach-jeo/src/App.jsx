import Board from "./features/game/Board";

function App() {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen">
      <div className="flex w-full align-middle items-center">
        <img
          src="/images/steven_face.png"
          alt="Steven Bach"
          className="w-[5%] h-auto mx-auto animate-spin"
        />
        <h1 className="font-primary uppercase">DeJeopardy</h1>
        <img
          src="images/hannah_face.png"
          alt="Hannah Bach"
          className="w-[5%] h-auto mx-auto animate-bounce"
        />
      </div>
      <Board />
    </div>
  );
}

export default App;
