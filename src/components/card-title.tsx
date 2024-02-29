import { ReactNode } from "react";
export default function CardTitle({ children }: { children: ReactNode }) {
  return <div className="font-helvetica_bold font-bold">{children}</div>;
}
