import React from "react";
import { SPopconfirm } from "./styles/SPopconfirm";
import { SPopconfirmWrapper } from "./styles/SPopconfirmWrapper";
import { SPopconfirmTitle } from "./styles/SPopconfirmTitle";
import { SPopconfirmButtons } from "./styles/SPopconfirmButtons";
import { SPopconfirmIcon } from "./styles/SPopconfirmIcon";
import { Button, TPlacement, Popover } from "../../";

interface IPopconfirm {
  title: string | JSX.Element;
  disabled?: boolean;
  onConfirm: (() => any) | ((e: any) => any);
  onCancel?: (() => any) | ((e: any) => any);
  placement?: TPlacement | undefined;
  icon?: React.FC;
  okText?: string;
  cancelText?: string;
  wrapperStyle?: React.CSSProperties;
  container?: React.MutableRefObject<null>;
}

export const Popconfirm: React.FC<IPopconfirm> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOk = (e) => {
    props.onConfirm(e);
    setOpen(false);
  };

  const handleClickCancel = (e) => {
    if (props.onCancel) props.onCancel(e);
    setOpen(false);
  };

  const ref = React.useRef(null);

  // console.log(`Popconfirm props: `, props);
  return (
    <>
      <SPopconfirmWrapper style={props.wrapperStyle} ref={ref} onClick={() => setOpen(true)}>
        {props.children}
      </SPopconfirmWrapper>
      {open && !props.disabled && (
        <Popover
          onClickOutside={() => setOpen(false)}
          trianglecolor="var(--white-1)"
          placement={props.placement || "top"}
          reference={ref}
          container={props.container}
        >
          <SPopconfirm onClick={(e) => e.stopPropagation()}>
            <SPopconfirmTitle>
              {props.icon && <SPopconfirmIcon>{props.icon({ ...props })}</SPopconfirmIcon>}
              {props.title}
            </SPopconfirmTitle>
            <SPopconfirmButtons>
              <Button type="link" onClick={(e) => handleClickCancel(e)}>
                {props.cancelText || "Cancel"}
              </Button>
              <Button onClick={(e) => handleClickOk(e)}>{props.okText || "OK"}</Button>
            </SPopconfirmButtons>
          </SPopconfirm>
        </Popover>
      )}
    </>
  );
};
