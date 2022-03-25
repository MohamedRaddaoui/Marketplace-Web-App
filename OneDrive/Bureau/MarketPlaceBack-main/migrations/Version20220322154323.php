<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220322154323 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE auction_room DROP FOREIGN KEY FK_B9F40A3867B3B43D');
        $this->addSql('DROP INDEX UNIQ_B9F40A3867B3B43D ON auction_room');
        $this->addSql('ALTER TABLE auction_room DROP users_id');
        $this->addSql('ALTER TABLE usern ADD auction_room_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE usern ADD CONSTRAINT FK_7785C930C06AF2E FOREIGN KEY (auction_room_id) REFERENCES auction_room (id)');
        $this->addSql('CREATE INDEX IDX_7785C930C06AF2E ON usern (auction_room_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE auction_room ADD users_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE auction_room ADD CONSTRAINT FK_B9F40A3867B3B43D FOREIGN KEY (users_id) REFERENCES usern (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B9F40A3867B3B43D ON auction_room (users_id)');
        $this->addSql('ALTER TABLE usern DROP FOREIGN KEY FK_7785C930C06AF2E');
        $this->addSql('DROP INDEX IDX_7785C930C06AF2E ON usern');
        $this->addSql('ALTER TABLE usern DROP auction_room_id');
    }
}
