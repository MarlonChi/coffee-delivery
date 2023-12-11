import { Meta, StoryObj } from "@storybook/react";
import Heading from ".";
import { HeadingProps } from "./types";

export default {
  title: "components/Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string",
    },
  },
} as Meta;

export const Default: StoryObj<HeadingProps> = {};
Default.args = {
  children: "Nossos cafés",
  size: "large",
};
