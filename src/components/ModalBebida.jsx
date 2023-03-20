import { Modal, Image, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {
    const { handleModalClick, modal, receta, setReceta, setCarrito, carrito } = useBebidas()
    const { strDrinkThumb, strDrink, strInstructions, idDrink } = receta

    const mostrarIngredientes = () => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    const handleAddCarrito = () => {
        const productoExistente = carrito.find(producto => producto.id === idDrink)
        if(productoExistente) {
            return
        }

        setCarrito([...carrito, {
                id: idDrink,
                image: strDrinkThumb,
                name: strDrink
        }])
    }

    return (
        <Modal show={modal} onHide={() => {
            handleModalClick()
            setReceta({})
        }}>
            <Image src={strDrinkThumb} alt={strDrink} />
            <Modal.Header>
                <Modal.Title>{strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones</h2>
                    {strInstructions}
                    <h2>Ingredientes y Cantidades</h2>
                    {mostrarIngredientes()}
                    <Button variant="danger" className="mt-4" onClick={handleAddCarrito}>Añadir al carrito</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalBebida