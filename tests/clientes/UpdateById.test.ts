import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Clientes - UpdateById', () => {

  test('Atualiza registro', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ cpf: '12345678901',nome: 'Cliente numero 01' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/clientes/${res1.body}`)
      .send({ cpf: '12345678903',nome: 'Cliente numero 01' });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  test('Tenta atualizar registro que não existe', async () => {

    const res1 = await testServer
      .put('/clientes/99999')
      .send({ cpf: '12345678901',nome: 'Cliente numero 01' });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});