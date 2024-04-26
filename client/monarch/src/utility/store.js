import create from "zustand";

export const useStore = create((set) => ({
  part: {
    id: "",
    subParts: [],
    name: "",
    selectSubPart: "",
  },
  setPart: (newPart) => set({ part: newPart }),

  addSubPart: (newSubPart) =>
    set((state) => ({
      part: { ...state.part, subParts: [...state.part.subParts, newSubPart] },
    })),

  setSelectSubPart: (selectedId) =>
    set((state) => ({
      part: { ...state.part, selectSubPart: selectedId },
    })),
}));
