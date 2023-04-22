import { useState } from 'react'

export function useArray<T>(
  initialState = [] as T[]
) {
  const [state, setState] = useState(initialState)

  const push = (newItem: T) => {
    setState((state) => [...state, newItem])
  }

  const remove = (index: number) => {
    const removed = state[index]
    setState((state) => state.filter((_, i) => i != index))
    return removed
  }

  const update = (index: number, newItem: T) => {
    setState((state) => {
      return [...state.slice(0, index), newItem, ...state.slice(index + 1)]
    })
  }

  return {
    state,
    push,
    setState,
    remove,
    update,
  }
}
