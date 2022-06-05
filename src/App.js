
import './App.css';
import Header from "./components/header/header"
import Footer from './components/footer/footer';
import Catrgories from './components/categories/categories';
import MediaCard from './components/products/products'
function App() {
  return (
    <div className="App">
     <Header/>
     <Catrgories/>
     <MediaCard/>
     <Footer/>
    </div>
  );
}

export default App;
