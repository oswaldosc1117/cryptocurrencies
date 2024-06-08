import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCriptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

    const fetchCryptos = useCriptoStore(state => state.fetchCryptos)

    useEffect(() => {
        fetchCryptos()
    }, [])


    return (
        <>
            <div className="container">
                <h1 className="title">Cotizador de<span>Criptomonedas</span></h1>

                <div className="content">
                    <CriptoSearchForm/>
                    <CryptoPriceDisplay/>
                </div>
            </div>


        </>
    )
}

export default App
