import { render } from '@testing-library/react'
import React from 'react'

import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {
  it('`data-store-breadcrumb` is present', () => {
    const { getByTestId } = render(<Breadcrumb breadcrumb={[]} />)

    expect(getByTestId('store-breadcrumb')).toHaveAttribute(
      'data-store-breadcrumb'
    )
  })

  it('has the correct breadcrumb size and active item is always the last breadcrumb item', () => {
    const { queryAllByTestId, rerender } = render(
      <Breadcrumb breadcrumb={[]} />
    )

    // Test 10 different breadcrumbs, from 1 level to 10 levels.
    for (let breadcrumbSize = 1; breadcrumbSize <= 10; breadcrumbSize += 1) {
      // Creates a generic breadcrumb data.
      const breadcrumb = Array.from(
        { length: breadcrumbSize },
        (_: undefined, index: number) => ({ href: '/', text: `Level ${index}` })
      )

      rerender(<Breadcrumb breadcrumb={breadcrumb} />)

      const breadcrumbItems = queryAllByTestId('store-breadcrumb-item')

      // Validate that breadcrumb is rendering with the correct size.
      expect(breadcrumbItems).toHaveLength(breadcrumbSize)
      // Validate if the last element has the active attribute.
      expect(breadcrumbItems[breadcrumbSize - 1]).toHaveAttribute(
        'data-store-breadcrumb-item-active'
      )

      // Get all elements except the last one.
      breadcrumbItems.pop()
      // Validate that no other element has the 'data-store-breadcrumb-item-active' attribute
      breadcrumbItems.forEach((item) => {
        expect(item).not.toHaveAttribute('data-store-breadcrumb-item-active')
      })
    }
  })
})