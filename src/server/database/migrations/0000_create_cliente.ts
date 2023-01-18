import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.cliente, table => {
      table.bigIncrements('id').primary().index();
      table.string('nome', 150).index().notNullable();
      table.string('cpf', 11).index().notNullable();

      table.comment('Tabela usada para armazenar clientes do banco.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.cliente}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.cliente)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.cliente}`);
    });
}