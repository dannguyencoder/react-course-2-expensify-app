import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>

    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

// import React from 'react';
// import { connect } from 'react-redux';
// import getVisibleExpenses from '../selectors/expenses';

// class ExpensesSummary extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             expenses: props.expenses,
//             filters: props.filters
//         } 
//     }

//     getVisibleExpensesCount = (visibleExpenses) => {
//         return visibleExpenses.length;
//     }

//     getVisibleExpensesTotal = (visibleExpenses) => {
//         return visibleExpenses
//             .map((expense) => expense.amount)
//             .reduce((sum, value) => sum + value, 0);
//     }

//     render() {
//         const visibleExpenses = getVisibleExpenses(this.state.expenses, this.state.filters);
//         return (
//             <div>
//                 <p>Visible expenses count: {this.getVisibleExpensesCount(visibleExpenses)}</p>
//                 <p>Total visible expenses: {this.getVisibleExpensesTotal(visibleExpenses)}</p>
//             </div>            
//         );
//     }
// }

// const mapStateToProps = (state, props) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// }

// export default connect(mapStateToProps)(ExpensesSummary);