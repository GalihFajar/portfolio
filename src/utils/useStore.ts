import create from "zustand";

type Modal = {
  isModalShown: boolean;
  showModal: () => void;
  hideModal: () => void;
};
export const useStore = create<Modal>((set) => ({
  isModalShown: false,
  showModal: () => set(() => ({ isModalShown: true })),
  hideModal: () => set(() => ({ isModalShown: false })),
}));
