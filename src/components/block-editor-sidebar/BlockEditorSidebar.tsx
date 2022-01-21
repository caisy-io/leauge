import React from "react";
import { LineTab } from "../line-tab";
import { IconDocuments } from "../../icons";
import { SBlockEditorSidebar } from "./styles/SBlockEditorSidebar";
import { SBlockEditorSidebarListItem } from "./styles/SBlockEditorSidebarListItem";
import { SBlockEditorSidebarStatus } from "./styles/SBlockEditorSidebarStatus";
import { SBlockEditorSidebarStatusBadge } from "./styles/SBlockEditorSidebarStatusBadge";
import { SBlockEditorSidebarTabs } from "./styles/SBlockEditorSidebarTabs";

interface IBlockEditorSidebarTab {
  tab: string;
  component: JSX.Element;
}

interface IBlockEditorSidebar {
  status: string;
  tabs: IBlockEditorSidebarTab[];
  onTabClick: (tab: IBlockEditorSidebarTab) => void;
  selectedTab: IBlockEditorSidebarTab;
}

export const BlockEditorSidebar: React.FC<IBlockEditorSidebar> = ({ status, tabs, onTabClick, selectedTab }) => {
  return (
    <SBlockEditorSidebar>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarStatus>
          <IconDocuments size={16} />
          CURRENT STATUS
          <SBlockEditorSidebarStatusBadge>{status}</SBlockEditorSidebarStatusBadge>
        </SBlockEditorSidebarStatus>
      </SBlockEditorSidebarListItem>
      <SBlockEditorSidebarListItem>
        <SBlockEditorSidebarTabs>
          {tabs.map((tab) => (
            <LineTab activated={selectedTab?.tab === tab.tab} onClick={() => onTabClick(tab)}>
              {tab.tab}
            </LineTab>
          ))}
        </SBlockEditorSidebarTabs>
      </SBlockEditorSidebarListItem>

      {selectedTab?.component}
    </SBlockEditorSidebar>
  );
};