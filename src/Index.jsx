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
import { Profile } from './Pages/Profile';
import { ProfileUpdate } from './Pages/ProfileUpdate';
import { TransferPage } from './Pages/Transfer/TransferPage';
import { DepositPage} from './Pages/Deposit/DepositPage'
import {AddServicesPage} from './Pages/AddServices/AddServicesPage'
import { ProductPage } from './Pages/ProductPage';
import { ProductUpdate } from './Pages/ProductUpdate';
import { CompraPage } from './Pages/CompraPage';
import { CompraTable } from './Components/CompraTable/CompraTAble';
import { FavoritesPage} from './Pages/FavoritePage/FavoritePage'
import { GraficasPage } from './Pages/Graficas/GraficasPage';
// Aca van las Paginas

export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({

        name: '',
        surname: '',
        username: '',
        phone: '',
        email: '',
        role:'',
        
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
                            },
                            {
                                path: 'profile',
                                element: <Profile/>
                            },
                            {
                                path: 'profile/update/:id',
                                element: <ProfileUpdate/>
                            },
                            {
                                path: 'deposit',
                                element: <DepositPage/>
                            },
                            {
                                path: 'transfer',
                                element: <TransferPage/>
                            },
                            {
                                path:'services',
                                element: <AddServicesPage/>
                            },
                            {
                                path: 'product',
                                element: <ProductPage/>
                            },
                            {
                                path: 'product/update/:id',
                                element: <ProductUpdate/>
                            },
                            {
                                path: 'product/addComp/:id',
                                element: <CompraPage/>
                            },
                            {
                                path: 'compra',
                                element: <CompraTable/>
                            },
                            {
                                path: 'favorite',
                                element: <FavoritesPage/>
                            },
                            {
                                path: 'graficas',
                                element: <GraficasPage/>
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
