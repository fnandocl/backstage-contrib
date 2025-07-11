/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { forwardRef } from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip';
import clsx from 'clsx';
import { useStyles } from '../../hooks/useStyles';

const TooltipTrigger = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { classNames } = useStyles('Tooltip');

  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      className={clsx(classNames.trigger, className)}
      {...props}
    />
  );
});
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipPositioner = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Positioner>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>
>(({ className, ...props }, ref) => {
  const { classNames } = useStyles('Tooltip');

  return (
    <TooltipPrimitive.Positioner
      ref={ref}
      className={clsx(classNames.positioner, className)}
      {...props}
    />
  );
});
TooltipPositioner.displayName = TooltipPrimitive.Positioner.displayName;

const TooltipPopup = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup>
>(({ className, ...props }, ref) => {
  const { classNames } = useStyles('Tooltip');

  return (
    <TooltipPrimitive.Popup
      ref={ref}
      className={clsx(classNames.popup, className)}
      {...props}
    />
  );
});
TooltipPopup.displayName = TooltipPrimitive.Popup.displayName;

const TooltipArrow = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => {
  const { classNames } = useStyles('Tooltip');

  return (
    <TooltipPrimitive.Arrow
      ref={ref}
      className={clsx(classNames.arrow, className)}
      {...props}
    >
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <path
          d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
          className="canon-TooltipArrow-fill"
        />
        <path
          d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
          className="canon-TooltipArrow-outer-stroke"
        />
        <path
          d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
          className="canon-TooltipArrow-inner-stroke"
        />
      </svg>
    </TooltipPrimitive.Arrow>
  );
});
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

/** @public */
export const Tooltip = {
  Provider: TooltipPrimitive.Provider,
  Root: TooltipPrimitive.Root,
  Trigger: TooltipTrigger,
  Portal: TooltipPrimitive.Portal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
};
