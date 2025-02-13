import './App.css';
import { Routes , Route}  from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import {Toaster} from'react-hot-toast';
import PublicRoute from './components/Route/PublicRoute';
import ProtectedRoute from './components/Route/ProtectedRoute';
import Donar from './pages/Dashbored/Donar';
import Hospitals from './pages/Dashbored/Hospitals';
import Organisation from './pages/Dashbored/Organisation';
import Consumer from './pages/Dashbored/Consumer';
import Donation from './pages/Dashbored/Donation';
import Analytics from './pages/Dashbored/Analytics';
import DonarList from './pages/Admin/DonarList';
import HospitalList from './pages/Admin/HospitalList';
import OrganisationList from './pages/Admin/OrganisationList';
import AdminPannel from './pages/Admin/AdminPannel';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/donar' element={<ProtectedRoute><Donar/></ProtectedRoute>}/>
        <Route path='/hospital' element={<ProtectedRoute><Hospitals/></ProtectedRoute>}/>
        <Route path='/consumer' element={<ProtectedRoute><Consumer/></ProtectedRoute>}/>
        <Route path='/donation' element={<ProtectedRoute><Donation/></ProtectedRoute>}/>
        <Route path='/analytics' element={<ProtectedRoute><Analytics/></ProtectedRoute>}/>
        <Route path='/organisation' element={<ProtectedRoute><Organisation/></ProtectedRoute>}/>
        <Route path='/donar-list' element={<ProtectedRoute><DonarList/></ProtectedRoute>}/>
        <Route path='/hospital-list' element={<ProtectedRoute><HospitalList/></ProtectedRoute>}/>
        <Route path='/organisation-list' element={<ProtectedRoute><OrganisationList/></ProtectedRoute>}/>
        <Route path='/admin-pannel' element={<ProtectedRoute><AdminPannel/></ProtectedRoute>}/> 
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>} />
        <Route path='/front-page' element={<PublicRoute><FrontPage/></PublicRoute>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
