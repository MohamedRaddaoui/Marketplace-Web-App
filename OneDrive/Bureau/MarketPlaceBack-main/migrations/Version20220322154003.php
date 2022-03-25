<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220322154003 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE auction_room ADD token_id INT DEFAULT NULL, ADD users_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE auction_room ADD CONSTRAINT FK_B9F40A3841DEE7B9 FOREIGN KEY (token_id) REFERENCES usern (id)');
        $this->addSql('ALTER TABLE auction_room ADD CONSTRAINT FK_B9F40A3867B3B43D FOREIGN KEY (users_id) REFERENCES usern (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B9F40A3841DEE7B9 ON auction_room (token_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B9F40A3867B3B43D ON auction_room (users_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE auction_room DROP FOREIGN KEY FK_B9F40A3841DEE7B9');
        $this->addSql('ALTER TABLE auction_room DROP FOREIGN KEY FK_B9F40A3867B3B43D');
        $this->addSql('DROP INDEX UNIQ_B9F40A3841DEE7B9 ON auction_room');
        $this->addSql('DROP INDEX UNIQ_B9F40A3867B3B43D ON auction_room');
        $this->addSql('ALTER TABLE auction_room DROP token_id, DROP users_id');
    }
}
