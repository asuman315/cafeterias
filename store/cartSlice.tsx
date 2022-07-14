import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";

interface SelectedChoice {
  name: string,
  id: number,
}

interface CounterState {
 choiceOfComponents: SelectedChoice[]
}

const initialState: CounterState = {
  choiceOfComponents: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   setChoiceOfComponents: (state, action: PayloadAction<{id: number, name: string}>) => {
    const selectedChoice: SelectedChoice = action.payload;
    // check if the selectedChoice is already in the choiceOfComponents array
    const existingChoice: SelectedChoice = state.choiceOfComponents.find(
      (choice) => choice.id === selectedChoice.id
    )!;
    if (existingChoice) {
      // if it is, update the choice 
      existingChoice.name = selectedChoice.name;
   } else {
      // if it is not, add the choice to the choiceOfComponents array
      state.choiceOfComponents.push(selectedChoice);
    }
   }
  },
});

export const cartActions = cartSlice.actions;

export const selectedChoiceOfComponents = (state: RootState) =>
  state.cart.choiceOfComponents;

export default cartSlice.reducer;