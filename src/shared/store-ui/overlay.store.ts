import { create } from 'zustand';

// Definimos los tipos para los Toasts
interface ToastConfig {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
}

interface OverlayState {
  // Estados
  isLoaderVisible: boolean;
  activeModal: string | null; // Guardamos el ID o nombre del modal abierto
  toast: ToastConfig;

  // Acciones (Actions)
  actions: {
    // Loader Actions
    showLoader: () => void;
    hideLoader: () => void;

    // Modal Actions
    openModal: (modalId: string) => void;
    closeModal: () => void;

    // Toast Actions
    showToast: (message: string, type?: ToastConfig['type']) => void;
    hideToast: () => void;
  };
}

export const useOverlayStore = create<OverlayState>((set) => ({
  isLoaderVisible: false,
  activeModal: null,
  toast: { message: '', type: 'info', visible: false },

  actions: {
    showLoader: () => set({ isLoaderVisible: true }),
    hideLoader: () => set({ isLoaderVisible: false }),

    openModal: (modalId) => set({ activeModal: modalId }),
    closeModal: () => set({ activeModal: null }),

    showToast: (message, type = 'info') => {
      set({ toast: { message, type, visible: true } });
      // Auto-ocultar toast después de 3 segundos
      setTimeout(() => {
        set((state) => ({ toast: { ...state.toast, visible: false } }));
      }, 3000);
    },
    hideToast: () => set((state) => ({ toast: { ...state.toast, visible: false } })),
  },
}));

// Selectores para exportar solo lo necesario y optimizar renders
export const useOverlayActions = () => useOverlayStore((state) => state.actions);
export const useIsLoaderVisible = () => useOverlayStore((state) => state.isLoaderVisible);
export const useActiveModal = () => useOverlayStore((state) => state.activeModal);
export const useToastConfig = () => useOverlayStore((state) => state.toast);