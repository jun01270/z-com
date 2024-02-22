import Image from "next/image";
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Link from "next/link";
import zlogo from "@/../public/zlogo.png";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zlogo} alt="logo"></Image>
      </div>
      <div className={styles.right}>
        <h2>지금 일어나고 있는 일.</h2>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
        <br />
        <Link href="/home" className={styles.signup}>
          피드 둘러보기
        </Link>
      </div>
    </>
  );
}
