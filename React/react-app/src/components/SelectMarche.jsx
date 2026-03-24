import {Form} from 'react-bootstrap';

export default function SelectMarcheAuto({onChange = () => {}}) {
  return <Form.Select aria-label="Selezione marca" onChange={onChange}>
      <option value="">Marche auto</option>
      <option value="Fiat">Fiat</option>
      <option value="Ford">Ford</option>
      <option value="Toyota">Toyota</option>
      <option value="Audi">Audi</option>
      <option value="Wolkswagen">Wolkswagen</option>
      <option value="Mercedes">Mercedes</option>
    </Form.Select>
}