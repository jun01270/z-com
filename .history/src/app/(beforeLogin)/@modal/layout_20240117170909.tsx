import { ReactNode } from "react";
type props = {
  children: ReactNode;
  modal: ReactNode;
};
export default function Layout({ children, modal }: props) {
  return <div>비포 로그인 레이아웃{children}</div>;
}
