import { Text, TextProps } from '../Text/Text';
import styles from './Header.module.scss';

type Variant = 'display-1' | 'display-2' | 'display-3' | 'display-4';

export interface DisplayProps
  extends Omit<TextProps, 'as' | 'size' | 'truncate' | 'visuallyHidden'> {
  /** The element type */
  as?: Variant;
  /** Typographic style of text */
  variant: Variant;
}

export const Display = ({
  alignment,
  as,
  children,
  fontWeight,
  id,
  variant,
}: DisplayProps) => {
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
