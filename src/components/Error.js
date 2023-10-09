// useRouteError is a hook given to us by react-router-dom library
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError() || [];
    console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong</h2>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
};
export default Error;

