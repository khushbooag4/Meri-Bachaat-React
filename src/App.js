import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/MainSection/Main';

function App() {
  return (
    <>
     <nav><Navbar /></nav>
    <section className="main">
      <Main />
    </section>
    </>
  );
}

export default App;
