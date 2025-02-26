import { createSlice } from "@reduxjs/toolkit";

const connectionRequestSlice = createSlice({
  name: "Requests",
  initialState: [],
  reducers: {
    addConnectionRequest: (state, action) => action.payload,
  },
});

export const { addConnectionRequest } = connectionRequestSlice.actions;
export default connectionRequestSlice.reducer;
