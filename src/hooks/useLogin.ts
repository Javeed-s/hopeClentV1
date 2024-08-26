import { IAppState } from "../types/global-types";
import { useSelector } from "react-redux";

const useLogin = () => {
  const { user } = useSelector((state: IAppState) => state.userReducer);
  const isLogin = user?.isLogin || false;
  return { isLogin };
};

export default useLogin;

