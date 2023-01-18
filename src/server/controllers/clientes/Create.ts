import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';


interface ICliente {
  cpf: string;
}

// interface IFilter {
//   filter?: string;
// }

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICliente>(yup.object().shape({
    cpf: yup.string().required().length(11),
  })),
}));


export const create = async (req: Request<{}, {}, ICliente>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};