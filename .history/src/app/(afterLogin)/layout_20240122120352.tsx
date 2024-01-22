import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
s;

export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="{style.leftSectionWrapper}"></header>
      <div className={style.container}>애프터 로그인 레이아웃{children}</div>
    </>
  );
}
