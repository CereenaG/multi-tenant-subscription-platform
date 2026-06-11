import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Features from './pages/Features.jsx';
function App() {
  return(
    
     <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<SignUp />} />

            </Routes>

        </BrowserRouter>
  );
   }

export default App
