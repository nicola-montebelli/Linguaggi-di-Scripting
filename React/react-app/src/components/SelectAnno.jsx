import {Form} from 'react-bootstrap';

export default function SelectAnno({onChange = () => {}}) {
  return <Form.Select aria-label="Selezione anno" onChange={onChange}>
      <option value="">Tutti gli anni</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
    </Form.Select>
}