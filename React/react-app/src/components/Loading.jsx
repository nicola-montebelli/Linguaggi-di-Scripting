import {Spinner} from 'react-bootstrap'
/**
 * 
 * @param {string} label Etichetta del Loading
 * @param {string} variant Bootstap variant default = 'danger'
 * @example <loading label="Caricamento" variant = "info" />
 *
 */
export default function Loading({label = '', variant = 'danger'})   
{
    return (
        <div className='d-flex gap-2'>
            {/*Commento in JSX tra parentesi graffe e il componente vuoto esterno <> </> se è prima degli altri*/}
            <Spinner animation="border" variant={variant}/>
            <span>{label}</span>
        </div>    
    );
}