import ExpenseItem from './components/ExpenseItem';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Food',
            amount: 234.65,
            date: new Date(2022, 8, 12)
        },
        {
            id: 'e2',
            title: 'Clothes',
            amount: 267.65,
            date: new Date(2022, 6, 10)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 534.65,
            date: new Date(2022, 5, 20)
        },
        {
            id: 'e4',
            title: 'Rent',
            amount: 982.65,
            date: new Date(2023, 9, 12)
        }
    ]
  return (
    <div>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
