import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import InsertPage from './pages/InsertPage';
import ChatPage from './pages/ChatPage';



export default function App()
{
    return ( 
    <Router>
        <Routes>
            <Route path="/"  element={
                <ProtectedRoute redirectTo="/login" element={<HomePage />} />
            }/>
            {/* l'obiettivo è creare una pagina nella inseriamo un automobile tramite form*/}
            <Route path="/automobili/new" element={ 
                    <ProtectedRoute redirectTo="/login" element={<InsertPage/>} />
                } />
            <Route path="/chat" element={ 
                    <ProtectedRoute redirectTo="/login" element={<ChatPage/>} />
                } />
            <Route path='/login' element={<LoginPage />}/>
            <Route path='*' element={<h1>Errore 404</h1>} />
        </Routes>
    </Router>
    );
}