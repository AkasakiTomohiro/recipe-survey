import React from 'react';
import { Button } from '@nextui-org/react';

interface NextUiProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  isLoading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NextUi = ({
  ...props
}: NextUiProps) => {
  return (
    <Button color={props.primary ? 'primary' : 'secondary'} isLoading={props.isLoading ? props.isLoading : false}>
      {props.label}
    </Button>
  );
};
