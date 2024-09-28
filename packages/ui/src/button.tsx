"use client";

import { ReactNode } from "react";
import Button from '@mui/material/Button';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const AppButton = ({ children, className, appName }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={() => alert(`Hy from your ${appName} app!`)}
    >
      {children}
    </Button>
  );
};
