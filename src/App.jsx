import { Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/Welcome/index"
import HomePage from "./Pages/home/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

export default App;
