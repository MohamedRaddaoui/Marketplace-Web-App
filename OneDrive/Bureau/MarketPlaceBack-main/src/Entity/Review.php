<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=ReviewRepository::class)
 */
class Review
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $comment;

    /**
     * @ORM\Column(type="float")
     */
    private $rating;

    /**
     * @ORM\Column(type="datetime")
     */
    private $reviewDate;

    /**
     * @ORM\OneToOne(targetEntity=Auction::class, inversedBy="review", cascade={"persist", "remove"})
     */
    private $Auction;

    /**
     * @ORM\OneToOne(targetEntity=ReverseAuction::class, inversedBy="review", cascade={"persist", "remove"})
     */
    private $ReverseAuction;

    /**
     * @ORM\ManyToOne(targetEntity=Usern::class, inversedBy="Review")
     * @ORM\JoinColumn(nullable=false)
     */
    private $subscriber;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getRating(): ?float
    {
        return $this->rating;
    }

    public function setRating(float $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getReviewDate(): ?\DateTimeInterface
    {
        return $this->reviewDate;
    }

    public function setReviewDate(): self
    {
        $this->reviewDate = new \DateTime();

        return $this;
    }

    public function getAuction(): ?Auction
    {
        return $this->Auction;
    }

    public function setAuction(Auction $Auction): self
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

    public function getSubscriber(): ?Usern
    {
        return $this->subscriber;
    }

    public function setSubscriber(?Usern $subscriber): self
    {
        $this->subscriber = $subscriber;

        return $this;
    }
    public function __toString() {
        return $this->id;
    }

}
