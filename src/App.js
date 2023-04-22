import Cards from "./components/cards";

function App() {
  return (
    <div className="App" >
      <p className="aboutgame">
        <b>
          <h4>About The Games !!</h4>
        </b>
        <table className="table">
          <ul className="ul">
            <li>You have to find the similar images.</li>
            <li>On Correct Choice score will increased.</li>
            <li>Number of count increased on wrong and right Choice.</li>
            <li>Number of count will find out your soft skill Accuracy.</li>
            <li>On Refresing the page New Game will Start.</li>
          </ul>
        </table>
      </p>
      <h1 style={{ color: "blue" }}>Memory-Game</h1>
      <Cards />
    </div>
  );
}

export default App;
