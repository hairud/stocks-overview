import * as S from './styled';

interface BondFormSelectProps {
  value: string;
  defaultOptionName: string;
  options: { [value: string]: string };
  changeValue: (value: string) => void;
}

const BondFormSelect = ({
  value,
  defaultOptionName,
  options,
  changeValue,
}: BondFormSelectProps) => (
  <S.Select
    value={value}
    onChange={(e) => {
      changeValue(e.target.value);
    }}
  >
    <option value="-" disabled>
      {defaultOptionName}
    </option>
    {Object.entries(options).map(([bondTypeValue, bondTypeName]) => (
      <option key={bondTypeValue} value={bondTypeValue}>
        {bondTypeName}
      </option>
    ))}
  </S.Select>
);

export default BondFormSelect;
