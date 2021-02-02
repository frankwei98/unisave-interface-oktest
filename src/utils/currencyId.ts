import { Currency, ETHER, Token } from '@frankwei98/unisave-sdk-oktest'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CURRENCY'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
