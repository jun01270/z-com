import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";

export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>애프터 로그인 레이아웃{children}</div>
  );
}
