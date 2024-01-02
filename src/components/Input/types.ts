import { InputHTMLAttributes } from "react";

export type InputProps = {
  name: string;
  fullWidth?: boolean;
  small?: boolean;
  disabled?: boolean;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;
