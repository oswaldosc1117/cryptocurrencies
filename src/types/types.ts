import { z } from 'zod'
import { cryptoPriceSchema, currencySchema, getCryptocurrencySchema, PairSchema } from '../schemas/cryptoSchema'

export type Currency = z.infer<typeof currencySchema>
export type Cryptocurrency = z.infer<typeof getCryptocurrencySchema>
export type Pair = z.infer<typeof PairSchema>
export type Price = z.infer<typeof cryptoPriceSchema>