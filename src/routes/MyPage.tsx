import type { User } from "@firebase/auth";
import { AreaChart } from "@tremor/react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";

type MyPageProps = {
  user: User | null;
};

type Log = {
  // date: Date;
  date: string;
  "": number;
};
type Result = {
  date: string;
  time: number;
};

const timeFormatter = (time: number) => {
  return `${Math.floor(time / 60)}時間${time % 60}分`;
};

export const MyPage: FC<MyPageProps> = ({ user }) => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState<Log[] | null>(null);
  const studylogRef = collection(db, "studylog");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const getMyLogs = async () => {
      // 一番最新のデータの日付を取得
      const latestData = await getDocs(
        query(
          studylogRef,
          where("author.id", "==", user?.uid),
          orderBy("createdAt", "desc"),
          limit(1)
        )
      );

      const latestDate: Date = latestData.docs[0].data().createdAt.toDate();

      // 30日前の0時0分0秒0ミリ秒を設定
      const thirtyDaysAgo: Date = new Date(latestDate.getTime() - 30 * 24 * 60 * 60 * 1000);
      thirtyDaysAgo.setHours(0, 0, 0, 0);

      // 最新から30日分のデータを取得
      const data = await getDocs(
        query(
          studylogRef,
          where("author.id", "==", user?.uid),
          where("createdAt", ">=", new Date(thirtyDaysAgo)),
          orderBy("createdAt", "desc")
        )
      );

      const result = data.docs
        .map((doc) => ({
          date: `${doc.data().createdAt.toDate().getMonth() + 1}/ ${doc
            .data()
            .createdAt.toDate()
            .getDate()}`,
          time: doc.data().time,
        }))
        .reduce((acc: Result[], cur: Result) => {
          const target = acc.find((item) => item.date === cur.date);
          if (target) {
            target.time += cur.time;
          } else {
            acc.push(cur);
          }
          return acc;
        }, []);

      setChartData(
        result
          .map((doc) => ({
            date: `${doc.date}`,
            "": doc.time,
          }))
          .reverse()
      );
    };
    getMyLogs();
  }, []);
  return (
    <div className="hidden-scrollbar  flex w-screen justify-center overflow-hidden">
      <div className="hidden-scrollbar container flex h-screen flex-col items-center overflow-scroll rounded-3xl bg-white pt-4 drop-shadow-md md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <div className=" container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
          {chartData && (
            <AreaChart
              className="h-72 px-5 py-10"
              data={chartData}
              index={"date"}
              categories={[""]}
              colors={["indigo"]}
              valueFormatter={timeFormatter}
              showLegend={false}
              showTooltip={true}
              yAxisWidth={80}
            ></AreaChart>
          )}
        </div>
      </div>
    </div>
  );
};
