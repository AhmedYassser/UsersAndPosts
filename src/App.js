import './App.css';
import { About } from './componants/About';
import { HomePage } from './componants/HomePage';
import { Navbar } from './componants/Navbar';
import { UserPost } from './Pages/UserPost';
import { Error } from './componants/Error'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/:id" element={<UserPost />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
