//actionType
export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";
export const ADD_TODO = "ADD_TODO";

//Action Creators:
export const addCount = (payload) => ({ type: ADD_COUNT, payload})
export const subCount = (payload) => ({ type: SUB_COUNT, payload})
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo})



































//Action -->what changes you want to do
// { type : "Add_Count", payload: 1}
// { type : "Dec_Count", payload: 1}
// { type : "Reset_Count"}






//Dispatch --> dispatch(Action)





//Store -->Your Data -->it's like a database but in memory(refresh to go first again)




//Reducer -->Your Function

// const reducer = (store, action){
//     switch(action.type){
//         case ADD_COUNT: return {...store, count: store.count + action.payload}
//     }
// }





//View