import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <>
      <h1>ERROR: page you looking for does not exist, (please make this component pretty)</h1>
      <Link to="/">Go to the home page</Link>
    </>
  );
}

export default NotFound404;
