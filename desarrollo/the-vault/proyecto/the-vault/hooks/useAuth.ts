import { create } from "zustand"

interface AuthStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useAuth = create<AuthStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false}),
}))
//Hola
//Hola
//Hola
//Hola
//Hola
//Hola//Hola//Hola//Hola//Hola//Hola//Hola
export default useAuth
