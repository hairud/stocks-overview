import * as S from './styled';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

const Button = (props: ButtonProps) => <S.Button {...props} />;

export { Button };
