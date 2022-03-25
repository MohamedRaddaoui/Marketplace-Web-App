<?php

namespace App\Entity;

use App\Repository\AuctionRoomRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AuctionRoomRepository::class)
 */
class AuctionRoom
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="float",precision=7, scale=2)
     */
    private $LastPrice;



    /**
     * @ORM\OneToOne(targetEntity=Auction::class, inversedBy="auctionRoom", cascade={"persist", "remove"})
     */
    private $Auction;

    /**
     * @ORM\OneToOne(targetEntity=ReverseAuction::class, inversedBy="auctionRoom", cascade={"persist", "remove"})
     */
    private $ReverseAuction;

    /**
     * @ORM\OneToOne(targetEntity=usern::class, cascade={"persist", "remove"})
     */
    private $token;

    /**
     * @ORM\OneToMany(targetEntity=Usern::class, mappedBy="auctionRoom")
     */
    private $Users;






    public function __construct()
    {
        $this->Users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    /**
     * @return mixed
     */
    public function getLastPrice()
    {
        return $this->LastPrice;
    }

    /**
     * @param mixed $LastPrice
     */
    public function setLastPrice($LastPrice): void
    {
        $this->LastPrice = $LastPrice;
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

    public function getToken(): ?usern
    {
        return $this->token;
    }

    public function setToken(?usern $token): self
    {
        $this->token = $token;

        return $this;
    }

    /**
     * @return Collection<int, Usern>
     */
    public function getUsers(): Collection
    {
        return $this->Users;
    }

    public function addUser(Usern $user): self
    {
        if (!$this->Users->contains($user)) {
            $this->Users[] = $user;
            $user->setAuctionRoom($this);
        }

        return $this;
    }

    public function removeUser(Usern $user): self
    {
        if ($this->Users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getAuctionRoom() === $this) {
                $user->setAuctionRoom(null);
            }
        }

        return $this;
    }






}
