import { ReactNode } from "react";
export default function CardDescription({ children }: { children: ReactNode }) {
  return <div className="text-sm font-helvetica_light">{children}</div>;
}
