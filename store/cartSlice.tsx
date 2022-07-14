import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";

interface SelectedOption {
  component: string,
  option: string,
}

interface CounterState {
 choiceOfComponents: SelectedOption[]
}

const initialState: CounterState = {
  choiceOfComponents: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   setChoiceOfComponents: (state, action: PayloadAction<{component: string, option: string}>) => {
    const selectedOption: SelectedOption = action.payload;
    // check if the selected option/component is already in the choiceOfComponents array
    const existingOption: SelectedOption = state.choiceOfComponents.find(
      (option) => option.component === selectedOption.component
    )!;
    if (existingOption) {
      // if it is, update the choice 
      existingOption.option = selectedOption.option;
   } else {
      // if it is not, add the option to the choiceOfComponents array
      state.choiceOfComponents.push(selectedOption);
    }
   }
  },
});

export const cartActions = cartSlice.actions;

export const selectedChoiceOfComponents = (state: RootState) =>
  state.cart.choiceOfComponents;

export default cartSlice.reducer;