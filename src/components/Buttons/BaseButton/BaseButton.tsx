import React, { ReactElement, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  renderLeading?: React.ReactNode | null;
  renderTrailing?: React.ReactNode | null;
  children?: React.ReactNode;
};

export const StyledBaseButton = styled.button(({ disabled }: BaseButtonProps) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  color: '#222',
  minWidth: '65px',
  minHeight: '32px',
  borderRadius: '4px',
  margin: 0,
  padding: '0 4px',
  appearance: 'none',
  userSelect: 'none',
  ...(!disabled && { cursor: 'pointer' }),
  ...(disabled && { cursor: 'not-allowed' }),
}));

export const BaseButton = ({ disabled = false, renderLeading, renderTrailing, children, ...props }: BaseButtonProps): ReactElement => (
  <StyledBaseButton {...props} type="button" disabled={disabled} {...(disabled && { 'aria-disabled': true })}>
    {renderLeading}
    {children}
    {renderTrailing}
  </StyledBaseButton>
);

BaseButton.displayName = 'BaseButton';
