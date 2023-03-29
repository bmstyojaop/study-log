import type { User } from "@firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import Home from "./routes/Home";
import { Layout } from "./routes/Layout";
import { MyPage } from "./routes/MyPage";
import { RecordStudy } from "./routes/RecordStudy";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(getAuth(), (user: User | null) => {
      setUser(user);
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route index element={<Home />} />
        <Route path="my-page" element={<MyPage user={user} />} />
        <Route path="record-study" element={<RecordStudy user={user} />}></Route>
        <Route path="/login" element={<SignIn user={user} />}></Route>
        <Route path="/logout" element={<SignOut user={user} />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>ページが見つかりませんでした。</h2>
      <p>
        <Link to="/">ホームに戻る</Link>
      </p>
    </div>
  );
}

export default App;
