export interface userReducerType {
  user: {};
  userSocialMedia:{},
  isLoading: boolean;
  isLogin: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMsg: string;
  userAddress?: any;
}

export interface IAppState {
  userReducer: any;
 
}
