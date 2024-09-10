import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import Navbar from './components/Navbar'
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import NewPost from "./pages/NewPost";
import Landing from "./pages/Landing";

// <Navbar />
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<Registration />}></Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="/NewPost" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
