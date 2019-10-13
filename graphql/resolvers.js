const Expense = require("../models/expense")

module.exports = {
  Query: {
    expenses: () => Expense.find({})
  },
  Mutation: {
    addExpense: async (root, args) => {
      const { title } = args
      let expense = new Expense({
        title
      })
      try {
        await expense.save()
        const savedExpense = await Expense.findOne({ title })
      } catch (error) {
        console.log(
          "something went wrong with saving the expense",
          error.message
        )
      }
    }
  }
}
