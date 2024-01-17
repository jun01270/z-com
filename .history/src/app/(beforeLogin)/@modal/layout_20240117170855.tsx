import { ReactNode } from "react";
type props = {
  children: ReactNode;
  modal: ReactNode;
}
export default function Layout({
  children,
  modal,
}: ) {
  return <div>{children}</div>;
}
