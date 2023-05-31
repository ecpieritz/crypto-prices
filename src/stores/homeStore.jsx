import { create } from 'zustand'
import axios from 'axios'

const homeStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (e)=>{
    set({query: e.target.value})
  },

  searchCoins: ()=>{
    const {query} = homeStore.getState()
    console.log(query)
  },

  fetchCoins: async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

    const coins = res.data.coins.map(coin => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc

      }
    })

    set({coins})
  }
}))

export default homeStore