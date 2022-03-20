import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
