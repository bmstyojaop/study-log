import type { User } from "@firebase/auth";
import { AreaChart, Card, Title } from "@tremor/react";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type MyPageProps = {
  user: User | null;
};
const testdata = null;

const chartdata = [
  {
    date: "1",
    "": 90,
  },
  {
    date: "2",
    "": testdata === null || undefined ? 0 : testdata,
  },
  {
    date: "3",
    "": 3322,
  },
  {
    date: "4",
    "": 9000,
  },
  {
    date: "5",
    "": 3475,
  },
  {
    date: "6",
    "": 3129,
  },
  {
    date: "1",
    "": 90,
  },
  {
    date: "2",
    "": testdata === null || undefined ? 0 : testdata,
  },
  {
    date: "3",
    "": 3322,
  },
  {
    date: "4",
    "": 9000,
  },
  {
    date: "5",
    "": 3475,
  },
  {
    date: "6",
    "": 3129,
  },
  {
    date: "1",
    "": 90,
  },
  {
    date: "2",
    "": testdata === null || undefined ? 0 : testdata,
  },
  {
    date: "3",
    "": 3322,
  },
  {
    date: "4",
    "": 9000,
  },
  {
    date: "5",
    "": 3475,
  },
  {
    date: "6",
    "": 3129,
  },
  {
    date: "1",
    "": 90,
  },
  {
    date: "2",
    "": testdata === null || undefined ? 0 : testdata,
  },
  {
    date: "3",
    "": 3322,
  },
  {
    date: "4",
    "": 9000,
  },
  {
    date: "5",
    "": 3475,
  },
  {
    date: "6",
    "": 3129,
  },
];

const timeFormatter = (time: number) => {
  return `${Math.floor(time / 60)}時間${time % 60}分`;
};

export const MyPage: FC<MyPageProps> = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col items-center md:px-10">
      <Card className="max-w-7xl">
        <Title>直近31日間の学習時間</Title>

        <AreaChart
          className="h-72 px-5 py-10"
          data={chartdata}
          index="date"
          categories={[""]}
          colors={["indigo"]}
          valueFormatter={timeFormatter}
          showLegend={false}
          yAxisWidth={80}
        />
      </Card>
    </div>
  );
};
