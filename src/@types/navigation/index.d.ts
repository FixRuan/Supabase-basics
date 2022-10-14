interface NextSignupProps {
  name: string;
  email: string;
  username: string;
}


export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      NewContact: undefined;
      Signup: undefined;
      NextSignup: NextSignupProps;
    }
  }
}
