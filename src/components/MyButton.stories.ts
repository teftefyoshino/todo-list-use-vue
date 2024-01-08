import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof MyButton> = {
    title: "MyButton",
    component: MyButton,
    argTypes: {
        variant: {
          control: {
            type: "inline-radio",
          },
          options: ["primary", "secondary"],
        },
        size: {
          control: {
            type: "select",
          },
          options: ["small", "medium", "large"],
        },
      },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
    args: {
        label: "ボタン",
        variant: "primary",
        size: "medium",
    },
};

export const Secondary: Story = {
    args: {
        label: "ボタン2",
        variant: "secondary",
        size: "large",
    },
};
