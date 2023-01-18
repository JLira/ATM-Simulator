import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICliente } from '../../database/models';
import { validation } from '../../shared/middleware';


interface IBodyProps extends Omit<ICliente, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    cpf: yup.string().required().length(11),
    nome: yup.string().required(),
  })),
}));


export const create = async (req: Request<{}, {}, ICliente>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};