import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { getCryptos, fetchCurrencyCryptoPrice } from "./services/cryptoServices"
import { Cryptocurrency, Pair, Price } from "./types/types"

type CryptoStore = {
    cryptoState: Cryptocurrency[],
    result: Price
    loading: boolean
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}



export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoState: [],

    // result: {} as Price // NG - 2.
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },

    loading: false,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptoState: cryptocurrencies
        }))
    },

    fetchData: async (pair) => {

        set(() => ({
            loading: true
        }))

        const result = await fetchCurrencyCryptoPrice(pair)
        
        set(() => ({
            result,
            loading: false
        }))
    }
})))

/** NOTAS GENERALES
 * 
 * 1.- Esta sintaxis es lo mismo que darle un valor inicial, pasando cada key dentro del objeto, es decir: 
 * 
 *  result: {
 *      IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
 *  }
    Ambas formas son validas y significan lo mismo.
*/