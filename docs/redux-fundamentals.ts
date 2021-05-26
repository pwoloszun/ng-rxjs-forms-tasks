import { produce } from 'immer';

interface Action { // FSA - Flux Standard Action
  type: string;
  payload?: any;
}

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

const state = {
  counter: { // state slice
    value: 997
  },

  users: { // users state slice
    entities: [],
    count: 123
  },

  todos: [] //state slice
};



// actions - "Events"
const action = {
  type: 'users/fetched',
}; // "event"

// action creators
// function usersFetched(users: any, dt: number) {
//   return {
//     type: 'users/fetched',
//     payload: {
//       users
//     }
//   };
// }

// const action2 = usersFetched(
//   [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }],
//   Date.now()
// )

store.dispatch(action);



// reducer(s)
function usersReducer(state: any, action: Action) {
  switch (action.type) {
    case 'users/fetched': {
      const nextState = produce(state, (draftState: any) => {
        draftState.entities = [];
      });
      return nextState;
    }
    case 'users/errorOccured': {
      return state;
    }
    default:
      return state;
  }
}

function counterReducer(state: any, action: Action) {
  return state;
}


function rootReducer(state: any, action: Action) {
  const nextUsersState = usersReducer(state.users, action);
  const nextCounterState = counterReducer(state.counter, action);

  return {
    ...state,
    users: nextUsersState,
    counter: nextCounterState,
  };
}



// ====== client code - Components

// Counter component
store.subscribe(() => {
  const state = store.getState();

  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
