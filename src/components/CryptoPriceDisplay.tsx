import { useMemo } from "react"
import { useCriptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCriptoStore(state => (state.result))
    console.log(result)
    const loading = useCriptoStore(state => (state.loading))
    
    const hastResult = useMemo(() => !Object.values(result).includes(''), [result])

  return (
    <div className="result-wrapper">
        {loading ? <Spinner/> : hastResult && (
            <>
                <h2>Cotización</h2>
                <div className="result">
                    <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Criptomoneda"/>
                    <div>
                        <p>El precio es: <span>{result.PRICE}</span></p>
                        <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                        <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                        <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>última actualización: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}
