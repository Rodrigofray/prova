import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export class movies1668858597357 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar(200)',
          },
          {
            name: 'image',
            type: 'varchar(1000)',
          },
          {
            name: 'userid',
            type: 'integer',
          },
          {
            name: 'create',
            type: 'timestamp',
          },
          {
            name: 'update',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
