import useBebidas from "../hooks/useBebidas"
import { Button } from "react-bootstrap"
const Producto = ({producto}) => {
    const { handleEliminarId } = useBebidas()
    const {image, id, name} = producto
    return (
        <div className="d-flex justify-content-around m-3 border-bottom">
            <img src={image} alt={name} className='w-25 mb-3'/>
            <p>{name}</p>
            <Button variant="danger" onClick={() => handleEliminarId(id)}>X</Button>
        </div>
    )
}

export default Producto