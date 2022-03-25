<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220322152646 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE auction_room_usern');
        $this->addSql('ALTER TABLE usern DROP is_active');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE auction_room_usern (auction_room_id INT NOT NULL, usern_id INT NOT NULL, INDEX IDX_9CAFFCA2C06AF2E (auction_room_id), INDEX IDX_9CAFFCA2C5C03B7F (usern_id), PRIMARY KEY(auction_room_id, usern_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE auction_room_usern ADD CONSTRAINT FK_9CAFFCA2C06AF2E FOREIGN KEY (auction_room_id) REFERENCES auction_room (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE auction_room_usern ADD CONSTRAINT FK_9CAFFCA2C5C03B7F FOREIGN KEY (usern_id) REFERENCES usern (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE usern ADD is_active TINYINT(1) NOT NULL');
    }
}
