export type StudyLog = {
  id: string;
  title: string;
  author: {
    id: string;
    photoUrl: string;
    username: string;
  };
  createdAt: string;
  detail: string;
  hour: string;
  minute: string;
  time: number;
};
