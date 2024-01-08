import MyHeader from "../components/MyHeader.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof MyHeader> = {
    title: "MyHeader",
    component: MyHeader,
    argTypes: {
        isLoggedIn: {
            control: 'boolean',
        },
        onLogin: { action: "onLogin" },
        onLogout: { action: "onLogout" },
        onSignUp: { action: "onSignUp" },
      },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Login: Story = {
  args: {
    isLoggedIn: true,
  },
};

export const Logout: Story = {
  args: {
    isLoggedIn: false,
  },
};
