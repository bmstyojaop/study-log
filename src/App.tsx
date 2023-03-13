import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import Home from "./routes/Home";
import { Layout } from "./routes/Layout";
import { MyPage } from "./routes/MyPage";
import { RecordStudy } from "./routes/RecordStudy";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={isAuth} />}>
        <Route index element={<Home />} />
        <Route path="my-page" element={<MyPage isAuth={isAuth} />} />
        <Route path="record-study" element={<RecordStudy isAuth={isAuth} />}></Route>
        <Route path="/login" element={<SignIn setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<SignOut setIsAuth={setIsAuth} />}></Route>
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
