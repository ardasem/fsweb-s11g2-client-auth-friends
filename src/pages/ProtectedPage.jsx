import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProtectedPage = ({ PageComponent, fromURL, ...rest }) => {
  let { id } = useParams();

  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent {...rest} />;
    } else {
      localStorage.removeItem("registeredUser");
        return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: `${fromURL}${id ? id : ""}` },
          }}
        />
      );
    }
  };

  return isLoggedIn();
};

export default ProtectedPage;