import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import { useUserStore } from "./stores/useUserStore";

import Navbar from "./components/Navbar";
import Contactpage from ./pages/ContactPage
import LoadingSpinner from "./components/LoadingSpinner";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/Homepage";

function App() {
  const { user, checkingAuth, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto mt-28 mb-8 flex-grow overflow-hidden md:mt-30 md:mb-16">
        <Routes>
          <Route
            path="/signup"
            element={!user ? <SignupPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ContactPage/>} />

          {/* Redirect all other paths to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
