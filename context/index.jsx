import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
  loggedIn: !!AsyncStorage.getItem("MyHealthBuddyToken"),
  user: {
    username: async () => {
      const username = await AsyncStorage.getItem("MyHealthBuddyUsername");
      return username;
    }
  }
};

const ourReducer = (draft, action) => {
  switch (action.type) {
    case "login":
      draft.loggedIn = true;
      // draft.user = action.data;
      break;
    case "logout":
      draft.loggedIn = false;
      draft.user = action.data;
      break;
  }
};

export { StateContext, DispatchContext, initialState, ourReducer };
