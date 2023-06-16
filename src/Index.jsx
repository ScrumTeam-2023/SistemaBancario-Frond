import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, createContext, useEffect} from "react";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from "./Pages/NotFound";
import { LoginPage } from './Pages/LoginPage';
import { Nav } from './Nav';
import { UserPage } from './Pages/UserPage';
import { DashboardPage } from './Pages/DashboardP/DashboardPage';
import { UserUpdate } from './Pages/UserUpdate';


// Aca van las Paginas

export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
    })

        useEffect(()=> {
            let token = localStorage.getItem('token')
            if(token) setLoggedIn(true)
            //mantener sesion
            let user = JSON.parse(localStorage.getItem('lario'))
                if(user){
                    setDataUser(user)
                }
        }, [])

        const routes = createBrowserRouter([
            {
                path: '/',
                element: <App/>,
                errorElement: <NotFound/>,

                children:[
                    {
                        path:'/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path:'/panel',
                        element: loggedIn ? <DashboardPage/> : <LoginPage/>,
                        children: [
                            {
                                path: 'user',
                                element: <UserPage/>
                            },
                            {
                                path: `user/update/:id`,
                                element: <UserUpdate/>
                            }
                           ]
                    }
                ]


        }])

  return (
    <AuthContext.Provider value={{loggedIn,setLoggedIn,dataUser,setDataUser}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
