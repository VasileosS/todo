import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InteractiveState {
    filter: string;
}

const initialState: InteractiveState = {
    filter: 'All',
};

export const interactiveSlice = createSlice({
    name: 'interactive',
    initialState,
    reducers: {
        setFilterAction: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
    selectors: {
        selectFilter: (state) => state.filter,
    },
});

export const { setFilterAction } = interactiveSlice.actions;
export const { selectFilter } = interactiveSlice.selectors;
