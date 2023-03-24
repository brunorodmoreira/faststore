import {
  SearchTop as UISearchTop,
  SearchTopTerm as UISearchTopTerm,
} from '@faststore/ui'
import type { HTMLAttributes } from 'react'

import type { StoreSuggestionTerm } from '@generated/graphql'
import useSearchInput, { formatSearchPath } from 'src/sdk/search/useSearchInput'
import useTopSearch from 'src/sdk/search/useTopSearch'

export interface SearchTopProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * List of top searched items
   */
  topTerms?: StoreSuggestionTerm[]
}

function SearchTop({ topTerms, ...otherProps }: SearchTopProps) {
  const { onSearchInputSelection } = useSearchInput()
  const { terms, isLoading } = useTopSearch(topTerms)

  if (terms.length === 0) {
    return null
  }

  return (
    <UISearchTop title="Top Search" isLoading={isLoading} {...otherProps}>
      {terms.map((term, index) => (
        <UISearchTopTerm
          key={index}
          value={term.value}
          index={index}
          linkProps={{
            href: formatSearchPath(term.value),
            onClick: () =>
              onSearchInputSelection?.(
                term.value,
                formatSearchPath(term.value)
              ),
          }}
        />
      ))}
    </UISearchTop>
  )
}

export default SearchTop