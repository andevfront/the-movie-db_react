import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Header } from "./components";

export const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollRestoration />
      <Header />
      {navigation.state === "loading" && null}
      <Outlet />
    </>
  );
};
