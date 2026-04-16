import { useState, useEffect } from 'react'; 
import { Row, Col } from 'react-bootstrap'
import CardAuto from "./CardAuto";
import Loading from "./Loading"
import { get as getAutomobili } from "../services/automobili"
import SelectMarcheAuto from '../components/SelectMarche';
import SelectColore from './SelectColore';
import SelectAnno from './SelectAnno';
import SelectModello from './SelectModello';

export default function GridAutomobili(){
    const [Loaded, setLoaded] = useState(false);
    const [listaAuto, setListaAuto] = useState([]);
    //const [filtroMarca, setFiltroMarca] = useState('');
    const [filtriAuto, setFiltriAuto] = useState({
        marca: '',
        colore: '',
        anno: '',  
        modello: '',
    });
    {/*... = ciò che non è esplicito nella funzione lo va  prendere nell'oggetto */}

    const handleFiltriAutoChange = (key,value) => {
        setFiltriAuto((prevFiltriAuto) => {return {
            ...prevFiltriAuto, 
            [key]: value
        }});
    }
{/*Caricamento Asincrono delle automobili */}
    useEffect(() => {
        const fetchAuto = async function() { {/*async function() .... await getAutomobili è un modo moderno per fare Promise*/}
        let tempAuto = await getAutomobili(filtriAuto); {/* getAutomobili() prende i valori da automobili.js*/}
        setListaAuto(tempAuto);
        setLoaded(true);
    }
    fetchAuto();
    }, [filtriAuto]);  {/* useEffect si triggera quando cambia il parametro inserito nelle [], se le [] sono vuoto useEffect viene lanciato una volta sola */}
    {/*ogni volta che filtroMarca cambia, chiama il server*/}

    return  <>
    <Row className='mb-3'>
            <Col>
                <SelectMarcheAuto onChange={(e) => {
                    handleFiltriAutoChange('marca', e.target.value)  
                }} />
            </Col>
            <Col>
                <SelectColore onChange={(e) => {
                    handleFiltriAutoChange('colore', e.target.value) 
                }} />
            </Col>
            <Col>
                <SelectAnno onChange={(e) => {
                    handleFiltriAutoChange('anno', e.target.value)
                }}/>
            </Col>
            <Col>
                <SelectModello onChange={(e) => {
                    handleFiltriAutoChange('modello', e.target.value)
                }}/>
            </Col>
        </Row> 

        <Row xs='1' md='2' xl='4' className='g-3'>
                {
                    (Loaded) ?
                    listaAuto.map((automobile) => {
                        return <Col>
                            <CardAuto auto={automobile} />
                        </Col>
                    }) 
                    : <Loading />
                }
        </Row>
    </>;
}