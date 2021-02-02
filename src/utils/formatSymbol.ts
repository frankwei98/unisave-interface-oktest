import { Currency, ETHER, ChainId } from '@frankwei98/unisave-sdk-oktest'

export const formatSymbol = (currency?: Currency | null, chainId: ChainId = ChainId.MAINNET) => {
  if (!currency) return ''
  if (currency === ETHER) return currency.toDisplayableSymbol(chainId)
  return currency.symbol
}

export default formatSymbol
