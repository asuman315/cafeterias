import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SelectedOption {
  component: string;
  option: string;
}

interface AdditionalItems {
  name: string;
  price: number;
}

interface CounterState {
  choiceOfComponents: SelectedOption[];
  accompaniment: string;
  additionalItems: AdditionalItems[];
  subTotal: number;
  cartItems: any[];
  totalQuantity: number;
}

const initialState: CounterState = {
  choiceOfComponents: [],
  accompaniment: '',
  additionalItems: [],
  subTotal: 0,
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setChoiceOfComponents: (
      state,
      action: PayloadAction<SelectedOption>
    ) => {
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
    },
    emptyChoiceOfComponents: (state) => {
      state.choiceOfComponents = [];
    },
    emptyAdditionalItems: (state) => {
      state.additionalItems = [];
    },
    setAccompaniment: (state, action: PayloadAction<string>) => {
      state.accompaniment = action.payload;
    },
    setAdditionalItems: (state, action: PayloadAction<AdditionalItems>) => {
      const additionalItem: AdditionalItems = action.payload;
      //check if additional item is already in the additionalItems array
      const existingItem: AdditionalItems = state.additionalItems.find(
        (item) => item.name === additionalItem.name
      )!;
      if (existingItem) {
        //remove the item from the array
        state.additionalItems = state.additionalItems.filter(
          (item) => item.name !== additionalItem.name
        );
      } else {
        //add the item to the array
        state.additionalItems.push(additionalItem);
      }
    },
     setTotalQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity = action.payload;  
  },
  },
});

export const cartActions = cartSlice.actions;

export const selectedChoiceOfComponents = (state: RootState) =>
  state.cart.choiceOfComponents;

export const selectedAccompaniment = (state: RootState) =>
  state.cart.accompaniment;

export const selectedAdditionalItems = (state: RootState) =>
  state.cart.additionalItems;

export default cartSlice.reducer;
