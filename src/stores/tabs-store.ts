import create from 'zustand'

type UseTabsStoreType = {
  isOpen: { id: number; open: boolean }[]
  openTab: (id: number) => void
  closeTab: (id: number) => void
}

export const useTabsStore = create<UseTabsStoreType>()((set, get) => ({
  isOpen: [
    { id: 1, open: true },
    { id: 2, open: true },
    { id: 3, open: true }
  ],
  openTab: (id: number) => {
    const { isOpen } = get()

    const sliceIndex = isOpen.findIndex((item: any) => item.id === id)
    if (sliceIndex !== -1) {
      const copy = [...isOpen]
      copy[sliceIndex]!.open = true

      set(() => ({ isOpen: copy }))
      return
    }

    set(() => ({ isOpen: [...isOpen, { id, open: true }] }))
  },
  closeTab: (id: number) => {
    const { isOpen } = get()

    const sliceIndex = isOpen.findIndex((item: any) => item.id === id)
    const copy = [...isOpen]

    copy[sliceIndex]!.open = false

    set(() => ({ isOpen: copy }))
  }
}))
