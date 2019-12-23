import { auth } from "../auth/auth-service";

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
    currentUser: auth.currentUser.toJSON()
  };
};

export const registerSuccess = () => {
  return {
    type: "REGISTER_SUCCESS",
    currentUser: auth.currentUser.toJSON()
  };
};

export const register = (email, password) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    dispatch(registerSuccess());
  } catch (error) {
    throw error;
  }
};

export const login = (email, password) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess());
  } catch (error) {
    throw error;
  }
};

export const logout = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({ type: "LOGOUT", currentUser: auth.currentUser });
  } catch (error) {
    throw error;
  }
};

export const fetchUser = () => async dispatch => {
  try {
    await auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        localStorage.setItem("isAuthenticated", true);
        dispatch({
          type: "FETCH_USER",
          currentUser: currentUser.toJSON()
        });
      } else {
        localStorage.removeItem("isAuthenticated");
        dispatch({
          type: "FETCH_USER",
          currentUser: null
        });
      }
    });
  } catch (error) {
    throw error;
  }
};
