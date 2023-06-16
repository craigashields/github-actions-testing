export enum BloodSugarUnit {
  Mgdl = 'mgdl',
  Mmol = 'mmol',
}

export function convertBloodSugarValue(value: number, fromUnit: BloodSugarUnit, toUnit: BloodSugarUnit): number {
  if (fromUnit === toUnit) {
    return value; // No conversion needed
  }

  if (fromUnit === BloodSugarUnit.Mgdl && toUnit === BloodSugarUnit.Mmol) {
    return parseFloat((value / 18.0182).toFixed(2));
  }

  if (fromUnit === BloodSugarUnit.Mmol && toUnit === BloodSugarUnit.Mgdl) {
    return parseFloat((value * 18.0182).toFixed(2));
  }

  throw new Error('Invalid blood sugar units');
}