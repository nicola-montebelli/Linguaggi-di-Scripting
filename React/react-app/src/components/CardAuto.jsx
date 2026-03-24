import { useState } from 'react'
import { Button, Card, Stack} from 'react-bootstrap'
import { FaRegHeart, FaHeart } from "react-icons/fa6"


export default function CardAuto( {auto = {}} ) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  console.log("Render CardAuto");

  return <>
    <Card id ={"card-" + auto.id}>
      <Card.Img 
          variant="top" 
          src={auto.immagine ?? "https://placehold.co/600x400"} 
          style={{aspectRatio: "16/9", objectFit: "cover"}}/>
        <Card.Body>
          <Card.Title>
            <Stack direction = "horizontal">
              <span className="me-auto"> { /* non spazia tra lo span e il button*/}
                {auto.marca}  {auto.modello}  {auto.colore}  {auto.targa}
              </span>
                <Button onClick={() => { setIsInWishlist(!isInWishlist)}}>
                  { (isInWishlist) ? <FaHeart /> : <FaRegHeart />}
                </Button>
            </Stack>
          </Card.Title>
        </Card.Body>
      <Card.Footer>{auto.anno}</Card.Footer>
    </Card>
  </>;
}