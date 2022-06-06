
import './App.css';
import Header from "./components/header/header"
import Footer from './components/footer/footer';
import Catrgories from './components/categories/categories';
import MediaCard from './components/products/products'
import CustomizedList from './components/cart/cart'
function App() {
  return (
    <div className="App">
     <Header/>
     <div style={{display:"flex"}}>
     <CustomizedList />
     <Catrgories/>
     </div>
     <MediaCard/>
     <Footer/>
    </div>
  );
}

export default App;
