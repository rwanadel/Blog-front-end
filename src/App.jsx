import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import NewPost from "./pages/NewPost";
import Landing from "./pages/Landing";
import EditPost from "./pages/EditPost";
import Error from "./pages/Error";

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
          <Route path="/edit/:id" element={<EditPost />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
