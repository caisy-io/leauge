import React from "react";
import { SBadge } from "./styles/SBadge";
import { SBadgeIconContent } from "./styles/SBadgeIconContent";
import { SBadgeIcon } from "./styles/SBadgeIcon";
import { BadgePosition } from "./BadgePosition";
export { BadgePosition } from "./BadgePosition";

interface IBadge {
  value: string;
  position: BadgePosition;
  disabled?: boolean;
}

export const Badge: React.FC<IBadge> = ({ ...props }) => {
  const badgeRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  const resizeInput = () => {
    if (badgeRef.current) {
      badgeRef.current.innerText = props.value;

      let width = badgeRef.current.scrollWidth;

      setHeight(width + 1);
    }
  };

  React.useEffect(() => {
    resizeInput();
  }, [props.value]);

  return (
    <SBadge>
      <SBadgeIcon disabled={props.disabled} position={props.position} height={height}>
        <div ref={badgeRef} style={{ width: "fit-content", visibility: "hidden", position: "absolute", fontSize: 9 }} />
        <SBadgeIconContent>{props.value}</SBadgeIconContent>
      </SBadgeIcon>
      {props.children}
    </SBadge>
  );
};
