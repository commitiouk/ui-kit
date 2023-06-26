import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { BaseButtonProps, StyledBaseButton } from 'components/Buttons/BaseButton';

export type PrimaryButtonSizes = 'sm' | 'md';
export type PrimaryButtonAppearances = 'default' | 'danger';

export type PrimaryButtonProps = BaseButtonProps & {
  size?: PrimaryButtonSizes;
  appearance?: PrimaryButtonAppearances;
};

export const StyledPrimaryButton = styled(StyledBaseButton)(({ appearance, size }: PrimaryButtonProps) => ({
  lineHeight: '20px',
  fontSize: `var(--control-${size}-text)`,
  fontWeight: 'var(--base-text-weight-medium, 500)',
  minHeight: `var(--control-${size}-height)`,
  padding: `var(--control-${size}-padding)`,
  borderRadius: `var(--control-${size}-radius)`,

  color: `var(--control-primary-${appearance}-text)`,
  backgroundColor: `var(--control-primary-${appearance}-bg)`,
  borderColor: `var(--control-primary-${appearance}-border)`,
  boxShadow: `var(--control-primary-${appearance}-shadow), var(--control-primary-${appearance}-shadow-inset)`,

  transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
  transitionProperty: 'color, background-color, box-shadow, border-color',

  '&:hover:not(:focus):enabled': {
    backgroundColor: `var(--control-primary-${appearance}-bg-hover)`,
    borderColor: `var(--control-primary-${appearance}-border-hover)`,
  },

  '&:active:not(:disabled)': {
    backgroundColor: `var(--control-primary-${appearance}-bg-selected)`,
    boxShadow: `var(--control-primary-${appearance}-shadow-selected)`,
  },

  '&:disabled': {
    backgroundColor: '#C8D6E5',
  },
}));

export const PrimaryButton = ({
  size = 'md',
  appearance = 'default',
  renderLeading,
  renderTrailing,
  children,
  ...props
}: PrimaryButtonProps): ReactElement => (
  <StyledPrimaryButton
    {...props}
    size={size}
    appearance={appearance}
    renderLeading={renderLeading ? <span>{renderLeading}</span> : null}
    renderTrailing={renderTrailing ? <span>{renderTrailing}</span> : null}
  >
    {children}
  </StyledPrimaryButton>
);

PrimaryButton.displayName = 'PrimaryButton';
