import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import {
  IconDuplicate,
  IconCopy,
  IconPublish,
  IconUnpublish,
  IconArchive,
  IconDelete,
  IconBookmark,
  IconPublishDocuments,
  IconScheduleNewRelease,
  IconAddToRelease,
  IconEye,
  IconEyeHidden,
  IconSortDecending,
  IconSortAscending,
  IconMoveFolder,
  IconEdit,
  IconUndo,
  IconRedo,
  IconMessageBubbleChat,
  IconLink,
  IconUnlink,
  IconOpenSidebarMenu,
  IconDocumentVersionsClock,
  IconLinkDocument,
  IconFilterSettings,
  IconGearSettings,
  IconSmileEmojiSelector,
  IconQuestionCircle,
  IconExternalLink,
  IconExpand,
  IconRefresh,
  IconMaximizeFullScreenMode,
  IconMinimizeFullScreenMode,
  IconExternalWindowMode,
  IconMinimizePictureMode,
  IconDownloadArrow,
  IconColorPalette,
  IconCode,
  IconLocationPin,
  IconAnimalsDog,
  IconFoodApples,
  IconSportBasketball,
  IconPlane,
  IconLightBulb,
  IconHeartLike,
  IconFlag,
  IconTemplateViewSwitch,
  IconTemplateLayout,
  IconGridViewSwitch,
  IconListViewSwitch,
  IconCreateSectionSeparate,
  IconColorPicker,
  IconToggleHeaderRowColumn,
  IconAlignLeft,
  IconAlignRight,
  IconAlignCenter,
  IconJustifyFullWidth,
  IconMagicWand,
  IconPlayCircle,
  IconGridAssign,
  IconFolderAdd,
  IconBriefcase,
  IconSwitchArrows,
  IconUploadArrow,
  IconBrowserWeb,
  IconCollapse 
} from './index';

const IconWrapper: any = styled.div`
  color: var(--icon-01);
`

const icons = {
  IconDuplicate: ({size}) => <IconDuplicate size={size}/>,
  IconCopy: ({size}) => <IconCopy size={size}/>,
  IconPublish: ({size}) => <IconPublish size={size}/>,
  IconUnpublish: ({size}) => <IconUnpublish size={size}/>,
  IconArchive: ({size}) => <IconArchive size={size}/>,
  IconDelete: ({size}) => <IconDelete size={size}/>,
  IconBookmark: ({size, solid }) => <IconBookmark size={size} solid={solid}/>,
  IconPublishDocuments: ({size}) => <IconPublishDocuments size={size}/>,
  IconScheduleNewRelease: ({size}) => <IconScheduleNewRelease size={size}/>,
  IconAddToRelease: ({size}) => <IconAddToRelease size={size}/>,
  IconEye: ({size}) => <IconEye size={size}/>,
  IconEyeHidden: ({size}) => <IconEyeHidden size={size}/>,
  IconSortDecending: ({size}) => <IconSortDecending size={size}/>,
  IconSortAscending: ({size}) => <IconSortAscending size={size}/>,
  IconMoveFolder: ({size}) => <IconMoveFolder size={size}/>,
  IconEdit: ({size}) => <IconEdit size={size}/>,
  IconUndo: ({size}) => <IconUndo size={size}/>,
  IconRedo: ({size}) => <IconRedo size={size}/>,
  IconMessageBubbleChat: ({size, solid }) => <IconMessageBubbleChat size={size} solid={solid}/>,
  IconLink: ({size}) => <IconLink size={size}/>,
  IconUnlink: ({size}) => <IconUnlink size={size}/>,
  IconOpenSidebarMenu: ({size}) => <IconOpenSidebarMenu size={size}/>,
  IconDocumentVersionsClock: ({size}) => <IconDocumentVersionsClock size={size}/>,
  IconLinkDocument: ({size}) => <IconLinkDocument size={size}/>,
  IconFilterSettings: ({size}) => <IconFilterSettings size={size}/>,
  IconGearSettings: ({size}) => <IconGearSettings size={size}/>,
  IconSmileEmojiSelector: ({size}) => <IconSmileEmojiSelector size={size}/>,
  IconQuestionCircle: ({size}) => <IconQuestionCircle size={size}/>,
  IconExternalLink: ({size}) => <IconExternalLink size={size}/>,
  IconExpand: ({size}) => <IconExpand size={size}/>,
  IconRefresh: ({size}) => <IconRefresh size={size}/>,
  IconMaximizeFullScreenMode: ({size}) => <IconMaximizeFullScreenMode size={size}/>,
  IconMinimizeFullScreenMode: ({size}) => <IconMinimizeFullScreenMode size={size}/>,
  IconExternalWindowMode: ({size}) => <IconExternalWindowMode size={size}/>,
  IconMinimizePictureMode: ({size}) => <IconMinimizePictureMode size={size}/>,
  IconDownloadArrow: ({size}) => <IconDownloadArrow size={size}/>,
  IconColorPalette: ({size}) => <IconColorPalette size={size}/>,
  IconCode: ({size}) => <IconCode size={size}/>,
  IconLocationPin: ({size}) => <IconLocationPin size={size}/>,
  IconAnimalsDog: ({size}) => <IconAnimalsDog size={size}/>,
  IconFoodApples: ({size}) => <IconFoodApples size={size}/>,
  IconSportBasketball: ({size}) => <IconSportBasketball size={size}/>,
  IconPlane: ({size}) => <IconPlane size={size}/>,
  IconLightBulb: ({size}) => <IconLightBulb size={size}/>,
  IconHeartLike: ({size}) => <IconHeartLike size={size}/>,
  IconFlag: ({size}) => <IconFlag size={size}/>,
  IconTemplateViewSwitch: ({size}) => <IconTemplateViewSwitch size={size}/>,
  IconTemplateLayout: ({size}) => <IconTemplateLayout size={size}/>,
  IconGridViewSwitch: ({size}) => <IconGridViewSwitch size={size}/>,
  IconListViewSwitch: ({size}) => <IconListViewSwitch size={size}/>,
  IconCreateSectionSeparate: ({size}) => <IconCreateSectionSeparate size={size}/>,
  IconColorPicker: ({size}) => <IconColorPicker size={size}/>,
  IconToggleHeaderRowColumn: ({size}) => <IconToggleHeaderRowColumn size={size}/>,
  IconAlignLeft: ({size}) => <IconAlignLeft size={size}/>,
  IconAlignRight: ({size}) => <IconAlignRight size={size}/>,
  IconAlignCenter: ({size}) => <IconAlignCenter size={size}/>,
  IconJustifyFullWidth: ({size}) => <IconJustifyFullWidth size={size}/>,
  IconMagicWand: ({size}) => <IconMagicWand size={size}/>,
  IconPlayCircle: ({size}) => <IconPlayCircle size={size}/>,
  IconGridAssign: ({size}) => <IconGridAssign size={size}/>,
  IconFolderAdd: ({size}) => <IconFolderAdd size={size}/>,
  IconBriefcase: ({size}) => <IconBriefcase size={size}/>,
  IconSwitchArrows: ({size}) => <IconSwitchArrows size={size}/>,
  IconUploadArrow: ({size}) => <IconUploadArrow size={size}/>,
  IconBrowserWeb: ({size}) => <IconBrowserWeb size={size}/>,
  IconCollapse: ({size}) => <IconCollapse size={size}/>,
};

interface IActionIconsDemo {
  size?: 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 28;
  icon?: string;
  solid?: boolean;
}

const ActionIconsDemo: FC<IActionIconsDemo> =  ({ ...args }) => {
  const Icon = icons[args.icon]
  return (
    <IconWrapper>
      <Icon size={args.size} solid={args.solid}/>
    </IconWrapper>
  );
};

export default {
  title: "Icons/Action/Icon",
  component: ActionIconsDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the icon",
      options: [12, 16, 20, 24, 32],
      control: { type: 'select' }
    },
    icon: {
      name: "icon",
      description: "Icon name",
      options: ["IconDuplicate", "IconCopy", "IconPublish", "IconUnpublish", "IconArchive", "IconDelete", "IconBookmark", "IconPublishDocuments", "IconScheduleNewRelease", "IconAddToRelease",
      "IconEye", "IconEyeHidden", "IconSortDecending", "IconSortAscending", "IconMoveFolder", "IconEdit", "IconUndo", "IconRedo", "IconMessageBubbleChat", "IconLink", "IconUnlink", "IconOpenSidebarMenu",
      "IconDocumentVersionsClock", "IconLinkDocument", "IconFilterSettings", "IconGearSettings", "IconSmileEmojiSelector", "IconQuestionCircle", "IconExternalLink", "IconExpand", "IconRefresh", "IconMaximizeFullScreenMode", 
      "IconMinimizeFullScreenMode", "IconExternalWindowMode", "IconMinimizePictureMode", "IconDownloadArrow", "IconColorPalette", "IconCode", "IconLocationPin", "IconAnimalsDog", "IconFoodApples", "IconSportBasketball",
      "IconPlane", "IconLightBulb", "IconHeartLike", "IconFlag", "IconTemplateViewSwitch", "IconTemplateLayout", "IconGridViewSwitch", "IconListViewSwitch", "IconCreateSectionSeparate", "IconColorPicker", "IconToggleHeaderRowColumn",
      "IconAlignLeft", "IconAlignRight", "IconAlignCenter", "IconJustifyFullWidth", "IconMagicWand", "IconPlayCircle", "IconGridAssign", "IconFolderAdd", "IconBriefcase", "IconSwitchArrows", "IconUploadArrow", "IconBrowserWeb",
      "IconCollapse"],
      control: { type: 'select' },
      defaultValue: 'IconDuplicate'
    },
    solid: {
      name: "solid",
      description: "Solid icon",
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean'}
    }
  },
} as ComponentMeta<typeof ActionIconsDemo>;

const Template:  ComponentStory<typeof ActionIconsDemo>= (args) => <ActionIconsDemo  {...args} />;

export const ActionIcons = Template.bind({});
ActionIcons.args = {
};