import IncrementButton from '../components/IncrementButton';
import GridAutomobili from '../components/GridAutomobili';
import {Container} from 'react-bootstrap'

export default function HomePage() {
    return <>
        <h1>Hello World!</h1>
        <Container>
            <GridAutomobili />
        </Container>
        <IncrementButton />
    </>
}