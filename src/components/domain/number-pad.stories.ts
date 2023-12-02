import type { Meta, StoryObj } from "@storybook/react";
import { NumberPads } from "./number-pad";

const meta = {
  title: "Domain/NumberPads",
  component: NumberPads,
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof NumberPads>;

export default meta;
type Story = StoryObj<typeof NumberPads>;

export const Default: Story = {
  args: {
    onClick: (_number: number) => {},
  },
};
