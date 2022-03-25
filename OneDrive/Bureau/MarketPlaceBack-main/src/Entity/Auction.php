<?php

namespace App\Entity;

use App\Traits\TimeStampTrait;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AuctionRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\NumericFilter;

/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=AuctionRepository::class)
 * @ApiFilter(SearchFilter::class, properties={"id":"exact"})
 * @ApiFilter(DateFilter::class,properties={"Date"})
 * @ApiFilter(NumericFilter::class,properties={"Price"})
 * @ORM\HasLifecycleCallbacks()
 */
class Auction
{
    use TimeStampTrait;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $Date;

    /**
     * @ORM\Column(type="float",precision=7, scale=2)
     */
    private $Price;

    /**
     * @ORM\OneToOne(targetEntity=AuctionHistory::class, cascade={"persist", "remove"})
     */
    private $Auctionhistory;

    /**
     * @ORM\ManyToMany(targetEntity=Usern::class, mappedBy="Auctions")
     */
    private $subscribers;

    /**
     * @ORM\OneToOne(targetEntity=Review::class, mappedBy="Auction", cascade={"persist", "remove"})
     */
    private $review;

    /**
     * @ORM\OneToMany(targetEntity=Products::class, mappedBy="Auction")
     */
    private $products;

    /**
     * @ORM\OneToOne(targetEntity=AuctionRoom::class, mappedBy="Auction", cascade={"persist", "remove"})
     */
    private $auctionRoom;

    public function __construct()
    {
        $this->subscribers = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->Price;
    }

    public function setPrice(float $Price): self
    {
        $this->Price = $Price;

        return $this;
    }

    public function getAuctionhistory(): ?AuctionHistory
    {
        return $this->Auctionhistory;
    }

    public function setAuctionhistory(?AuctionHistory $Auctionhistory): self
    {
        $this->Auctionhistory = $Auctionhistory;

        return $this;
    }

    /**
     * @return Collection<int, Usern>
     */
    public function getSubscribers(): Collection
    {
        return $this->subscribers;
    }

    public function addSubscriber(Usern $subscriber): self
    {
        if (!$this->subscribers->contains($subscriber)) {
            $this->subscribers[] = $subscriber;
            $subscriber->addAuction($this);
        }

        return $this;
    }

    public function removeSubscriber(Usern $subscriber): self
    {
        if ($this->subscribers->removeElement($subscriber)) {
            $subscriber->removeAuction($this);
        }

        return $this;
    }

    public function getReview(): ?Review
    {
        return $this->review;
    }

    public function setReview(Review $review): self
    {
        // set the owning side of the relation if necessary
        if ($review->getAuction() !== $this) {
            $review->setAuction($this);
        }

        $this->review = $review;

        return $this;
    }

    /**
     * @return Collection<int, Products>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Products $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setAuction($this);
        }

        return $this;
    }

    public function removeProduct(Products $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getAuction() === $this) {
                $product->setAuction(null);
            }
        }

        return $this;
    }
    public function __toString() {
        return $this->id;
    }

    public function getAuctionRoom(): ?AuctionRoom
    {
        return $this->auctionRoom;
    }

    public function setAuctionRoom(?AuctionRoom $auctionRoom): self
    {
        // unset the owning side of the relation if necessary
        if ($auctionRoom === null && $this->auctionRoom !== null) {
            $this->auctionRoom->setAuction(null);
        }

        // set the owning side of the relation if necessary
        if ($auctionRoom !== null && $auctionRoom->getAuction() !== $this) {
            $auctionRoom->setAuction($this);
        }

        $this->auctionRoom = $auctionRoom;

        return $this;
    }
    
}
