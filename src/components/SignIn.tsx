import type { User } from "@firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FC, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
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
    <div className=" flex w-screen justify-center  p-5 ">
      <div className="h-96 w-full max-w-xl rounded-2xl bg-white p-5 px-10">
        <h2 className=" pb-4 text-center text-2xl text-gray-600">ログイン方法を選択</h2>
        <ul>
          <li className="flex justify-center">
            <button
              className="flex  items-center rounded-lg border border-sky-800 px-10 py-2.5 text-center text-lg  font-medium text-sky-800 duration-300 hover:border-white hover:bg-sky-500 hover:text-white  active:bg-sky-800"
              onClick={loginWithGoogle}
            >
              <FcGoogle className="mr-1" />
              Googleアカウント
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
