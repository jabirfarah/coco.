import './App.css'
import Header from './components/header'
import Article from './components/article'
import Devto from "./components/devto.jsx";
import ProductHunt from "./api/producthunt.jsx";
function App() {

  return (
    <>
     
          <Header/>
        
        <ProductHunt/>
        <Article/>
    </>
  )
}

export default App;
