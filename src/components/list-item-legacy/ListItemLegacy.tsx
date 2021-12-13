import React from "react";
import { SListItem } from "./styles/SListItem";
import { SListItemTitle } from "./styles/SListItemTitle";
import { SListItemDescription } from "./styles/SListItemDescription";
import { SListItemAvatar } from "./styles/SListItemAvatar";
import { SListItemContentWrapper } from "./styles/SListItemContentWrapper";
import { SListItemChildren } from "./styles/SListItemChildren";
import { Divider } from "../divider/Divider";

interface IListItemLegacy {
  title?: React.ReactNode;
  description?: React.ReactNode;
  avatar?: string;
  childrenStyle?: React.CSSProperties;
}

export const ListItemLegacy: React.FC<IListItemLegacy> = ({ ...props }) => {
  return (
    <div>
      <SListItem>
        {props.avatar ? <SListItemAvatar src={props.avatar} /> : null}
        <SListItemContentWrapper>
          <SListItemTitle>{props.title}</SListItemTitle>
          <SListItemDescription>{props.description}</SListItemDescription>
        </SListItemContentWrapper>
        <SListItemChildren style={props.childrenStyle}>{props.children}</SListItemChildren>
      </SListItem>
      <Divider marginTop={8} marginBottom={8} />
    </div>
  );
};