import type { StoryObj } from "@storybook/react-vite";
import Color from "./color";
import "@ds/scss/lib/global.css";
import { spacing } from "@ds/foundation/lib";

const meta = {
  title: "Color",
  component: Color,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hexCode: "#ff0000",
    width: spacing.md,
    height: spacing.md,
  },
};
