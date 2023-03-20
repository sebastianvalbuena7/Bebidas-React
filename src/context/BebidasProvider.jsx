import axios from "axios"
import { useState, useEffect, createContext } from "react"

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [modalCarrito, setModalCarrito] = useState(false)
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) ?? [])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito) ?? [])
    }, [carrito])

    useEffect(() => {
        const obtenerReceta = async () => {
            if (bebidaId === null) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
            const { data } = await axios.get(url)
            setReceta(data.drinks[0])
        }
        obtenerReceta()
    }, [bebidaId])

    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios.get(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaId = id => {
        setBebidaId(id)
    }

    const handleModalClickCarrito = () => {
        setModalCarrito(!modalCarrito)
    }

    const handleEliminarId = id => {
        const newCarrito = carrito.filter(producto => producto.id != id)
        setCarrito(newCarrito)
    }

    return (
        <BebidasContext.Provider value={{
            consultarBebida,
            bebidas,
            handleModalClick,
            modal,
            handleBebidaId,
            receta,
            setReceta,
            handleModalClickCarrito,
            carrito,
            setCarrito,
            modalCarrito,
            handleEliminarId
        }}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext