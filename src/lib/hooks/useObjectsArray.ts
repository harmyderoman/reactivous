import { useArray } from './useArray'

export type ArrayItem = {
  [key: string | symbol | number]: unknown
}

export function useObjectsArray<T extends ArrayItem>(
  initialState = [] as T[]
) {

  const array = useArray<T>(initialState)

  const removeAll = (prop: Partial<T>) => {
    const key = Object.keys(prop)[0]

    const removed = array.state.filter(item => item[key] == prop[key])
    array.setState((state) => state.filter((item) => item[key] != prop[key]))

    return removed
  }

  const updateAll = (prop: Partial<T>, newItem: Partial<T>) => {
    const key = Object.keys(prop)[0]

    array.setState((state) => {
      const newState: T[] = []

      state.forEach((item) => {

        if (item[key] == prop[key]) {
          const updatedItem = Object.assign({}, item, newItem)

          newState.push(updatedItem)
        } else {
          newState.push(item)
        }
      })

      return newState
    })
  }
  const update = (index: number, newItem: T) => {
    array.setState((state) => {
      const updatedItem = Object.assign({}, state[index], newItem)

      return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)]
    })
  }

  return {
    state: array.state,
    push: array.push,
    setState: array.setState,
    remove: array.remove,
    removeAll,
    updateAll,
    update
  }
}