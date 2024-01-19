import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={zlogo} alt="logo"></Image>
      </div>
      <div className={styles.right}>
        <h2>지금 일어나고 있는 일</h2>
        <Link href="/i/flow/signup">계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login">로그인 </Link>
      </div>
    </div>
  );
}