import { createBrowserHistory } from "history";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useEffect } from "react";

const history = createBrowserHistory();

export default function Login() {
  function handleRedirect() {
    // Replace current page with /i/flow/login
    history.replace("/i/flow/login");
  }

  // Call the redirect function when the component mounts
  useEffect(() => {
    handleRedirect();
  }, []);

  return <Main />;
}
