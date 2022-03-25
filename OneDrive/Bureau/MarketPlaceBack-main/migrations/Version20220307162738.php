<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220307162738 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE auction (id INT AUTO_INCREMENT NOT NULL, auctionhistory_id INT DEFAULT NULL, date DATETIME NOT NULL, price DOUBLE PRECISION NOT NULL, UNIQUE INDEX UNIQ_DEE4F593149E62EE (auctionhistory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE auction_history (id INT AUTO_INCREMENT NOT NULL, auction_id INT DEFAULT NULL, reverse_auction_id INT DEFAULT NULL, date_time DATETIME DEFAULT NULL, price_history LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', UNIQUE INDEX UNIQ_7FABAFF657B8F0DE (auction_id), UNIQUE INDEX UNIQ_7FABAFF632186761 (reverse_auction_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products (id INT AUTO_INCREMENT NOT NULL, category_id INT NOT NULL, sub_category_id INT DEFAULT NULL, subscriber_id INT NOT NULL, auction_id INT DEFAULT NULL, reverse_auction_id INT DEFAULT NULL, designation VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, quantity INT NOT NULL, INDEX IDX_B3BA5A5A12469DE2 (category_id), INDEX IDX_B3BA5A5AF7BFE87C (sub_category_id), INDEX IDX_B3BA5A5A7808B1AD (subscriber_id), INDEX IDX_B3BA5A5A57B8F0DE (auction_id), INDEX IDX_B3BA5A5A32186761 (reverse_auction_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reverse_auction (id INT AUTO_INCREMENT NOT NULL, date DATETIME NOT NULL, price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE review (id INT AUTO_INCREMENT NOT NULL, auction_id INT DEFAULT NULL, reverse_auction_id INT DEFAULT NULL, subscriber_id INT NOT NULL, comment VARCHAR(255) DEFAULT NULL, rating DOUBLE PRECISION NOT NULL, review_date DATETIME NOT NULL, UNIQUE INDEX UNIQ_794381C657B8F0DE (auction_id), UNIQUE INDEX UNIQ_794381C632186761 (reverse_auction_id), INDEX IDX_794381C67808B1AD (subscriber_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sub_category (id INT AUTO_INCREMENT NOT NULL, category_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_BCE3F79812469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subscriptiontypes (id INT AUTO_INCREMENT NOT NULL, designation VARCHAR(255) NOT NULL, duration INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usern (id INT AUTO_INCREMENT NOT NULL, subscriptiontype_id INT DEFAULT NULL, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, is_active TINYINT(1) NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_7785C930E7927C74 (email), UNIQUE INDEX UNIQ_7785C930F5897397 (subscriptiontype_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usern_auction (usern_id INT NOT NULL, auction_id INT NOT NULL, INDEX IDX_736B247FC5C03B7F (usern_id), INDEX IDX_736B247F57B8F0DE (auction_id), PRIMARY KEY(usern_id, auction_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usern_reverse_auction (usern_id INT NOT NULL, reverse_auction_id INT NOT NULL, INDEX IDX_7472EEFC5C03B7F (usern_id), INDEX IDX_7472EEF32186761 (reverse_auction_id), PRIMARY KEY(usern_id, reverse_auction_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE auction ADD CONSTRAINT FK_DEE4F593149E62EE FOREIGN KEY (auctionhistory_id) REFERENCES auction_history (id)');
        $this->addSql('ALTER TABLE auction_history ADD CONSTRAINT FK_7FABAFF657B8F0DE FOREIGN KEY (auction_id) REFERENCES auction (id)');
        $this->addSql('ALTER TABLE auction_history ADD CONSTRAINT FK_7FABAFF632186761 FOREIGN KEY (reverse_auction_id) REFERENCES reverse_auction (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5AF7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A7808B1AD FOREIGN KEY (subscriber_id) REFERENCES usern (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A57B8F0DE FOREIGN KEY (auction_id) REFERENCES auction (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A32186761 FOREIGN KEY (reverse_auction_id) REFERENCES reverse_auction (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C657B8F0DE FOREIGN KEY (auction_id) REFERENCES auction (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C632186761 FOREIGN KEY (reverse_auction_id) REFERENCES reverse_auction (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C67808B1AD FOREIGN KEY (subscriber_id) REFERENCES usern (id)');
        $this->addSql('ALTER TABLE sub_category ADD CONSTRAINT FK_BCE3F79812469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE usern ADD CONSTRAINT FK_7785C930F5897397 FOREIGN KEY (subscriptiontype_id) REFERENCES subscriptiontypes (id)');
        $this->addSql('ALTER TABLE usern_auction ADD CONSTRAINT FK_736B247FC5C03B7F FOREIGN KEY (usern_id) REFERENCES usern (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE usern_auction ADD CONSTRAINT FK_736B247F57B8F0DE FOREIGN KEY (auction_id) REFERENCES auction (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE usern_reverse_auction ADD CONSTRAINT FK_7472EEFC5C03B7F FOREIGN KEY (usern_id) REFERENCES usern (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE usern_reverse_auction ADD CONSTRAINT FK_7472EEF32186761 FOREIGN KEY (reverse_auction_id) REFERENCES reverse_auction (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE auction_history DROP FOREIGN KEY FK_7FABAFF657B8F0DE');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A57B8F0DE');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C657B8F0DE');
        $this->addSql('ALTER TABLE usern_auction DROP FOREIGN KEY FK_736B247F57B8F0DE');
        $this->addSql('ALTER TABLE auction DROP FOREIGN KEY FK_DEE4F593149E62EE');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A12469DE2');
        $this->addSql('ALTER TABLE sub_category DROP FOREIGN KEY FK_BCE3F79812469DE2');
        $this->addSql('ALTER TABLE auction_history DROP FOREIGN KEY FK_7FABAFF632186761');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A32186761');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C632186761');
        $this->addSql('ALTER TABLE usern_reverse_auction DROP FOREIGN KEY FK_7472EEF32186761');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5AF7BFE87C');
        $this->addSql('ALTER TABLE usern DROP FOREIGN KEY FK_7785C930F5897397');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A7808B1AD');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C67808B1AD');
        $this->addSql('ALTER TABLE usern_auction DROP FOREIGN KEY FK_736B247FC5C03B7F');
        $this->addSql('ALTER TABLE usern_reverse_auction DROP FOREIGN KEY FK_7472EEFC5C03B7F');
        $this->addSql('DROP TABLE auction');
        $this->addSql('DROP TABLE auction_history');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE products');
        $this->addSql('DROP TABLE reverse_auction');
        $this->addSql('DROP TABLE review');
        $this->addSql('DROP TABLE sub_category');
        $this->addSql('DROP TABLE subscriptiontypes');
        $this->addSql('DROP TABLE usern');
        $this->addSql('DROP TABLE usern_auction');
        $this->addSql('DROP TABLE usern_reverse_auction');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
