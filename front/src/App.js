import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutesMap from './routes/RoutesMap';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesMap/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
