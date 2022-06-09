import { configureStore, } from '@reduxjs/toolkit'

import vendingMachineReducer from 'slices/vendingSlice'
export const config = {
    reducer: {
        vendingMachine: vendingMachineReducer,
    },
}

export const store = configureStore(config)



export type Store = typeof store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch