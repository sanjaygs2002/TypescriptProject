import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthProvider";
import PolicyList from "./pages/PolicyList";
import MyPolicies from "./pages/MyPolicies";
import Login from "./pages/Login";

const App = () => {
  return (
    
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PolicyList />} />
          <Route path="/mypolicies" element={<MyPolicies />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
