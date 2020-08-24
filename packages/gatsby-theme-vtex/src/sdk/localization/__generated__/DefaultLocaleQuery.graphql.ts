/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type DefaultLocaleQueryQueryVariables = Exact<{ [key: string]: never }>

export type DefaultLocaleQueryQuery = {
  allChannel: { edges: Array<{ node: { defaultLocale: Maybe<string> } }> }
}

// Query Related Code

export const DefaultLocaleQuery = {
  query:
    'query DefaultLocaleQuery {\n  allChannel(filter: {targetProduct: {eq: "vtex-storefront"}}, limit: 1) {\n    edges {\n      node {\n        defaultLocale\n      }\n    }\n  }\n}\n',
  sha256Hash:
    'cb84c3c12f58a1edff9e6c5f50536b8052773521ea9bf41ffb4d99deb9d8d4c0',
  operationName: 'DefaultLocaleQuery',
}
