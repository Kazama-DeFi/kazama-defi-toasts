import React from 'react';
import { Default } from '../utils';
import { Theme, TypeOptions } from '../types';

export interface CloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
  type: TypeOptions;
  ariaLabel?: string;
  theme: Theme;
}

export function CloseButton({
  closeToast,
  theme,
  ariaLabel = 'close'
}: CloseButtonProps) {
  return (
    <button
      className={`${Default.CSS_NAMESPACE}__close-button ${Default.CSS_NAMESPACE}__close-button--${theme}`}
      type="button"
      onClick={e => {
        e.stopPropagation();
        closeToast(e);
      }}
      aria-label={ariaLabel}
    >
      <svg aria-hidden="true" viewBox="0 0 14 16">
        <path
          fillRule="evenodd"
          d="m5.5858 3.3358-3.0429-3.0429c-0.39052-0.39052-1.0237-0.39052-1.4142 0l-0.83579 0.83579c-0.39052 0.39052-0.39052 1.0237 0 1.4142l3.0429 3.0429-3.0429 3.0429c-0.39052 0.39052-0.39052 1.0237 0 1.4142l0.83579 0.83579c0.39052 0.39052 1.0237 0.39052 1.4142 0l3.0429-3.0429 3.0429 3.0429c0.39052 0.39052 1.0237 0.39052 1.4142 0l0.83579-0.83579c0.39052-0.39052 0.39052-1.0237 0-1.4142l-3.0429-3.0429 3.0429-3.0429c0.39052-0.39052 0.39052-1.0237 0-1.4142l-0.83579-0.83579c-0.39052-0.39052-1.0237-0.39052-1.4142 0z"
        />
      </svg>
    </button>
  );
}
