import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";

export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}></section>
      </header>
      <div className={style.rightSectionWrapper}></div>
      <div className={style.rightSectionInner}></div>
      <main className={style.main}>{children}</main>
      <section className={style.rightSection}></section>
    </div>
  );
}
