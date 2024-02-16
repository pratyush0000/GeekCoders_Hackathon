import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Register from './pages/Register';
import Error from './pages/Error';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/donate' element = {<Donate/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='*' element = {<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
