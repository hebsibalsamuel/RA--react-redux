import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: {},
    openDialog:false,
    isPremium:true
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload ;
      state.selectedProduct= action.payload[0];
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.isPremium = true;     
    },
    openDialog: (state, action) => {
      state.selectedProduct = action.payload;
      state.openDialog = true;   
    },
    selectRange: (state, action) => {
      state.isPremium = !state.isPremium ;     
    },
    closeDialog: (state, action) => {
      state.selectedProduct = action.payload;
      state.openDialog = false;   
    },
  },
});

export const { addProduct,selectProduct,openDialog,closeDialog,selectRange } = productSlice.actions;
export default productSlice.reducer;