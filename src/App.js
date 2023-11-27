import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Screen/Main";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/DashBoard" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
