import {Form} from 'react-bootstrap';

export default function SelectColore({onChange = () => {}}) {
  return <Form.Select aria-label="Selezione colore" onChange={onChange}>
      <option value="">Tutti i colori</option>
      <option value="Bianco">Bianco</option>
      <option value="Rosso">Rosso</option>
      <option value="Blu">Blu</option>
      <option value="Verde">Verde</option>
      <option value="Nero">Nero</option>
      <option value="Grigio">Grigio</option>
      <option value="Azzurro">Azzurro</option>
    </Form.Select>
}