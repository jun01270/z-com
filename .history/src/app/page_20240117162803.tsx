import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>지금 일어나고 있는 일</div>
      <Link href="/#">계정 만들기</Link>
      <div>이미 트위터에 가입하셨나요?</div>
      <Link href="">로그인 </Link>
    </main>
  );
}
