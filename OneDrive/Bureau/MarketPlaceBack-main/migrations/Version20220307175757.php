<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220307175757 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE usern DROP FOREIGN KEY FK_7785C930F5897397');
        $this->addSql('DROP INDEX UNIQ_7785C930F5897397 ON usern');
        $this->addSql('ALTER TABLE usern DROP subscriptiontype_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE usern ADD subscriptiontype_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE usern ADD CONSTRAINT FK_7785C930F5897397 FOREIGN KEY (subscriptiontype_id) REFERENCES subscriptiontypes (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7785C930F5897397 ON usern (subscriptiontype_id)');
    }
}
