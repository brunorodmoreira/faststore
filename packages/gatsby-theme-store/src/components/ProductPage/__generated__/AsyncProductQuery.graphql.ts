
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type AsyncProductQueryQueryVariables = Exact<{
  slug: Maybe<Scalars['String']>;
  regionId: Maybe<Scalars['String']>;
}>;


export type AsyncProductQueryQuery = { vtex: { product: Maybe<{ productName: Maybe<string>, productReference: Maybe<string>, description: Maybe<string>, linkText: Maybe<string>, id: Maybe<string>, specificationGroups: Maybe<Array<Maybe<{ name: Maybe<string>, specifications: Maybe<Array<Maybe<{ name: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>> }>>>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, variations: Maybe<Array<Maybe<{ name: Maybe<string>, values: Maybe<Array<Maybe<string>>> }>>>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commercialOffer: Maybe<{ spotPrice: Maybe<number>, availableQuantity: Maybe<number>, price: Maybe<number>, listPrice: Maybe<number>, maxInstallments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number> }>>>, installments: Maybe<Array<Maybe<{ value: Maybe<number>, numberOfInstallments: Maybe<number>, interestRate: Maybe<number> }>>>, gifts: Maybe<Array<Maybe<{ skuName: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string> }>>> }>>>, teasers: Maybe<Array<{ name: Maybe<string> }>> }> }>>> }>>> }> } };


// Query Related Code

export const AsyncProductQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query AsyncProductQuery($slug: String, $regionId: String) {\n  vtex {\n    product(slug: $slug, regionId: $regionId) {\n      id: productId\n      productName\n      productReference\n      description\n      linkText\n      specificationGroups {\n        name\n        specifications {\n          name\n          values\n        }\n      }\n      items {\n        variations {\n          name\n          values\n        }\n        itemId\n        images {\n          imageUrl\n          imageText\n        }\n        sellers {\n          sellerId\n          commercialOffer: commertialOffer {\n            maxInstallments: Installments(criteria: MAX_WITHOUT_INTEREST) {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n            }\n            installments: Installments(criteria: ALL) {\n              value: Value\n              numberOfInstallments: NumberOfInstallments\n              interestRate: InterestRate\n            }\n            availableQuantity: AvailableQuantity\n            price: Price\n            listPrice: ListPrice\n            gifts {\n              skuName\n              images {\n                imageUrl\n              }\n            }\n            spotPrice\n            teasers {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "fa11f45992190b5d303d06eecc28f19ea5750264baf37ef74397557240e80fb8",
  operationName: "AsyncProductQuery",
}

