import Producto from "./Producto"
import { Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalCarrito = () => {
    const { modalCarrito, handleModalClickCarrito, carrito } = useBebidas()

    return (
        <Modal show={modalCarrito} onHide={() => handleModalClickCarrito()}>
            <Modal.Header>
                <Modal.Title>Tu carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {carrito.length > 0 ? carrito.map(producto => <Producto key={producto.id} producto={producto}/>) : <p>No hay productos en el carrito</p> }
            </Modal.Body>
        </Modal>
    )
}

export default ModalCarrito