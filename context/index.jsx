import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
  token: null,
  user: {
    username: async () => {
      const username = await AsyncStorage.getItem("MyHealthBuddyUsername");
      return username;
    }
  }
};

const ourReducer = (state, action) => {
  switch (action.type) {
    case "token":
      return { ...state, token: action.payload };
    case "logout":
      //might cause error but seems easier to replace entire object
      return initialState;
  }
};

export { StateContext, DispatchContext, initialState, ourReducer };
