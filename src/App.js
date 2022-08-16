import Nav from "./Pages/Nav";
import './assets/global.scss';
import Home from "./Pages/Home";
import Foot from "./Pages/Foot";
import {Routes , Route} from 'react-router-dom'
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import './assets/icons/style.css'
import New from "./Pages/New";
import { Provider  } from "react-redux/es/exports";
import store from "./Store";

function App() {
  return (
    <Provider store={store} >
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>     
          <Route path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/new" element={<New/>}/>
      </Routes>
      <Foot/>
    </Provider>
  );
}

export default App;
