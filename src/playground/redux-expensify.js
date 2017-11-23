import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action generators
const addExpense = ({ description = '', note = '', ammount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        ammount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

// Expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}

// Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', ammount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', ammount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));