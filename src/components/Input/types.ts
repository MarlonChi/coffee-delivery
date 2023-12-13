import { InputHTMLAttributes } from "react";

export type InputProps = {
  name: string;
  type: "text" | "number" | "email";
  fullWidth?: boolean;
  small?: boolean;
  disabled?: boolean;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;
