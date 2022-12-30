import create from 'zustand'

type StackOrderProps = {
  id: number
  priority: number
}

type UseStackOrderStoreProps = {
  stackOrder: StackOrderProps[]
  addPriority: (id: number) => void
}

export const useStackOrderStore = create<UseStackOrderStoreProps>()(
  (set, get) => ({
    stackOrder: [
      { id: 1, priority: 1 },
      { id: 2, priority: 2 },
      { id: 3, priority: 3 }
    ],
    addPriority: (id: number) => {
      const { stackOrder } = get()
      const copyStack: StackOrderProps[] = JSON.parse(
        JSON.stringify(stackOrder)
      )

      const biggestPriority = copyStack.findIndex(
        ({ priority }) => priority === 5
      )

      const newStack = copyStack.map((item) => {
        const copyItem = item

        if (copyItem.id === id) {
          copyItem.priority = 5
          return copyItem
        }

        copyItem.priority = 1

        return copyItem
      })

      if (newStack[biggestPriority]) {
        newStack[biggestPriority]!.priority = 4
      }

      set(() => ({ stackOrder: newStack }))
    }
  })
)
