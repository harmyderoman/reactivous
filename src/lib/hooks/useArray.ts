import { useState } from 'react'

export function useArray<T>(
  initialState = [] as T[]
) {
  const [state, setState] = useState(initialState)

  const push = (newItem: T) => {
    setState((state) => [...state, newItem])
  }

  const deleteItemByIndex = (index: number) => {
    setState((state) => state.filter((_, i) => i != index))
  }

  const updateItemByIndex = (index: number, newItem: Partial<T>) => {
    setState((state) => {
      const updatedItem = Object.assign({}, state[index], newItem)

      return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)]
    })
  }

  return {
    state,
    push,
    setState,
    deleteItemByIndex,
    updateItemByIndex,
  }
}
