import React from "react";
import { NotificationSnackbar } from "../notification-snackbar/NotificationSnackbar";
import { IMessageConfig } from "./types";
import { toast } from "sonner";

export enum EMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
}

// I created the Message and MessageWrapper components in this file,
// because we don't use it anywhere else,
// and we don't want to accidentally import "Message" instead of "message" on our app

export interface IMessage {
  type?: string;
  content: string;
  id: number;
  icon?: React.ReactNode;
  actionClick?: () => void;
}

const Message: React.FC<IMessage> = (msgConfig: IMessage) => {
  // const [exit, setExit] = useState(false);

  // const handleCloseMessage = () => {
  //   setExit(true);
  //   setTimeout(() => {
  //     msgContainer?.remove();
  //   }, 350);
  // };

  return (
    <NotificationSnackbar
      content={msgConfig.content}
      success={msgConfig.type == "success"}
      error={msgConfig.type == "error"}
      icon={msgConfig.icon}
      action={msgConfig.actionClick}
    ></NotificationSnackbar>
  );
};

interface IMessageDispatcher {
  success?: (payload: IMessage) => void;
  error?: (payload: IMessage) => void;
  info?: (payload: IMessage) => void;
}

// COMPONENT TO IMPORT IN OUR APP
export function message(): React.FC<IMessageDispatcher> | void {}

const renderMessage = (children: any, config?: any, type?: EMessageType) => {
  const duration = config?.duration ? config.duration : 3000;

  const icon = config?.icon;

  const action = config?.action;

  const msgConfig = {
    type,
    content: children,
    id: Date.now(),
    icon,
    action,
  };

  return toast.custom((t) => {
    setTimeout(() => {
      toast.dismiss(t);
    }, duration);

    return <Message {...msgConfig} />;
  });

 
};

message.success = function MessageSuccess(children: any, config?: IMessageConfig) {
  renderMessage(children, config, EMessageType.Success);
};

message.error = function MessageError(children: any, config?: IMessageConfig) {
  renderMessage(children, config, EMessageType.Error);
};

message.info = function MessageInfo(children: any, config?: IMessageConfig) {
  renderMessage(children, config, EMessageType.Info);
};
