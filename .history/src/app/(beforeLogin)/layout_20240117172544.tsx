import { ReactNode } from "react";
import styles from "../page.module.css";

type props = {
  children: ReactNode;
  modal: ReactNode;
};
export default function Layout({ children, modal }: props) {
  return (
    <div className={styles.container}>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}
