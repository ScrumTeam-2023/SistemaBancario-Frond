

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
