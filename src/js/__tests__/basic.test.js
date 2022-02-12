import displayTheLifeBar from '../basic';

test('проверка жизни', () => {
  const healthy = 'healthy';
  const wounded = 'wounded';
  const critical = 'critical';
  const player = {
    name: 'Маг',
    health: 90,
  };
  const expected = healthy || wounded || critical;
  const result = displayTheLifeBar(player);
  expect(result).toBe(expected);
});
