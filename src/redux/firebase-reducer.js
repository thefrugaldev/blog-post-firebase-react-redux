export default function firebaseReducer(state = null, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
    case "LOGOUT":
    case "FETCH_USER":
      return action.currentUser;
    default:
      return state;
  }
}
