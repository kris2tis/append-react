import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import "./index.css"
const App = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
    </Routes>
);

export default App;