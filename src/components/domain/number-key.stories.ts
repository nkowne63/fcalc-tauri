import type { Meta, StoryObj } from "@storybook/react";
import { NumberKey } from "./number-key";

const meta: Meta<typeof NumberKey> = {
  title: "Domain/NumberKey",
  component: NumberKey,
  argTypes: {
    number: { control: "number" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof NumberKey>;

export default meta;
type Story = StoryObj<typeof NumberKey>;

export const Default: Story = {
  args: {
    number: 1,
  },
};
