import { renderHook, act } from '@testing-library/react-hooks'

import { UIProvider, useUI } from '../../src'

test('UI PRovider: Open/Close minicart', async () => {
  const { result } = renderHook(useUI, { wrapper: UIProvider })

  expect(result.current.displayMinicart).toBe(false)

  act(() => {
    result.current.openMinicart()
  })

  expect(result.current.displayMinicart).toBe(true)

  act(() => {
    result.current.closeMinicart()
  })

  expect(result.current.displayMinicart).toBe(false)
})
