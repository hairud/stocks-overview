import * as S from './styled';

interface ChartWrapProps {
  size: 'small' | 'large';
  children: React.ReactNode;
  hover?: boolean;
}

const ChartWrap = ({ size, children, hover }: ChartWrapProps) => (
  <S.ChartWrap hover={hover} size={size}>
    {children}
  </S.ChartWrap>
);

export { ChartWrap };
