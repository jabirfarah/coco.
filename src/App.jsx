import './App.css'
import Header from './components/header'
import Article from './components/article'
import ProductHunt from "./api/producthunt.jsx";
function App() {

  return (
    <>
        <Header/>

        <div className="flex">
            <Article/>
            <ProductHunt/>
        </div>
    </>
  )
}

export default App;
