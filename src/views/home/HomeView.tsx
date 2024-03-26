"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import useModalStore from "@/store/modal/modal.store";
import useToastStore from "@/store/toast/toast.store";
import React from "react";

function HomeView() {
  const { setOpen } = useModalStore();
  const { setOpen: setOpenToast } = useToastStore();
  const { toast } = useToast();

  return (
    <div>
      <Button onClick={() => setOpen("SuccessModal")}>Open modal</Button>
      <Button
        onClick={() =>
          setOpenToast(
            "SuccessModal",
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          )
        }
      >
        Open toast
      </Button>
    </div>
  );
}

export default HomeView;
