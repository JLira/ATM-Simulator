import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.atm, table => {
      table.bigIncrements('id').primary().index();
      table.decimal('saldo_caixa').defaultTo(0);

      table.comment('Tabela usada para armazenar notas do ATM.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.atm}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.atm)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.atm}`);
    });
}