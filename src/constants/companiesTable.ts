enum SortFields {
  Name = 'name',
  SafeType = 'safeType',
  CompanyType = 'companyType',
  Price = 'price',
  Ticker = 'ticker',
}

enum SortOrder {
  Asc = 1,
  Desc = -1,
}

const TABLE_FIELDS = [
  { sortField: SortFields.Ticker, name: 'Тикер' },
  { sortField: SortFields.Name, name: 'Название' },
  { sortField: SortFields.SafeType, name: 'Тип' },
  { sortField: SortFields.CompanyType, name: 'Сектор' },
  { sortField: SortFields.Price, name: 'Цена' },
];

export { TABLE_FIELDS, SortFields, SortOrder };
