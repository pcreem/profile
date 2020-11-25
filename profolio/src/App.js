import "./App.css";
import Nav from "./Nav";
import Intro from "./Intro";
import Post from "./Post";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="app__container">
        <Intro />
        <Post />
        <Contact />
      </div>

      <div className="app__footer">
        <strong>&copy; 2020 creempepper.com</strong>
      </div>
    </div>
  );
}

export default App;
