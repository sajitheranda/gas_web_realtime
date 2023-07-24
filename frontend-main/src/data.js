const defaultGasValues = { onlyGas: 10, emptyTank: 1 };

const gasTypeValues = {
  buddy: { onlyGas: 10, emptyTank: 1 },
  budget: { onlyGas: 10, emptyTank: 4.5 },
  regular: { onlyGas: 12.5, emptyTank: 13.5 },
};

// Merge default values with the gasTypeValues object
const mergedGasType = { ...gasTypeValues, default: defaultGasValues };

export default mergedGasType;