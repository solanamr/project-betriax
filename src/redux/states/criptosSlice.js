import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    coins: [],
    coinsCopy: []
  };


  export const fetchCoins = createAsyncThunk(
    "coins/fetchCoins",
    async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h");
        // console.log(res.data, 'response axios')
        const data = await res.data;
        return {data: data};
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const coinsSlice = createSlice({
    name: "coins",
    initialState: EmptyState,
    reducers: {
      // addCoins: (state, action) => {
      //   state.coins.push(action.payload)
        
      // },
      // filterCoins: (state, action) => {
      //   state.coins = state.coins.filter(
      //     (c) => c.id !== action.payload
      //   );
      // },
      searchCoin: (state, action) =>{
        state.coins = action.payload === "" ? state.coinsCopy : state.coinsCopy.filter((e) => 
        e.name.toLowerCase().includes(action.payload));
      },
      resetCoins: (state) =>{
        state.coinsCopy = []
      }

    },
    extraReducers(builder) {
      builder
        .addCase(fetchCoins.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchCoins.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchCoins.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.coins = data.data;
          state.coinsCopy = data.data;
  
          if (data.errors === "There is not data") {
            state.coins = [];
            state.coinsCopy = [];
          }
          
        });
    },
  });

  export const { searchCoin, resetCoins } = coinsSlice.actions;

// export const selectById = (state, id) => state.properties.properties.find((i) => i.id.toString() === id)
// export const selectAllProperties = (state) => state.properties.properties
// export const selectMeta = (state) => state.properties.meta
// export const selectMeta2 = (state) => state.properties.meta2
// export const selectMeta3 = (state) => state.properties.meta3

export default coinsSlice.reducer;


