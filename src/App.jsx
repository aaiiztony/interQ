import { Hero, Main, Footer} from "./components";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero/>
        <Main/>
      </div>
      <Footer/>
    </main>
  );
};

export default App;
