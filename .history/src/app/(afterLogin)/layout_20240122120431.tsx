import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
s;

export default async function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className="{style.leftSectionWrapper}">
        <section className="{style.leftSectionWrapper}"></section>
      </header>
    </div>
  );
}