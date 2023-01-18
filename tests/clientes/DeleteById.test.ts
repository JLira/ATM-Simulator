import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Clientes - DeleteById', () => {

  test('Apaga registro', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ cpf: '12345678901' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/clientes/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  test('Tenta apagar registro que não existe', async () => {

    const res1 = await testServer
      .delete('/clientes/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});