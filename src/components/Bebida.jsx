import { Card, Col, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const Bebida = ({ bebida }) => {
    const { handleModalClick, handleBebidaId } = useBebidas()
    const {strDrinkThumb, strDrink, idDrink} = bebida
    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img variant="top" src={strDrinkThumb} akt={strDrink} />
                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>

                    <Button variant="warning" className="w-100 text-uppercase mt-2" onClick={ () => {
                        handleModalClick()
                        handleBebidaId(idDrink)
                    } }>Ver Receta</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida