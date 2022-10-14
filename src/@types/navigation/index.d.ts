type UserData = {
  name: string;
  email: string;
  username: string;
}

interface NextSignupProps {
  user: username;
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
