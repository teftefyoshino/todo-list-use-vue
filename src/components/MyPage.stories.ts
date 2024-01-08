import MyPage from "../components/MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof MyPage> = {
  title: "MyPage",
  component: MyPage,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
