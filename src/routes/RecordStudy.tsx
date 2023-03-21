import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { ChangeEventHandler, FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

type RecordStudyProps = {
  isAuth: boolean;
};

export const RecordStudy: FC<RecordStudyProps> = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const navigate = useNavigate();

  const handleHour: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (parseInt(e.target.value) > parseInt(e.target.max) || e.target.value.length > 2) {
      setHour("");
      return;
    }
    setHour(e.target.value.trim());
  }, []);

  const handleMinute: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (parseInt(e.target.value) > parseInt(e.target.max) || e.target.value.length > 2) {
      setMinute("");
      return;
    }
    setMinute(e.target.value.trim());
  }, []);

  // Add a new document with a generated id.
  const recordStudy = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(collection(db, "studylog"), {
      title: title,
      author: {
        id: auth.currentUser?.uid,
        username: auth.currentUser?.displayName,
      },
      createdAt: serverTimestamp(),
      detail: detail,
      hour: hour == "" ? "00" : hour,
      minute: minute == "" ? "00" : minute,
      updatedAt: serverTimestamp(),
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex w-full justify-center h-[90vh]">
      <form
        onSubmit={recordStudy}
        className="p-5 w-full bg-white md:w-[50rem]  rounded-3xl drop-shadow-md"
      >
        <div className="mb-6">
          <h1 className="text-2xl mb-8 text-center">学習記録</h1>
          <label htmlFor="title" className=" mb-2 block text-sm font-medium text-gray-900">
            学習内容
          </label>
          <input
            id="title"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm p-2.5 focus:border-blue-500 focus:ring-blue-500"
            placeholder="例）数学A 問題集"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="hour" className="mb-2 block text-sm font-medium text-gray-900">
            学習時間
            <span className="text-gray-500 px-1">(時間：分)</span>
          </label>
          <div className="h-10 block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm px-2.5">
            <div className="w-full h-full flex items-center">
              <input
                type="number"
                inputMode="numeric"
                id="hour"
                min="0"
                max="99"
                placeholder="00"
                className="w-8 outline-none bg-gray-50 text-center focus:bg-sky-100"
                onChange={handleHour}
                value={hour}
              />
              <span className="px-1">:</span>
              <input
                type="number"
                inputMode="numeric"
                id="minute"
                min="0"
                max="99"
                placeholder="00"
                className="w-8 outline-none bg-gray-50 text-center focus:bg-sky-100"
                onChange={handleMinute}
                value={minute}
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="detail" className="mb-2 block text-sm font-medium text-gray-900">
            メモ
          </label>
          <textarea
            id="detail"
            className="h-40 block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm p-2.5 focus:border-blue-500 focus:ring-blue-500"
            required
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 text-center text-sm font-medium text-white py-2.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-3000"
          >
            記録する
          </button>
        </div>
      </form>
    </div>
  );
};
