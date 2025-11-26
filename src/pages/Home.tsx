import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <h1>TOEIC VOCA practice</h1>
        <p>OOO님, 안녕하세요.</p>
        <section>
          <Link to={"/quiz"}>TOEIC 퀴즈 풀기</Link>
          <Link to={"/"}>틀린 단어 모아보기</Link>
        </section>
        <section>
          <p>월 별 진행도</p>
          {/* 여기에 캘린더 */}
        </section>
      </main>
    </>
  );
}
