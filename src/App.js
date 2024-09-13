import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Example from "./Components/Dashbord";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Headers from "./Components/Headers";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/d" element={<Example />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
