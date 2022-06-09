import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface VendingMachineState {
    balance: number
}

const initialState: VendingMachineState = {
    balance: 0,
}

export const vendingMachineSlice = createSlice({
    name: 'vendingMachine',
    initialState,
    reducers: {

        addBalance: (state, action: PayloadAction<number>) => {
            state.balance += action.payload
        },
        reduceBalance: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload
        },
    },
})



export const { addBalance, reduceBalance } = vendingMachineSlice.actions

export default vendingMachineSlice.reducer