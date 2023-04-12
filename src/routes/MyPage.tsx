import type { User } from "@firebase/auth";
import { AreaChart, Metric } from "@tremor/react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";

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
  date: Date;
  time: number;
};

const timeFormatter = (time: number) => {
  return `${Math.floor(time / 60)}時間${time % 60}分`;
};

export const MyPage: FC<MyPageProps> = ({ user }) => {
  const [chartData, setChartData] = useState<Log[] | null>();
  const studylogRef = collection(db, "studylog");

  const getLatestDate = async (): Promise<Date> => {
    const latestData = await getDocs(
      query(
        studylogRef,
        where("author.id", "==", user?.uid),
        orderBy("createdAt", "desc"),
        limit(1)
      )
    );
    const latestDate: Date = await latestData.docs[0].data().createdAt.toDate();
    return latestDate;
  };

  const findThirtyDaysAgo = (date: Date): Date => {
    const thirtyDaysAgo: Date = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);
    thirtyDaysAgo.setHours(0, 0, 0, 0);
    return thirtyDaysAgo;
  };

  const dateFormatter = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  useEffect(() => {
    const getMyLogs = async () => {
      // // 一番最新のデータの日付
      const latestDate: Date = await getLatestDate();
      const thirtyDaysAgo: Date = findThirtyDaysAgo(latestDate);
      const data = await getDocs(
        query(
          studylogRef,
          where("author.id", "==", user?.uid),
          where("createdAt", ">=", new Date(thirtyDaysAgo)),
          orderBy("createdAt", "desc")
        )
      );

      const result = data.docs
        // 日付と時間を取得
        .map((doc) => ({
          // 0時0分0秒にする
          date: new Date(doc.data().createdAt.toDate().setHours(0, 0, 0, 0)),
          time: doc.data().time,
        }))
        .reduce((acc: Result[], cur: Result) => {
          const target = acc.find((item) => item.date.getTime() === cur.date.getTime());
          if (target) {
            target.time += cur.time;
          } else {
            acc.push(cur);
          }
          return acc;
        }, []);

      const addMissingData = (result: Result[]) => {
        // 対象日のデータがない場合は、timeが0のデータを追加
        for (let i = 0; i < 30; i++) {
          const targetDate = new Date(thirtyDaysAgo.getTime() + i * 24 * 60 * 60 * 1000);
          const target = result.find((item) => item.date === targetDate);
          if (!target) {
            result.push({
              date: targetDate,
              time: 0,
            });
          }
        }

        result.sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          } else {
            return 1;
          }
        });

        setChartData(
          result.map((doc) => ({
            date: `${dateFormatter(doc.date)}`,
            "": doc.time,
          }))
        );
      };
      addMissingData(result);
    };
    getMyLogs();
    console.log("useEffect/MyPage");
  }, [user]);

  if (!user) {
    return <div>マイページを確認するためにはログインが必要です。</div>;
  }
  return (
    <div className="hidden-scrollbar  flex w-screen justify-center overflow-hidden">
      <div className="hidden-scrollbar container flex flex-col items-center overflow-scroll rounded-3xl bg-white pt-4 drop-shadow-md md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <div className=" container flex h-80 flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
          <Metric className=" text-gray-600">学習チャート</Metric>
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
