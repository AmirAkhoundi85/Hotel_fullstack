import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import RoutesMap from './routes/RoutesMap';
import Footer from './components/layout/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesMap/>
    </BrowserRouter>
  )
}

export default App;
