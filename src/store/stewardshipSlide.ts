import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, useAppSelector, useAppDispatch } from './store';

interface valueState {
  value: boolean;
}

// Define the initial state using that type
const initialState: valueState = {
  value: false,
};

export const stewardshipSlide = createSlice({
  name: 'stewardship',
  initialState,
  reducers: {
    setFalse: (state) => {
      state.value = false;
    },
    setTrue: (state) => {
      state.value = true;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value = state.value + action.payload;
    // },
  },
});

export const { setFalse, setTrue } = stewardshipSlide.actions;
// export function stewardshipHook() {
//   const setter = useAppSelector((state: RootState) => state.stewardship.value);
//   const dispatch = useAppDispatch();

//   return {
//     setter,
//     dispatch,
//   };
// }
export default stewardshipSlide.reducer;
