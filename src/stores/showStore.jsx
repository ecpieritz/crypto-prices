import { create } from 'zustand'
import axios from 'axios'

const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)

    const graphData = res.data.prices.map(price => {
      const [timestamp, pc] = price;

      return {
        Date: timestamp,
        Price: pc,
      };
    })

    set({graphData})
  }
}))

export default showStore