import ExpenseItem from "./components/Expenses/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      price: 290,
      date: new Date(2023, 2, 28),
    },
    {
      title: "Car Insurance",
      amount: 290,
      date: new Date(2023, 2, 28),
    },
    {
      title: "Car Insurance",
      price: 290,
      date: new Date(2023, 2, 28),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
