export function makeCategoriesSelectData(data) {
  const result = [{ name: 'Все', id: 'all' }];

  if (data) data.categories.forEach((item) => result.push({ name: item.name, id: item.slug }));

  return result;
}