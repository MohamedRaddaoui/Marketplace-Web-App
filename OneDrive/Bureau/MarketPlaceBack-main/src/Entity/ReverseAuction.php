<?php

namespace App\Entity;

use App\Traits\TimeStampTrait;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReverseAuctionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\NumericFilter;


/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=ReverseAuctionRepository::class)
 * @ApiFilter(SearchFilter::class, properties={"id":"exact"})
 * @ApiFilter(DateFilter::class,properties={"Date"})
 * @ApiFilter(NumericFilter::class,properties={"Price"})
 * @ORM\HasLifecycleCallbacks()

 */
class ReverseAuction
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
     * @ORM\Column(type="float")
     */
    private $Price;

    /**
     * @ORM\OneToOne(targetEntity=AuctionHistory::class, mappedBy="ReverseAuction", cascade={"persist", "remove"})
     */
    private $auctionHistory;

    /**
     * @ORM\ManyToMany(targetEntity=Usern::class, mappedBy="ReverseAuctions")
     */
    private $subscribers;

    /**
     * @ORM\OneToOne(targetEntity=Review::class, mappedBy="ReverseAuction", cascade={"persist", "remove"})
     */
    private $review;

    /**
     * @ORM\OneToMany(targetEntity=Products::class, mappedBy="ReverseAuction")
     */
    private $products;

    /**
     * @ORM\OneToOne(targetEntity=AuctionRoom::class, mappedBy="ReverseAuction", cascade={"persist", "remove"})
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

    public function getAuctionHistory(): ?AuctionHistory
    {
        return $this->auctionHistory;
    }

    public function setAuctionHistory(?AuctionHistory $auctionHistory): self
    {
        // unset the owning side of the relation if necessary
        if ($auctionHistory === null && $this->auctionHistory !== null) {
            $this->auctionHistory->setReverseAuction(null);
        }

        // set the owning side of the relation if necessary
        if ($auctionHistory !== null && $auctionHistory->getReverseAuction() !== $this) {
            $auctionHistory->setReverseAuction($this);
        }

        $this->auctionHistory = $auctionHistory;

        return $this;
    }

    /**
     * @return Collection<int, Subscriber>
     */
    public function getSubscribers(): Collection
    {
        return $this->subscribers;
    }

    public function addSubscriber(Usern $subscriber): self
    {
        if (!$this->subscribers->contains($subscriber)) {
            $this->subscribers[] = $subscriber;
            $subscriber->addReverseAuction($this);
        }

        return $this;
    }

    public function removeSubscriber(Usern $subscriber): self
    {
        if ($this->subscribers->removeElement($subscriber)) {
            $subscriber->removeReverseAuction($this);
        }

        return $this;
    }

    public function getReview(): ?Review
    {
        return $this->review;
    }

    public function setReview(?Review $review): self
    {
        // unset the owning side of the relation if necessary
        if ($review === null && $this->review !== null) {
            $this->review->setReverseAuction(null);
        }

        // set the owning side of the relation if necessary
        if ($review !== null && $review->getReverseAuction() !== $this) {
            $review->setReverseAuction($this);
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
            $product->setReverseAuction($this);
        }

        return $this;
    }

    public function removeProduct(Products $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getReverseAuction() === $this) {
                $product->setReverseAuction(null);
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
            $this->auctionRoom->setReverseAuction(null);
        }

        // set the owning side of the relation if necessary
        if ($auctionRoom !== null && $auctionRoom->getReverseAuction() !== $this) {
            $auctionRoom->setReverseAuction($this);
        }

        $this->auctionRoom = $auctionRoom;

        return $this;
    }
 
}
