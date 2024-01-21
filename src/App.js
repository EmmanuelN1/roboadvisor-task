import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Footer from './component/Footer';


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Footer/>

        </BrowserRouter>
    </>
  )
}

export default App;
