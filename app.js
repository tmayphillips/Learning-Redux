const redux = require('redux')

const initialState = {
  counter: 0,
  cartItems: [],
  isAuthenticated: false
}

// create a reducer (the only one that can update the store)
let rootReducer = (state=initialState,action) => {
  if(action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }

  else if(action.type == "IS_AUTH") {
    return {
      ...state,
      isAuthenticated: action.value
    }
  }

  else if(action.type == 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state
}

// create a store
const store = redux.createStore(rootReducer)
console.log(store.getState()) // get global getState

// create subscriptions
store.subscribe(() => {
  console.log("[Subscribed]",store.getState());
})

// dispatching actions
store.dispatch({
  type: 'INC_COUNTER'
})

store.dispatch({
  type: 'IS_AUTH',
  value: true // value can be called anything, can pass another object if I want
})

store.dispatch({
  type: 'INCREMENT',
  value: 10
})


console.log(store.getState())
