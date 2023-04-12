import type { User } from "@firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../firebase";

type SignInProps = {
  user: User | null;
};

export const SignIn: FC<SignInProps> = ({ user }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };

  // このコードは、Reactコンポーネントの一部であり、Firebase AuthenticationとReact Routerを使用しています。useNavigateフックは、React Routerのナビゲーション機能を提供するフックです。ナビゲーションは、URLの変更を介してReactアプリケーションの状態を変更します。この場合、ログイン後にユーザーをホームページにリダイレクトするために、useNavigateを使用しています。useEffectフックは、Reactコンポーネントがレンダリングされた後に非同期処理を実行するために使用されます。このコードでは、userの値が変更されるたびに、React Routerを使用してページを移動します。navigateがuseEffectの依存配列に含まれている理由は、userが変更されたときにnavigateが再定義されるためです。このようにすることで、navigateが最新のものに保たれ、ユーザーがログインしたときに正しいURLにリダイレクトされます。
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};
