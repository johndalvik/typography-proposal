import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

type Alignment = 'start' | 'center' | 'end' | 'justify';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type Color = 'success' | 'critical' | 'warning' | 'subdued' | 'text-inverse';

export interface TextProps {
  /** Adjust horizontal alignment of text */
  alignment?: Alignment;
  /** The element type */
  as?: ReactElement;
  /** Prevent text from overflowing */
  breakWord?: boolean;
  /** Text to display */
  children: ReactNode;
  /** Adjust color of text */
  color?: Color;
  /** Adjust weight of text */
  fontWeight?: FontWeight;
  /** HTML id attribute */
  id?: string;
  /** Truncate text overflow with ellipsis */
  truncate?: boolean;
  /** Typographic style of text */
  variant?: string;
  /** Visually hide the text */
  visuallyHidden?: boolean;
}

export const Text = ({
  alignment,
  as,
  breakWord,
  children,
  color,
  fontWeight,
  id,
  truncate = false,
  variant,
  visuallyHidden = false,
}: TextProps) => {
  const Component = as || 'p';

  const className = classNames(
    styles.root,
    variant && styles[variant],
    fontWeight && styles[fontWeight],
    (alignment || truncate) && styles.block,
    alignment && styles[alignment],
    breakWord && styles.break,
    color && styles[color],
    truncate && styles.truncate,
    visuallyHidden && styles.visuallyHidden
  );

  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
};
