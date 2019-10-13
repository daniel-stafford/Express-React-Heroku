const { gql } = require("apollo-server")

module.exports = gql`
  type Expense {
    title: String!
    id: ID!
  }
  type Query {
    expenses: [Expense]
  }
  type Mutation {
    addExpense(title: String!): [Expense]!
  }
`
