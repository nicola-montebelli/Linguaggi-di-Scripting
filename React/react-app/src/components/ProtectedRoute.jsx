import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
export default function ProtectedRoute({redirectTo = "/login", element, children, ...rest}) {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const redirectElement = <Navigate to={redirectTo} replace state={{from: location}}/>

    return (user) ? element : redirectElement;
    //utilizzo di element
//     if(element){
//         // if(user){
//         //     return <Route {...rest} element={element} /> //se l'utente è loggato // Es. <Route path="/" element={ <HomePage /> } />
//         // } else{
//         //     return <Route {...rest} element={redirectElement} /> //se NON c'è // Es. <Route path="/" element={ <Navigate to="/login" /> } />
//         // }

//         /*alternativa
//         const wrappedElement = user ? element : redirectElement;
//         return <Route {...rest} element={wrappedElement} />*/
//     } else{
//         //utilizzo di children
//         // if(user){
//         //     return <Route {...rest} element={<Outlet />}>{children}</Route> // Es. <Route path="/" element={ <Outlet /> } ><HomePage/></Route>
//         // } else{
//         //     return <Route {...rest} element={redirectElement} />        // Es. <Route path="/" element={ <Navigate to="/login" /> } />
//         // }

//         /*alternativa
//         const wrappedOutlet = user ? <Outlet /> : redirectElement;
//         return <Route {...rest} element={wrappedOutlet} > {children} </Route>*/
// }
}