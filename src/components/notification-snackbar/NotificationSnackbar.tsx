import React from 'react';
import { message } from '..';
import { IconCheckmark, IconError, IconStarOutlined, IconWarning } from '../..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { SIcon } from './styles/SIcon';
import { SIconError } from './styles/SIconError';
import { SIconSuccess } from './styles/SIconSuccess';
import { SNotificationSnackbar } from './styles/SNotificationSnackbar';
import { SNotificationSnackbarAction } from './styles/SNotificationSnackbarAction';
import { SNotificationSnackbarLabel } from './styles/SNotificationSnackbarLabel';

export interface INotificationSnackbarProps {
  icon?: React.ReactNode;
  action?: String | undefined;
  content?: String | undefined;
  success?: boolean;
  error?: boolean;
}

export const NotificationSnackbar: React.FC<INotificationSnackbarProps> = ({ ...props }) => {
  console.log(`NotificationSnackbar props: `, props);
  return (
    <SNotificationSnackbar {...props}>
      <SFlex>
        <SIcon {...props}>
          {props.icon}
        </SIcon>
        <SIconSuccess {...props}>
          <IconCheckmark></IconCheckmark>
        </SIconSuccess>
        <SIconError {...props}>
          <IconWarning></IconWarning>
        </SIconError>
        <SNotificationSnackbarLabel>{props.content}</SNotificationSnackbarLabel>
      </SFlex>
      <SNotificationSnackbarAction>{props.action}</SNotificationSnackbarAction>
    </SNotificationSnackbar>
  )
}
