import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICliente } from '../../database/models';

import { validation } from '../../shared/middleware';
interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<ICliente, 'id'> { }

export const updateByIdValidation = validation(getSchema => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    cpf: yup.string().required().length(11),
    nome: yup.string().required(),    
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

  if (Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
};