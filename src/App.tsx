import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // use "react-router-dom"
import Landing from './pages/Landing';
import ClientDashBoards from './pages/ClientDashBoards';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,

      
        
      
    },
    {
      path: "login",
       element: <Login/>,
    },{path: "signup",
       element: <Register/>,},
  {
    
          path: "dashboard",
          element: <ClientDashBoards />,
        },
  
  
  ]);

  return <RouterProvider router={router} />;
}

export default App;
