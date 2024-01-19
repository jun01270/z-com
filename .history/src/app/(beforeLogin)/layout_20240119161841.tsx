import { ReactNode } from "react";
import Main from "@/app/(beforeLogin)/_component/Main";

type props = {
  children: ReactNode;
  modal: ReactNode;
};
export default function Layout({ children, modal }: props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
