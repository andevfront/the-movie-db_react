import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./components";

export const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {navigation.state === "loading" && null}
      <Outlet />
    </>
  );
};
