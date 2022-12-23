import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    randomCoin: [],
  };


  export const fetchRandomCoin = createAsyncThunk(
    "randomcoin/fetchRandomCoin",
    async () => {
      try {
        const res = await axios.get("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=12");
        // console.log(res, 'response axios')
        const data = await res.data;
        return {data: data};
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const randomCoinSlice = createSlice({
    name: "randomcoin",
    initialState: EmptyState,
    reducers: {
      addRandomCoin: (state, action) => {
        state.randomCoin.push(action.payload)
        
      },
      filterRandomCoin: (state, action) => {
        state.randomCoin = state.randomCoin.filter(
          (c) => c.id !== action.payload
        );
        
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchRandomCoin.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchRandomCoin.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchRandomCoin.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.randomCoin = data.data;
  
          if (data.errors === "There is not data") {
            state.randomCoin = [];
          }
          
        });
    },
  });

  export const { addRandomCoin, filterRandomCoin } = randomCoinSlice.actions;

// export const selectById = (state, id) => state.properties.properties.find((i) => i.id.toString() === id)
// export const selectAllProperties = (state) => state.properties.properties
// export const selectMeta = (state) => state.properties.meta
// export const selectMeta2 = (state) => state.properties.meta2
// export const selectMeta3 = (state) => state.properties.meta3

export default randomCoinSlice.reducer;


