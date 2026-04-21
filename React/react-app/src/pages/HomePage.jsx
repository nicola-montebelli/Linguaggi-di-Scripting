import IncrementButton from '../components/IncrementButton';
import GridAutomobili from '../components/GridAutomobili';
import {Button, Container} from 'react-bootstrap'
import LoginForm from '../components/LoginForm';

export default function HomePage() {
    return <>
        <h1>Hello World!</h1>
        <Container>
            <GridAutomobili />
        </Container>
        <IncrementButton />
    </>
}