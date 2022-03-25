<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220310150324 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE usern DROP INDEX FK_7785C930F5897397, ADD UNIQUE INDEX UNIQ_7785C930F5897397 (subscriptiontype_id)');
        $this->addSql('ALTER TABLE usern ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE usern DROP INDEX UNIQ_7785C930F5897397, ADD INDEX FK_7785C930F5897397 (subscriptiontype_id)');
        $this->addSql('ALTER TABLE usern DROP created_at, DROP updated_at');
    }
}
