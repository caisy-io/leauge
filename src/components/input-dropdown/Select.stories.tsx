import React from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { SimpleInputDropdown } from "./SimpleInputDropdown";

export default {
  title: "Components/Forms/SimpleInputDropdown",
  component: SimpleInputDropdownDemo,
  argTypes: {
    label: {
      description: "Label/ title for the dropdown",
      control: { type: "text" },
    },
    required: {
      description: "Changes the input to required",
      control: { type: "boolean" },
    },
    error: {
      description: "Changes the status to error",
      control: { type: "boolean" },
    },
    translationBadge: {
      description: "Toggles the existence of the translation badge",
      control: { type: "boolean" },
    },
  },
};

const dataSource = [
  {
    key: "title_label",
    title: "Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed!",
  },
  {
    key: "icon_title",
    title: "Title and Icon",
    icon: <IconStarOutlined size={20}></IconStarOutlined>,
  },
  {
    key: "icon_title_label",
    title: "Label, Title and Icon",
    icon: <IconStarOutlined size={20}></IconStarOutlined>,
  },
];

function SimpleInputDropdownDemo({ error, required, translationBadge, label }) {
  const [selectValue, setSelectValue] = React.useState(null);
  return <SimpleInputDropdown
    error={error}
    required={required}
    translationBadge={translationBadge}
    dataSource={dataSource}
    placeholder="Select an option.."
    value={selectValue}
    onSelectValue={(e) => setSelectValue(e)}
    label={label}
  />
}

const Template = (args) => <SimpleInputDropdownDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
  translationBadge: false,
  label: "Default label"
};

export const Required = Template.bind({});
Required.args = {
  error: false,
  required: true,
  translationBadge: false,
  label: "Default label"
};

export const Translation = Template.bind({});
Translation.args = {
  error: false,
  required: false,
  translationBadge: true,
  label: "Default label"
};