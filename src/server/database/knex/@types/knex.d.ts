import { ICliente } from '../../models';

declare module 'knex/types/tables' {
  interface Tables {
    cliente: ICliente
    // atm: IAtm
    // conta: IConta
    // conta_mvto : IConta_mvto
  }
}