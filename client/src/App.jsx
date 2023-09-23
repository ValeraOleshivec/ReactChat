import "./main.css";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./components/LoginPage/loginPage";
import ChatPage from "./components/ChatPage/ChatPage";
import {useEffect} from "react";


function App() {
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname !== '/'){
            navigate('/')
        }
    }, []);
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
  );
}

export default App;
