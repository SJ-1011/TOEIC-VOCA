import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";

export default function Home() {
  return (
    <>
      <main className="bg-purple-600">
        <section className="p-8">
          <h1 className="font-bold text-white text-2xl">TOEIC VOCA Practice</h1>
          <p className="text-white text-lg">OOO님, 안녕하세요.</p>
        </section>
        <section className="bg-white rounded-t-4xl p-8">
          <section className="flex flex-col flex-nowrap gap-3 mt-4 mb-8">
            <h2 className="text-lg">TOEIC VOCA QUIZ</h2>
            <Link
              to={"/quiz"}
              className="p-6 text-center bg-green-200 rounded-3xl"
            >
              TOEIC 퀴즈 풀기
            </Link>
            <Link
              to={"/"}
              className="p-6 text-center border-3 border-green-200 rounded-3xl"
            >
              틀린 단어 모아보기
            </Link>
          </section>
          <section>
            <h2 className="text-lg">월 별 진행도</h2>
            <Calendar></Calendar>
          </section>
        </section>
      </main>
    </>
  );
}
