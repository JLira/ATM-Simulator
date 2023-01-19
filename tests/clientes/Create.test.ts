import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cliente - Create', () => {

  test('Cria registro', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ cpf:'12345678901',  nome: 'Cliente numero 01' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  test('Tenta criar um registro com nome muito curto', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ nome: 'Ca' });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});