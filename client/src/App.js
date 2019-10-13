import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { ALL_EXPENSES } from "./graphql/queries"

const App = () => {
  const { loading, error, data } = useQuery(ALL_EXPENSES)
  if (loading) return <p>Loading ...</p>
  if (error) return `Error! ${error.message}`

  return (
    <div>
      {data.expenses.map(e => (
        <p key={e.id}>{e.title}!</p>
      ))}
    </div>
  )
}

export default App
