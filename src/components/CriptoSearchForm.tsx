import { useState, ChangeEvent, FormEvent } from "react";
import { useCriptoStore } from "../store";
import { currencies } from "../data/data";
import { Pair } from "../types/types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {

    const cryptoState = useCriptoStore((state) => state.cryptoState)
    const fetchData = useCriptoStore((state) => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')){
            setError('Todos los campos son Obligatorios')
            return
        }

        setError('')

        // Consultar a la API
        fetchData(pair)

    }

  return (
    <form className="form" onSubmit={handleSubmit}>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
                <option value="" disabled>-- Seleccione --</option>

                {currencies.map(e => (
                    <option key={e.code} value={e.code}>{e.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="cryptocurrency">Criptomoneda:</label>
            <select name="cryptocurrency" id="cryptocurrency" value={pair.cryptocurrency} onChange={handleChange}>
                <option value="" disabled>-- Seleccione --</option>
                {cryptoState.map(crypto => (
                    <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>

        <input type="submit" value="Cotizar"/>
    </form>
  )
}
