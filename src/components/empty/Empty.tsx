import React from "react";
import { Status } from "../..";
import { SEmpty } from "./styles/SEmpty";
import { SEmptyContent } from "./styles/SEmptyContent";
import { SEmptyDescription } from "./styles/SEmptyDescription";

interface IEmpty {
  description: React.ReactNode;
}

export const Empty: React.FC<IEmpty> = ({ ...props }) => {
  return (
    <SEmpty>
      <SEmptyContent>
        <Status emote="😶">
          <SEmptyDescription>{props.description}</SEmptyDescription>
        </Status>
      </SEmptyContent>
    </SEmpty>
  );
};
