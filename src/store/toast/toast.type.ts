import { ToastActionElement, ToastProps } from "@/components/ui/toast";

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export interface IToastState {
  isOpen: boolean;
  toast?: Omit<ToasterToast, "id">;
  view?: "SuccessModal" | "WarningModal" | "ErrorModal";
  setOpen: (view: IToastState["view"], toast: ToasterToast) => void;
}
