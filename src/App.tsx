import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import { CreatePost } from "./routes/CreatePost";
import Home from "./routes/Home";
import { Layout } from "./routes/Layout";
import { MyPage } from "./routes/MyPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={isAuth} />}>
        <Route index element={<Home />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="createpost" element={<CreatePost />}></Route>
        <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />}></Route>
        <Route path="/signout" element={<SignOut setIsAuth={setIsAuth} />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
