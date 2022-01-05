import React from "react";
import { SimpleInput } from "./SimpleInput";
import { STranslationBadge } from "../styles/STranslationBadge";
import Flag from "../../flag/Flag";

function SimpleInputDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const TranslationBadge = () => {
    return (
      <STranslationBadge>
        <Flag countryCode="de" size={16} />
        DE
      </STranslationBadge>
    );
  };

  return (
    <SimpleInput
      translationBadge={args.withTranslationBadge && <TranslationBadge />}
      required
      onChange={onChange}
      value={value}
      disabled={args.state === "locked"}
      {...args}
    />
  );
}

export default {
  title: "Components/Forms/SimpleInput",
  component: SimpleInputDemo,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["error", "success", "default", "locked"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

const Template = ({ ...args }) => <SimpleInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "This is a label",
  errors: ["This is an error message", "This is another error message"],
  placeholder: "This is a placeholder",
  state: "error",
  required: true,
  withTranslationBadge: false,
};
