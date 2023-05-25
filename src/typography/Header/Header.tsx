import { Text, TextProps } from '../Text/Text';
import styles from './Header.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeaderProps
  extends Omit<TextProps, 'as' | 'size' | 'truncate' | 'visuallyHidden'> {
  /** The element type */
  as?: Variant;
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
}: HeaderProps) => {
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
