import { useState } from 'react'

interface StackOrderProps {
  id: number
  priority: number
}

const useStack = () => {
  const [stackOrder, setStackOrder] = useState<StackOrderProps[]>([])

  const addPriority = (id: number) => {
    const copyStack = [...stackOrder]
    const biggestPriority = copyStack.findIndex(
      ({ priority }) => priority === 5
    )

    if (!copyStack.find(({ id: currentId }) => id === currentId)) {
      copyStack.push({
        id,
        priority: 1
      })
    }

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

    setStackOrder(newStack as StackOrderProps[])
  }

  return { stackOrder, addPriority }
}

export { useStack }
