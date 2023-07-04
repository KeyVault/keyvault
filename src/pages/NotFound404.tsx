import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <>
      <h1>ERROR: page you looking for does not exist</h1>
      <a><Link to="/">Go to the home page</Link></a>
    </>
  );
}

export default NotFound404;
