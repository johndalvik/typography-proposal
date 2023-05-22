import { ReactElement } from 'react';
import styles from './Text.module.scss';
import classNames from 'classnames';

interface TextProps {
  fontSize: string;
  fontStyle: string;
  fontWeight: string;
  children: ReactElement;
}

export const Text = ({
  fontSize,
  fontStyle = 'normal',
  fontWeight = 'normal',
  children,
}: TextProps) => {
  console.log(styles[fontWeight]);

  return (
    <div
      className={classNames(
        styles[fontSize],
        styles[fontWeight],
        styles[fontStyle]
      )}
    >
      {children}
    </div>
  );
};
