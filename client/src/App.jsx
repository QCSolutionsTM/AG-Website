import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/front-end/Home/Home.jsx'
import ForgotPassword from './views/Auth/ForgotPassword/ForgotPassword.jsx'
import ResetPassword from './views/Auth/ResetPassword/ResetPassword.jsx'
import MainNavigation from './components/front-end/Navigation/MainNavigation.jsx';
import Footer from './components/front-end/footer/footer.jsx';
import AdminDashboard from './views/front-end/AdminRender/Dashboard/AdminDashboard.jsx';
import PrivateRoute from './components/security/PrivateRoute.jsx';
import Estimate from './views/front-end/estimate/estimate.jsx';
import Finacing from './views/front-end/finacing/finacing.jsx';
import Contact from './views/front-end/contact/contact.jsx';
import Services from './views/front-end/services/services.jsx'
import Servicearea from './views/front-end/service-area/service-area.jsx'
import About from './views/front-end/about/about.jsx'
import Work from './views/front-end/ourwork/ourwork.jsx'
function App() {



  return (
    <>
    <BrowserRouter>
    <MainNavigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/views/front-end/estimate" element={<Estimate />} />
      <Route path="/views/front-end/our-work" element={<Work />} />
      <Route path="/views/front-end/contact-us" element={<Contact />} />
      <Route path="/views/front-end/services" element={<Services />} />
      <Route path='/views/front-end/service-area' element={<Servicearea />} />
      <Route path="/views/front-end/finacing" element={<Finacing />} />
      <Route path="/views/front-end/about" element={<About />} />
  
      <Route path="/views/auth/forgotpassword" element={<ForgotPassword />} />
      <Route path="/views/auth/resetpassword" element={<ResetPassword />} />
      <Route element={<PrivateRoute />}>
      <Route path="/views/front-end/AdminRender/dashboard" element={<AdminDashboard />} />
      </Route>
      </Routes>
      </BrowserRouter>
      <Footer />
      </>
  
  );
}

export default App
