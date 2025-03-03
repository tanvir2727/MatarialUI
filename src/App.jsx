import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DeshBoard from './components/DeshBoard';

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<SignUp />} />  {/* Default route to SignUp */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DeshBoard />} />
      </Routes>
    
    </>
  )
}

export default App
