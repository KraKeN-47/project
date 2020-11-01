import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserType } from "../../types/types";

const initialState: IUserType = {
  type: "guest",
  level: 0,
};

const userType = createSlice({
  name: "userType",
  initialState,
  reducers: {
    setUserType: (state, { payload }: PayloadAction<IUserType>) => ({
      ...state,
      level: payload.level,
      type: payload.type,
    }),
  },
});

export const { setUserType } = userType.actions;

export default userType.reducer;
