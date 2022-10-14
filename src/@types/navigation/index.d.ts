type UserData = {
  name: string;
  email: string;
  username: string;
}

interface NextSignupProps {
  user: username;
}

interface HomeProps {
  created_at: string;
  email: string;
  id: number;
  name: string;
  username: string;
}


export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      NewContact: undefined;
      Signup: undefined;
      NextSignup: NextSignupProps;
      FinishSignUp: undefined;
      Home: HomeProps;
    }
  }
}
