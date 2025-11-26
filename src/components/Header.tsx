import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-center p-2 border-b-2 border-black">
      <Link to={"/"} className="italic font-semibold">
        TOEIC VOCA
      </Link>
    </header>
  );
}
