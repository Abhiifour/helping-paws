import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Adoption from "./pages/adopt/Adoption";
import Articles from "./pages/Articles/Articles";
import Layout from "./components/layout/Layout";
import Disease from "./pages/Disease/Disease";
import Rescue from "./pages/rescue/Rescue";
import Donate from "./pages/Donate/Donate";
import Consult from "./pages/Consult/Consult";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import About from "./pages/aboutus/About";
import AddDog from "./pages/add/AddDog";
import AddBlog from "./pages/AddBlog/AddBlog";
import Pets from "./pages/Pets/Pets";
import { Toaster } from "react-hot-toast";
import ChatBot from "./components/Chatbot/ChatBot";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Add" element={<AddDog />} />
          <Route path="/Pet" element={<Pets />} />
          <Route path="/Createblog" element={<AddBlog />} />
          <Route path="/Adopt" element={<Adoption />} />
          <Route path="/Blogs" element={<Articles />} />
          <Route path="/Disease" element={<Disease />} />
          <Route path="/Rescue" element={<Rescue />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/about" element={<About />} />
          <Route path="/Chat" element={<ChatBot />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
