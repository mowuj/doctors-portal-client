
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Signup from './Pages/Login/Signup/Signup';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Pages/Shared/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory/MyHistory';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
          <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
