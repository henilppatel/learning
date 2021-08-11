import ExpenseItem from './Components/ExpenseItem';
function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 250.46, date: new Date(2021,3,23)},
    {id: 'e2',title: 'Toilet Paper', amount: 25.46, date: new Date(2021,2,14)},
    {id: 'e2',title: 'Laundry', amount: 7.46, date: new Date(2021,4,212)},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date ={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date ={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date ={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
