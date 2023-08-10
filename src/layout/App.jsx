import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Footer, Header } from "./components";
import { ScrollToTopButton } from "../components/scrollToTopButton";

export const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollRestoration />
      <Header />
      {navigation.state === "loading" && null}
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};
