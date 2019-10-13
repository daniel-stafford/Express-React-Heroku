import { gql } from "apollo-boost"

export const ALL_EXPENSES = gql`
  {
    expenses {
      title
      id
    }
  }
`
