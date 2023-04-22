import { renderHook, act } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { useArray } from './useArray'

describe('useArray', () => {
  test('should return init state', () => {
    const INIT_STATE = [{ 1: 'a'}]
    const { result } = renderHook(() => useArray(INIT_STATE))
  
    expect(result.current.state).toBe(INIT_STATE)
  })

  test('should delete item by index', () => {
    const INIT_STATE = [{ 1: 'a'}]
    const { result } = renderHook(() => useArray(INIT_STATE))
  
    act(() => {
      result.current.remove(0)
    })
    expect(result.current.state.length).toBe(0)
  })

  test('should update item by index', () => {
    const INIT_STATE = [{ 1: 'a'}]
    const { result } = renderHook(() => useArray(INIT_STATE))
  
    act(() => {
      result.current.update(0, { 1: 'b'})
    })
    expect(result.current.state[0][1]).toBe('b')
  })
})