import { useArray } from './useArray'

export type ArrayItem = {
  [key: string | symbol | number]: unknown
}

export function useObjectsArray<T extends ArrayItem>(
  initialState = [] as T[]
) {

  const array = useArray<T>(initialState)

  const deleteItemsByProperty = (prop: Partial<T>) => {
    const key = Object.keys(prop)[0]

    array.setState((state) => state.filter((item: T) => item[key] != prop[key]))
  }

  const updateItemsByProperty = (prop: Partial<T>, newItem: Partial<T>) => {
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

  return {
    state: array.state,
    push: array.push,
    setState: array.setState,
    deleteItemByIndex: array.deleteItemByIndex,
    deleteItemsByProperty,
    updateItemByIndex: array.updateItemByIndex,
    updateItemsByProperty
  }
}