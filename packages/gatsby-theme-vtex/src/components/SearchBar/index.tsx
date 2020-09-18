import React, { FC } from 'react'
import { SearchBar as SearchBarProvider } from '@vtex/store-ui'

import SearchBarButton from './Button'
import SearchBarInput from './Input'
import SearchSuggestions from '../SearchSuggestions'

const loadController = () => import('../../sdk/search/controller')

interface Props {
  variant?: string
  placeholder: string
  'aria-label': string
}

const search = async (term: string) => {
  const controller = await loadController()

  controller.search(term)
}

const SearchBar: FC<Props> = ({
  variant = 'searchbar',
  placeholder,
  'aria-label': label,
}) => (
  <SearchBarProvider variant={variant} onSearch={search}>
    <SearchBarInput
      variant={variant}
      aria-label={`${label} input`}
      placeholder={placeholder}
    >
      <SearchSuggestions />
    </SearchBarInput>
    <SearchBarButton variant={variant} aria-label={`${label} button`} />
  </SearchBarProvider>
)

export default SearchBar
