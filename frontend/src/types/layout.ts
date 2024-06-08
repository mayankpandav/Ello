import { ComponentType, ReactNode } from "react";

export interface HeaderI {
  children: ReactNode;
}

export interface SidebarmenuI{
  key:string;
  title:string;
  icon:ComponentType;
  path:string
}
