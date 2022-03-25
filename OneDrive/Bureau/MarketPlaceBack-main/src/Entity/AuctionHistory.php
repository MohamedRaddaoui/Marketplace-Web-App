<?php

namespace App\Entity;

use App\Repository\AuctionHistoryRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;



/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=AuctionHistoryRepository::class)
 */
class AuctionHistory
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $DateTime;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $priceHistory = [];

    /**
     * @ORM\OneToOne(targetEntity=Auction::class,inversedBy="Auctionhistory", cascade={"persist", "remove"})
     */
    private $Auction;

    /**
     * @ORM\OneToOne(targetEntity=ReverseAuction::class, inversedBy="auctionHistory", cascade={"persist", "remove"})
     */
    private $ReverseAuction;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateTime(): ?\DateTimeInterface
    {
        return $this->DateTime;
    }

    public function setDateTime(?\DateTimeInterface $DateTime): self
    {
        $this->DateTime = $DateTime;

        return $this;
    }

    public function getPriceHistory(): ?array
    {
        return $this->priceHistory;
    }

    public function setPriceHistory(?array $priceHistory): self
    {
        $this->priceHistory = $priceHistory;

        return $this;
    }

    public function getAuction(): ?Auction
    {
        return $this->Auction;
    }

    public function setAuction(?Auction $Auction): self
    {
        $this->Auction = $Auction;

        return $this;
    }

    public function getReverseAuction(): ?ReverseAuction
    {
        return $this->ReverseAuction;
    }

    public function setReverseAuction(?ReverseAuction $ReverseAuction): self
    {
        $this->ReverseAuction = $ReverseAuction;

        return $this;
    }
}
