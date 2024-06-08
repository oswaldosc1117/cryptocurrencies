import axios from "axios"
import { cryptoPriceSchema, getCryptocurrenciesSchema } from "../schemas/cryptoSchema"
import { Pair } from "../types/types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
    const {data: {Data}} = await axios(url) // NG - 1.
    const result = getCryptocurrenciesSchema.safeParse(Data)
    if(result.success){
        return result.data
    }
}

export async function fetchCurrencyCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios(url)
    
    const result = cryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency])
    if(result.success){
        return result.data
    }
}

/** NOTAS GENERALES
 * 
 * 1.- Forma de acceder directamente, de forma desestructurada, a un objeto, dentro de otro objeto al realizar una consulta.
*/