export interface IModalState {
  isOpen: boolean;
  view?: "SuccessModal" | "WarningModal" | "ErrorModal";

  close: () => void;
  setOpen: (view: IModalState["view"]) => void;
}
