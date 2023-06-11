import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, createContext, useEffect} from "react";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from "./Pages/NotFound";
import { LoginPage } from './Pages/LoginPage';

// Aca van las Paginas

export const AuthContext = createContext();

export const Index = () => {
        const [loggedIn, setloggedIn] = useState(false)
        const [dataUser, setDataUser] = useState({
            name: '',
            username: '',
            role:''
        })

        useEffect(()=> {
            let token = localStorage.getItem('token')
            if(token) setloggedIn(true)
        },[])

        const routes = createBrowserRouter([
            {
                path: '/',
                element: <App/>,
                errorElement: <NotFound/>,

                children:[
                    {
                        path:'/login',
                        element: <LoginPage></LoginPage>
                    }
                ]


        }])

  return (
    <AuthContext.Provider value={{loggedIn,setloggedIn,dataUser,setDataUser}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
