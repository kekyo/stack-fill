/*
  stack-fill - Component stacking and fill remains React MUI layout component.
  https://github.com/kekyo/stack-fill
  Copyright (c) Kouji Matsui (@kekyo@mi.kekyo.net)
  License under Apache-2.0
*/

import { Children, isValidElement, ReactNode, useMemo } from 'react';
import { Box, BoxProps } from '@mui/material';

export interface StackFillerProps {
  /**
   * True if this component filler (default: true)
   */
  isFiller?: boolean;
  /**
   * Childen components
   */
  children?: ReactNode;
}

/**
 * Strict assignment for StackFill filler component.
 */
export const StackFiller = ({ children }: StackFillerProps) => {
  return (<>{children}</>);
}

/**
 * StackFill componennt extended properties.
 */
export interface StackFillProps extends BoxProps {
  /**
   * Stacking direction.
   */
  direction?: 'row' | 'column';
}

/**
 * Component stacking and fill remains React MUI layout component.
 * @description 
 */
const StackFill = ({
  direction = 'column',
  children,
  sx,
  ...props
}: StackFillProps) => {
  const isRow = direction === 'row';
  const [childArray, childSxs] = useMemo(() => {
    const childArray = Children.toArray(children);
    const isFillers = childArray.map(c =>
      isValidElement<StackFillerProps>(c) &&
      c.type === StackFiller &&
      (c.props?.isFiller ?? true));
    if (isFillers.every(f => !f)) {
      isFillers[isFillers.length - 1] = true;
    }
    const childSx0 = {
      flex: '0 0 auto',
      overflowX: isRow ? 'hidden' : 'visible',
      overflowY: isRow ? 'visible' : 'hidden',
      minWidth: 0,
      minHeight: 0,
    };
    const childSx1 = {
      flex: '1 1 0',
      overflowX: 'auto',
      overflowY: 'auto',
      minWidth: 0,
      minHeight: 0,
    };
    const childSxs = isFillers.map(isFiller => isFiller ? childSx1 : childSx0);
    return [childArray, childSxs];
  }, [isRow, children]);

  const containerSx = useMemo(() => [{
    display: 'flex',
    flexDirection: isRow ? 'row' : 'column',
    width: '100%',
    height: '100%',
    minWidth: 0,
    minHeight: 0,
  },
  ...(Array.isArray(sx) ? sx : [sx])],
  [isRow, sx]);

  return (
    <Box {...props} sx={containerSx}>
      {childArray.map((child, index) => (
        <Box key={index} sx={childSxs[index]}>
          {child}
        </Box>))}
    </Box>
  );
};

export default StackFill;
