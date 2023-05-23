import { ReactNode } from 'react';
import { Text } from '../Text/Text';
import styles from './Header.module.scss';

type Alignment = 'start' | 'center' | 'end' | 'justify';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TextProps {
  /** Adjust horizontal alignment of text */
  alignment?: Alignment;
  /** The element type */
  as?: Variant;
  /** Text to display */
  children: ReactNode;
  /** Adjust weight of text */
  fontWeight?: FontWeight;
  /** HTML id attribute */
  id?: string;
  /** Typographic style of text */
  variant: Variant;
}

export const Header = ({
  alignment,
  as,
  children,
  fontWeight,
  id,
  variant,
}: TextProps) => {
  return (
    <Text
      as={as || variant}
      id={id}
      alignment={alignment}
      fontWeight={fontWeight}
      className={styles[variant]}
    >
      {children}
    </Text>
  );
};