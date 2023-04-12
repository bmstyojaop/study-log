import type { User } from "@firebase/auth";
import { Metric } from "@tremor/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { ChangeEventHandler, FC, FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

type RecordStudyProps = {
  user: User | null;
};

export const RecordStudy: FC<RecordStudyProps> = ({ user }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [time, setTime] = useState(0);

  const navigate = useNavigate();

  const handleHour: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (parseInt(e.target.value) > parseInt(e.target.max) || e.target.value.length > 2) {
        setHour("");
        setTime(parseInt("0") * 60 + parseInt(minute));
        return;
      }
      setHour(e.target.value.trim());
      setTime(
        parseInt(e.target.value.trim() === "" ? "0" : e.target.value.trim()) * 60 +
          parseInt(minute === "" ? "0" : minute)
      );
    },
    [minute]
  );

  const handleMinute: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (parseInt(e.target.value) > parseInt(e.target.max) || e.target.value.length > 2) {
        setMinute("");
        setTime(parseInt(hour) * 60 + parseInt("0"));
        return;
      }
      setMinute(e.target.value.trim());
      setTime(
        parseInt(hour === "" ? "0" : hour) * 60 +
          parseInt(e.target.value.trim() === "" ? "0" : e.target.value.trim())
      );
    },
    [hour]
  );

  useEffect(() => {
    console.log(time);
  }, [time]);

  const recordStudy = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addDoc(collection(db, "studylog"), {
      title: title,
      author: {
        id: auth.currentUser?.uid,
        photoUrl: auth.currentUser?.photoURL,
        username: auth.currentUser?.displayName,
      },
      createdAt: serverTimestamp(),
      detail: detail,
      hour: `${Math.floor(time / 60)}`,
      minute: `${time % 60}`,
      time: time,
      updatedAt: serverTimestamp(),
    });
    navigate("/");
  };

  if (!user) {
    return <div>学習を記録するにはログインが必要です。</div>;
  }
  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={recordStudy}
        className="w-full rounded-3xl bg-white p-5 drop-shadow-md md:w-[50rem]"
      >
        <div className="mb-6">
          <Metric className=" text-center text-gray-600">学習を記録</Metric>
          <label htmlFor="title" className=" mb-2 block text-sm font-medium text-gray-900">
            学習内容
          </label>
          <input
            id="title"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="例）数学A 問題集"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="hour" className="mb-2 block text-sm font-medium text-gray-900">
            学習時間
            <span className="px-1 text-gray-500">(時間：分)</span>
          </label>
          <div className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 shadow-sm">
            <div className="flex h-full w-full items-center">
              <input
                type="number"
                inputMode="numeric"
                id="hour"
                min="0"
                max="24"
                placeholder="00"
                className="w-8 bg-gray-50 text-center outline-none focus:bg-sky-100"
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
                className="w-8 bg-gray-50 text-center outline-none focus:bg-sky-100"
                onChange={handleMinute}
                value={minute}
              />
            </div>
          </div>
        </div>

        <div className="mb-6 ">
          <label htmlFor="detail" className="mb-2 block text-sm font-medium text-gray-900">
            メモ
          </label>
          <textarea
            id="detail"
            className="block h-40 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          ></textarea>
        </div>
        <div className="flex w-full justify-center py-5">
          <button
            type="submit"
            className="focus:ring-blue-3000 rounded-lg bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4"
          >
            記録する
          </button>
        </div>
      </form>
    </div>
  );
};
