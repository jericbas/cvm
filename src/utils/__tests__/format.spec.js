import { formatMoney } from '../format'


describe('Format Number', () => {

    it('should format number 1 and above with $', () => {

        expect(formatMoney(1)).toBe('$1.00')
    })

    it('should format number 1000 with $', () => {

        expect(formatMoney(1000)).toBe('$1,000.00')
    })


    it('should format below with c', () => {

        expect(formatMoney(0.1)).toBe('0.10¢')
    })

    it('should format below with ¢ - decimal', () => {

        expect(formatMoney(0.1)).toBe('0.10¢')
    })

    it('should have no currency if 0', () => {

        expect(formatMoney(0)).toBe('0.00')
    })

})