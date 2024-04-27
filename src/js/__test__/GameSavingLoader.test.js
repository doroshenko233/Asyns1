import GameSavingLoader from "../GameSavingLoader";
import json from "../parser";
import read from "../reader";

test('Метод load должен создавать объект типа GameSaving', async () => {
  const data = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(data).toEqual(expected);
});

test('Функция json должна возвращать данные в формате JSON', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(await json(await read())).toBe(data);
});

