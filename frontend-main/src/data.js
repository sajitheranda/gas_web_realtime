const defaultGasValues = { onlyGas: 10, emptyTank: 0 };

const gasTypeValues = {
  buddy: { onlyGas: 10, emptyTank: 1 },
  budget: { onlyGas: 5, emptyTank: 12 },
  regular: { onlyGas: 12.5, emptyTank: 13.5 },
};

// Merge default values with the gasTypeValues object
const mergedGasType = { ...gasTypeValues, default: defaultGasValues };

export default mergedGasType;
