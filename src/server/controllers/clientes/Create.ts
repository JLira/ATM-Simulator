import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICliente } from '../../database/models';
import { validation } from '../../shared/middleware';
import { ClientesProvider } from '../../database/providers/clientes/index';


interface IBodyProps extends Omit<ICliente, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    cpf: yup.string().required().length(11),
    nome: yup.string().required().min(3).max(150),
  })),
}));


export const create = async (req: Request<{}, {}, ICliente>, res: Response) => {
  const result = await ClientesProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};