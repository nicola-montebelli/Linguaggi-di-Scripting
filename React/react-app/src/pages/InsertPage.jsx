import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { post as postAuto } from "../services/automobili"
import Loading from "../components/Loading";

export default function InsertPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [ isSuccess, setIsSuccess] = useState(null);

    const handleSubmit = async function(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        setIsLoading(true)
        setIsError(false)
        setIsSuccess(false)
        const resp = await postAuto(formDataObj);
        if(resp){
            setIsSuccess(true)
        } else{
            setIsError(true)
        }
        setIsLoading(false)
    }

    return <Container>
        <h2>Aggiungi Automobile</h2>
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control name="marca" type="text" placeholder="es. Fiat" required />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center gap-2">
                <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isLoading}
                >
                    Aggiungi
                </Button>
                {
                    (isLoading) && <Loading />
                }
            </Form.Group>
        </Form>
    </Container>
}