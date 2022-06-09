
import { addBalance, reduceBalance } from 'slices/vendingSlice'
import { createTestStore } from 'test/TestApp';
import { Store } from 'store'


describe('Slice - Vending', () => {
    let store: Store;

    beforeEach(() => {

        store = createTestStore()

    })

    it('should have initialState balance = 0', () => {

        const state = store.getState().vendingMachine
        expect(state).toEqual({ balance: 0 })
    })

    it('should update balance - addBalance', () => {

        store.dispatch(addBalance(10))
        const state = store.getState().vendingMachine
        expect(state).toEqual({ balance: 10 })
    })

    it('should update balance - reduceBalance', () => {

        store.dispatch(reduceBalance(5))
        const state = store.getState().vendingMachine
        expect(state).toEqual({ balance: -5 })
    })



})