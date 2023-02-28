import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const loc = useLocation();
  console.log(loc);
  const history = useHistory();
  const backPage1 = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <br />
      <button onClick={backPage1}>back</button>
    </div>
  );
};
