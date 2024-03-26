"use client";

import DialogUI from "@/components/Dialog";
import { Toaster } from "@/components/Toaster";

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <>
      {children}
      <DialogUI />
      <Toaster />
    </>
  );
};

export default UIProvider;
