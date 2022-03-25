<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220312235024 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE auction_room (id INT AUTO_INCREMENT NOT NULL, auction_id INT DEFAULT NULL, reverse_auction_id INT DEFAULT NULL, token_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_B9F40A3857B8F0DE (auction_id), UNIQUE INDEX UNIQ_B9F40A3832186761 (reverse_auction_id), UNIQUE INDEX UNIQ_B9F40A3841DEE7B9 (token_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE auction_room_usern (auction_room_id INT NOT NULL, usern_id INT NOT NULL, INDEX IDX_9CAFFCA2C06AF2E (auction_room_id), INDEX IDX_9CAFFCA2C5C03B7F (usern_id), PRIMARY KEY(auction_room_id, usern_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE auction_room ADD CONSTRAINT FK_B9F40A3857B8F0DE FOREIGN KEY (auction_id) REFERENCES auction (id)');
        $this->addSql('ALTER TABLE auction_room ADD CONSTRAINT FK_B9F40A3832186761 FOREIGN KEY (reverse_auction_id) REFERENCES reverse_auction (id)');
        $this->addSql('ALTER TABLE auction_room ADD CONSTRAINT FK_B9F40A3841DEE7B9 FOREIGN KEY (token_id) REFERENCES usern (id)');
        $this->addSql('ALTER TABLE auction_room_usern ADD CONSTRAINT FK_9CAFFCA2C06AF2E FOREIGN KEY (auction_room_id) REFERENCES auction_room (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE auction_room_usern ADD CONSTRAINT FK_9CAFFCA2C5C03B7F FOREIGN KEY (usern_id) REFERENCES usern (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE auction_room_usern DROP FOREIGN KEY FK_9CAFFCA2C06AF2E');
        $this->addSql('DROP TABLE auction_room');
        $this->addSql('DROP TABLE auction_room_usern');
    }
}
