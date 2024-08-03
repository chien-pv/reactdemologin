import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,

  dataUser: [
    {
      id: 1,
      name: "Nguyen Van A",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser(state, action) {
      state.dataUser = state.dataUser.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const { deleteUser } = userSlice.actions;
