import { ReactNode } from "react";

interface IConditionProps {
    condition: boolean;
    children: ReactNode;
}

export function If({ condition, children }: IConditionProps) {
    if(condition) return children;
    return null
}