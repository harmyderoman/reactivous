import { renderHook, act } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { useObjectsArray } from './useObjectsArray'

describe('useObjectsArray', () => {

  test('should return init state', () => {
    const INIT_STATE = [{ 1: 'a'}]
    const { result } = renderHook(() => useObjectsArray(INIT_STATE))
  
    expect(result.current.state).toBe(INIT_STATE)
  })

  test('should delete item by index', () => {
    const INIT_STATE = [{ 1: 'a'}]
    const { result } = renderHook(() => useObjectsArray(INIT_STATE))
  
    act(() => {
      result.current.deleteItemByIndex(0)
    })
    expect(result.current.state.length).toBe(0)
  })

  test('should update item by index', () => {
    const INIT_STATE = [{ 1: 'a'}]
    const { result } = renderHook(() => useObjectsArray(INIT_STATE))
  
    act(() => {
      result.current.updateItemByIndex(0, { 1: 'b'})
    })
    expect(result.current.state[0][1]).toBe('b')
  })

  test('should delete item by property', () => {
    const INIT_STATE = [{ id: 'a', value: 0 }]
    const { result } = renderHook(() => useObjectsArray(INIT_STATE))
  
    act(() => {
      result.current.deleteItemsByProperty({id: 'a'})
    })
    expect(result.current.state.length).toBe(0)
  })

  test('should update item by property', () => {
    const INIT_STATE = [{ id: 'a', value: 0 }]
    const { result } = renderHook(() => useObjectsArray(INIT_STATE))
  
    act(() => {
      result.current.updateItemsByProperty({id: 'a'}, { value: 1 } )
    })
    expect(result.current.state[0].value).toBe(1)
  })

})