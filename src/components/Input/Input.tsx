import * as S from './styled';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = (props: InputProps) => <S.Input {...props} />;

export { Input };
