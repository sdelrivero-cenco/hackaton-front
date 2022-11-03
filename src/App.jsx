import { Route , Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home'
import Travels from './pages/Travels/Travels'
import Checkout from './pages/Checkout/Checkout'
import Error from './pages/Error/Error'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/travels' element={<Travels/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
