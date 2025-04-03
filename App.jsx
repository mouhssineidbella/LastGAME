import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll'; // Import it here
import Navbar from './components/Navbar';
import Login from './Pages/login';
import Signup from './Pages/signUp';
import Slider from './components/Slider';
import Bits from './components/Bits';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Footer from './components/Footer';
import PalworldPage from './Pages/palworld';
import Bits2 from './Pages/Bits2';
import Ark from './Pages/Ark';
import FC25 from './Pages/FC25';
import Play from './Pages/Play';
import Payment from './Pages/Payment';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* This will scroll to top on every route change */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Hero />
                  <Bits />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/palworld" element={<PalworldPage />} />
            <Route path="/Ark" element={<Ark />} />
            <Route path="/Fc25" element={<FC25 />} />
            <Route path="/Play" element={<Play />} />
            <Route path="/Bits2" element={<Bits2 />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
