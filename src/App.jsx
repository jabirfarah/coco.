import './App.css'
import Header from './components/header'
import Article from './components/article'
import Devto from "./components/devto.jsx";
import ProductHunt from "./api/producthunt.jsx";
function App() {

  return (
    <>
    <div className='h-screen flex flex-col'>
        <Header/>
        <Article/>
        <ProductHunt/>
    </div>
    </>
  )
}

export default App;
