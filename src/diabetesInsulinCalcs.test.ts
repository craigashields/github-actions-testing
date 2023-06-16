import { BloodSugarUnit, convertBloodSugarValue } from './diabetesInsulinCalcs'
import { describe, it, expect } from 'vitest'

describe('Test blood sugar converter', () => {
    it('Should return 80 as blood sugar unit is the same', () => {
        expect(convertBloodSugarValue(80, BloodSugarUnit.Mgdl, BloodSugarUnit.Mgdl)).toBe(80)
    })

    it('Should return 4.4', () => {
        expect(convertBloodSugarValue(80, BloodSugarUnit.Mgdl, BloodSugarUnit.Mmol)).toBe(4.44)
    })

    it('Should return 79.28', () => {
        expect(convertBloodSugarValue(4.4, BloodSugarUnit.Mmol, BloodSugarUnit.Mgdl)).toBe(79.28)
    })

})