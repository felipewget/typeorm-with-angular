import {MigrationInterface, QueryRunner} from "typeorm";

export class Records1598710250018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`INSERT INTO farmer ("name","document_id","address_id") values ('Zeca Pagodinho', 1, 1); `);
        await queryRunner.query(`INSERT INTO address ("street", "state", "address", "country") VALUES ('Av. Sete de Setembro', 'PR', 'Av. Sete de Setembro', 'Brasil');`);
        await queryRunner.query(`INSERT INTO document ("document_number", "document_type") VALUES ('69824419977', 'CPF');`);

        await queryRunner.query(`INSERT INTO farmer ("name","document_id","address_id") values ('Zeca Pagodinho', 2, 2); `);
        await queryRunner.query(`INSERT INTO address ("street", "state", "address", "country") VALUES ('Av. Sete de Setembro', 'PR', 'Av. Sete de Setembro', 'Brasil');`);
        await queryRunner.query(`INSERT INTO document ("document_number", "document_type") VALUES ('402202922', 'RG');`);

        await queryRunner.query(`INSERT INTO farmer ("name","document_id","address_id") values ('Nelson Cavaquinho', 3, 3); `);
        await queryRunner.query(`INSERT INTO address ("street", "state", "address", "country") VALUES ('R. Engo. Ostoja Roguski', 'PR', 'R. Engo. Ostoja Roguski', 'Brasil');`);
        await queryRunner.query(`INSERT INTO document ("document_number", "document_type") VALUES ('417607295', 'RG');`);

        await queryRunner.query(`INSERT INTO farmer ("name","document_id","address_id") values ('Richard Dawkins', 4, 4); `);
        await queryRunner.query(`INSERT INTO address ("street", "state", "address", "country") VALUES ('Av. Pedro Álvares Cabral', 'SP', 'Av. Pedro Álvares Cabral', 'Brasil');`);
        await queryRunner.query(`INSERT INTO document ("document_number", "document_type") VALUES ('90399449973', 'CPF');`);

        await queryRunner.query(`INSERT INTO farmer ("name","document_id","address_id") values ('Michio Kaku', 5, 5); `);
        await queryRunner.query(`INSERT INTO address ("street", "state", "address", "country") VALUES ('R. Ipiranga, 792 - Jardim Aeroporto', 'SP', 'R. Ipiranga', 'Brasil');`);
        await queryRunner.query(`INSERT INTO document ("document_number", "document_type") VALUES ('411054909', 'RG');`);

        await queryRunner.query(`INSERT INTO farmer ("name","document_id","address_id") values ('Albert Einstein', 6, 6); `);
        await queryRunner.query(`INSERT INTO address ("street", "state", "address", "country") VALUES ('New York, NY 10004', 'NY', 'NY 10004', 'USA');`);
        await queryRunner.query(`INSERT INTO document ("document_number", "document_type") VALUES ('7788996655441122', 'CNH');`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`TRUNCATE TABLE address CASCADE`);
        await queryRunner.query(`TRUNCATE TABLE document CASCADE`);
        await queryRunner.query(`TRUNCATE TABLE farmer CASCADE`);
        
    }

}
