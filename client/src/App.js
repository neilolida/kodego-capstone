import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';

function App() {
  
  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return(
      <di>
        <Navbar />

        <div style={{display:'flex'}}>
          <LeftBar />

          <div style={{flex: 7}}>
            <Outlet />
          </div>
          
          <RightBar />
        </div>
      </di>
    )
  }
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element : (
      <ProtectedRoute>
        <Layout/>           {/* Protect routes*/}
      </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element : <Login />,
    },
    {
      path: "/register",
      element : <Register />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
