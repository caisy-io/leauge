import React, { useState } from "react";
import { TranslationMenu } from "../translation-menu/TranslationMenu";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ILanguageFlagToggleListItemLocale } from "../language-flag-toggle-list-item/LanguageFlagToggleListItem";

function TranslationMenuDemo() {
  const [opened, setOpened] = useState<boolean>(false);
  const [locales, setLocales] = useState<ILanguageFlagToggleListItemLocale[]>([
    { id: "de", name: "Deutsch", active: true },
    { id: "es", name: "Spanish", active: true },
    { id: "fr", name: "French", active: false },
    { id: "ru", name: "Russisch", active: true },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: 300 }}>
        <TranslationMenu locales={locales} onLocalesChange={setLocales} opened={opened} onToggleOpened={setOpened} />
      </div>
      <div
        style={{
          width: 300,
          margin: "80px 0",
        }}
      >
        <pre>{JSON.stringify(locales, null, 4)}</pre>
      </div>
    </DndProvider>
  );
}

export default {
  title: "Components/TranslationMenu",
  component: TranslationMenuDemo,
};
const Template = (args) => <TranslationMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};