import { userEvent, within } from "@storybook/testing-library";
import SignUpForm from "../components/SignUpForm.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof SignUpForm> = {
  title: "SignUpForm",
  component: SignUpForm,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const Complete: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      const nameInput = canvas.getByLabelText("Name", { selector: "input" });
      const ageInput = canvas.getByLabelText("Age", { selector: "input" });
      const submitButton = canvas.getByRole("button", { name: "確定" });

      await userEvent.type(nameInput, "sasaki");
      await userEvent.clear(ageInput);
      await userEvent.type(ageInput, "30");
      await userEvent.click(submitButton);
    },
  };

  export const Error: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      const ageInput = canvas.getByLabelText("Age", { selector: "input" });
      const submitButton = canvas.getByRole("button", { name: "確定" });

      await userEvent.clear(ageInput);
      await userEvent.type(ageInput, "17");
      await userEvent.click(submitButton);
    },
  };
