import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import DivSlider from "./components/DivSlider";
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Product';
import Layout from "./components/shared/Layout";
import Orders from "./components/Orders";
import Customer from "./components/Customer";
import ContactUs from "./ContactUs";
import NewsSection from "./components/News";
import DeepFake from "./components/DeepFake";
import Xray from "./components/Xray";

function App() {
  const location = useLocation();
  const chillerRef = useRef(null);
  const faultRef = useRef(null);

  const scrollToChiller = () => {
    if (chillerRef.current) {
      chillerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFault = () => {
    if (faultRef.current) {
      faultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard scrollToChiller={scrollToChiller} scrollToFault={scrollToFault} />} />
          <Route path="/faq" element={<Products />} />
          <Route path="/team" element={<Orders />} />
          <Route path="/overview" element={<Customer />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/fault" element={<DeepFake />} />
          <Route path="/optimize" element={<Xray />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>

      {location.pathname === "/" && <DivSlider ref={{ chillerRef, faultRef }} />}

      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
