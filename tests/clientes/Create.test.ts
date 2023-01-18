import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Clientes - Create', () => {


  test('Cria registro', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ cpf: '12345678901' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  test('Tenta criar um registro com cpf curto', async () => {

    const res1 = await testServer
      .post('/clientes')
      .send({ cpf: '1234567890' });


    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.cpf');
  });
});