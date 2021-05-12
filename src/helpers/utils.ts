
  export const numberToCurrency = (v: number) => {
    return v.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })
  }
