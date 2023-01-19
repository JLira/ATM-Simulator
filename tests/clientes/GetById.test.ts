import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Clientes - GetById', () => {

  test('Busca registro por id', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ cpf: '12345678901',nome: 'Cliente numero 01' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/clientes/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('cpf');
  });
  test('Tenta buscar registro que não existe', async () => {

    const res1 = await testServer
      .get('/clientes/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});