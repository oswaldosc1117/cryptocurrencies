import { z } from 'zod'

export const currencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const getCryptocurrencySchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const getCryptocurrenciesSchema = z.array(getCryptocurrencySchema)

export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string()
})

export const cryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})