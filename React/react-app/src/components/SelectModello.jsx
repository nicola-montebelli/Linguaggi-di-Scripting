import {Form} from 'react-bootstrap';

export default function SelectModello({onChange = () => {}}) {
  return <Form.Select aria-label="Selezione modello" onChange={onChange}>
      <option value="">Modelli auto</option>
      <option value="Panda">Panda</option>
      <option value="500">500</option>
      <option value="Fiesta">Fiesta</option>
      <option value="Focus">Focus</option>
      <option value="Yaris">Yaris</option>
      <option value="A1">A1</option>
      <option value="A2">A2</option>
      <option value="A3">A3</option>
      <option value="Golf">Golf</option>
      <option value="Benz">Benz</option>
      <option value="Classe A">Classe A</option>
    </Form.Select>
}