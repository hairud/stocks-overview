import * as S from './styled';

interface ChartWrapProps {
  size: 'small' | 'large';
  children: React.ReactNode;
}

const ChartWrap = ({ size, children }: ChartWrapProps) => (
  <S.ChartWrap size={size}>{children}</S.ChartWrap>
);

export { ChartWrap };
