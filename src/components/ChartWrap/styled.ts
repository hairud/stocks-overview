import styled from 'styled-components';

const sizes = {
  large: 600,
  small: 300,
};

const ChartWrap = styled.div<{ size: 'large' | 'small'; hover?: boolean }>`
  position: relative;
  max-height: ${({ size }) => `${sizes[size]}px`};
  min-height: ${({ size }) => `${sizes[size]}px`};
  max-width: ${({ size }) => `${sizes[size]}px`};
  min-width: ${({ size }) => `${sizes[size]}px`};
  margin-left: 24px;
  cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
`;

export { ChartWrap };
