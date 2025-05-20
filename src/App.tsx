import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from'./components/layouts/Home.tsx'
import {SessionProvider} from "./core/providers/sessionProvider.tsx";

function App() {

  return (
        <SessionProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<>TODO 404</>} />
                </Routes>
            </BrowserRouter>
        </SessionProvider>
  )
}

export default App
