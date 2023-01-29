// import React, { useReducer } from "react";

// const inState = { count: 0 };
// const a = {a: 'a'}
// function reducer(state, action) {
//   switch (action.type) {
//     case "id":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "post":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       throw new Error();
//   }
// }

// const Redus = () => {
//   const [state, dispatch] = useReducer(reducer, inState);

//   return (
//     <>
//       Count:
//       <button onClick={() => dispatch({ type: "post" })}>post</button>
//       <button onClick={() => dispatch({ type: "id" })}>id</button>
//     </>
//   );
// };
