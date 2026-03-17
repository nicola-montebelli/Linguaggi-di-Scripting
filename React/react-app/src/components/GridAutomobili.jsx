import { useState, useEffect } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap'
import CardAuto from "./CardAuto";
import Loading from "./Loading"
import { get as getAutomobili } from "../services/automobili"

export default function GridAutomobili(){
    const [listaAuto, setListaAuto] = useState([]);
    const [Loaded, setLoaded] = useState(false);

{/*Caricamento Asincrono delle automobili */}
    console.log("prima dell'effetto: ", listaAuto);
    useEffect(() => {
        const fetchAuto = async function() {
        let tempAuto = await getAutomobili(); {/* getAutomobili() prende i valori da automobili.js*/}
        setListaAuto(tempAuto);
        setLoaded(true);
        console.log("Fetch ritorna i risultati");
    }
    fetchAuto();
    console.log("Chiamo fetchAuto");
    }, []);  {/* useEffect si triggera quando cambia il parametro inserito nelle [], se le [] sono vuoto useEffect viene lanciato una volta sola */}
        
    console.log("dopo l'effetto: ", listaAuto);

    return <Container>
            <Row xs='1' md='2' xl='4'>
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
        </Container>;
}