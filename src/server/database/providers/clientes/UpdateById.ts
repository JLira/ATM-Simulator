import { ETableNames } from '../../ETableNames';
import { ICliente } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, cliente: Omit<ICliente, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cliente)
      .update(cliente)
      .where('id', '=', id);

    if (result > 0) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar o registro');
  }
};