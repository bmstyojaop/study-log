import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../firebase";

export const SignIn = () => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};
