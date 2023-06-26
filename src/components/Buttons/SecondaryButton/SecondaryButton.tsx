import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { BaseButtonProps, StyledBaseButton } from 'components/Buttons/BaseButton';

export type SecondaryButtonSizes = 'sm' | 'md';
export type SecondaryButtonAppearances = 'default' | 'danger' | 'info';

export type SecondaryButtonProps = BaseButtonProps & {
  size?: SecondaryButtonSizes;
  appearance?: SecondaryButtonAppearances;
};

export const StyledSecondaryButton = styled(StyledBaseButton)(({ appearance, size }: SecondaryButtonProps) => ({
  lineHeight: '20px',
  fontSize: `var(--control-${size}-text)`,
  fontWeight: 'var(--base-text-weight-medium, 500)',
  minHeight: `var(--control-${size}-height)`,
  padding: `var(--control-${size}-padding)`,
  borderRadius: `var(--control-${size}-radius)`,

  color: `var(--control-secondary-${appearance}-text)`,
  backgroundColor: `var(--control-secondary-${appearance}-bg)`,
  borderColor: `var(--control-secondary-${appearance}-border)`,
  boxShadow: `var(--control-secondary-${appearance}-shadow)`,

  transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
  transitionProperty: 'color, background-color, box-shadow, border-color',

  '&:hover:not(:focus):enabled': {
    color: `var(--control-secondary-${appearance}-text-hover)`,
    backgroundColor: `var(--control-secondary-${appearance}-bg-hover)`,
    borderColor: `var(--control-secondary-${appearance}-border-hover)`,
  },

  '&:active:not(:disabled)': {
    color: `var(--control-secondary-${appearance}-text-selected)`,
    backgroundColor: `var(--control-secondary-${appearance}-bg-selected)`,
    borderColor: `var(--control-secondary-${appearance}-border-selected)`,
    boxShadow: `var(--control-secondary-${appearance}-shadow-selected)`,
  },

  '&:disabled': {
    backgroundColor: '#C8D6E5',
  },
}));

export const SecondaryButton = ({
  size = 'md',
  appearance = 'default',
  renderLeading,
  renderTrailing,
  children,
  ...props
}: SecondaryButtonProps): ReactElement => (
  <StyledSecondaryButton
    {...props}
    size={size}
    appearance={appearance}
    renderLeading={renderLeading ? <span>{renderLeading}</span> : null}
    renderTrailing={renderTrailing ? <span>{renderTrailing}</span> : null}
  >
    {children}
  </StyledSecondaryButton>
);

SecondaryButton.displayName = 'SecondaryButton';
