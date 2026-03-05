import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loading from './components/Loading';
import Titolo from './components/Titolo';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App()
{
    return ( 
    <Router>
        <Routes>
            <Route  path='/' element={
                <>
                    <Titolo level="h1">Hello World!</Titolo>
                    <Loading label="Caricamento"/>
                </>
                }/>
                
            <Route  path='*' element={<h1>Errore 404</h1>}/>
        </Routes>
    </Router>
    );
}