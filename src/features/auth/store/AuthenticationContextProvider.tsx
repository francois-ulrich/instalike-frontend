import { PropsWithChildren, useEffect, useState } from "react";
import {
  AuthenticationContext,
  AuthenticationContextState,
  MutableAuthenticationContext,
} from "./authenticationContext";
import business from "../services/auth.application";
import { LoginFormData } from "../custom-types";

export const AuthenticationContextProvider = (props: PropsWithChildren) => {
  // Initialize
  const [state, setState] = useState<AuthenticationContextState>({
    user: null,
    authenticated: false,
    autoAuthIsDone: false,
  });

  const logIn = (formLoginData: LoginFormData) => {
    business.login(formLoginData).then((res) => {
      const { user } = res;

      setState({
        ...state,
        user,
        authenticated: true,
      });
    });
  };

  const logOut = () => {
    setState({
      ...state,
      user: null,
      authenticated: false,
    });
  };

  const logInAuto = async () => {
    try {
      const result = await business.getAuthenticatedUser();

      const { user } = result.data;

      setState({
        ...state,
        user,
        authenticated: true,
      });
    } catch {
      setState({
        ...state,
        autoAuthIsDone: true,
        authenticated: false,
      });
    } finally {
      setState((prevState) => ({
        ...prevState,
        autoAuthIsDone: true,
      }));
    }
  };

  useEffect(() => {
    logInAuto();
  }, []);

  const context: MutableAuthenticationContext = {
    state,
    setState,
    logIn,
    logOut,
  };

  return (
    <AuthenticationContext.Provider value={context}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
