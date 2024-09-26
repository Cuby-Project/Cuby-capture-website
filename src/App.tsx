import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from'./components/layouts/Home.tsx'

function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<>TODO 404</>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
