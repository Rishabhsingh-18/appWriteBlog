


import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import appwriteService from "./appwrite/auth"; // ✅ FIXED
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./component";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getCurrentUser()
      .then((user) => {
        console.log("USER:", user); // 👈 ADD THIS

        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
