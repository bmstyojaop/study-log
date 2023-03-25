import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

export const SignOut = () => {
  const navigate = useNavigate();
  const signOutGoogle = () => {
    signOut(auth).then(() => {
      navigate("/signin");
    });
  };

  return (
    <div>
      <p>サインアウトする</p>
      <button onClick={signOutGoogle}>サインアウト</button>
    </div>
  );
};
