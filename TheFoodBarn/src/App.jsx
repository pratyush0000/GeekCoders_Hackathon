import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Donate from './pages/donate';
import Register from './pages/register';
import Error from './pages/error';

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
