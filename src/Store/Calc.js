import { create } from 'zustand'

export const useCalcStore = create((set) => ({
  visor: "",

  setVisor: (num) =>set(() =>({
    visor: num
  })),

  zeraVisor: () =>set(() =>({
    visor: "",
    firstNumber: ""
  })),

  limpaVisor: () =>set(() =>({
    visor: "",
  })),

  opcao: "",

  setOpcao: (opc) =>set(() =>({
    opcao: opc
  })),

  zeraOpcao: () =>set(() =>({
    opcao: ""
  })),

  firstNumber: "",

  setFirstNumber: (num) =>set(() =>({
    firstNumber: num
  })),

  zeraFirstNumber: () =>set(() =>({
    firstNumber: ""
  })),

}))

