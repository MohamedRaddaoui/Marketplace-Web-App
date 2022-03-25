<?php

namespace App\Entity;

use App\Traits\TimeStampTrait;
use Doctrine\ORM\Mapping as ORM;

use App\Repository\UsernRepository;
use Doctrine\Common\Collections\Collection;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;


/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=UsernRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class Usern implements UserInterface, PasswordAuthenticatedUserInterface
{


    use TimeStampTrait;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=50)
     */
    private $FirstName;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $LastName;



    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];
    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;
    
    private $plainPassword;

   /**
     * @ORM\Column(type="date")
     */
    private $birthDate;


    /**
     * @ORM\Column(type="boolean")
     */
    private $isVerified = false;



      /**
     * @ORM\ManyToMany(targetEntity=Auction::class, inversedBy="subscribers")
     */
    private $Auctions;
       /**
     * @ORM\ManyToMany(targetEntity=ReverseAuction::class, inversedBy="subscribers")
     */
    private $ReverseAuctions;

    /**
     * @ORM\OneToOne(targetEntity=Subscriptiontypes::class, inversedBy="subscriber")
     */
    private $subscriptiontype;


    /**
     * @ORM\OneToMany(targetEntity=Review::class, mappedBy="subscriber")
     */
    private $Review;

    /**
     * @ORM\OneToMany(targetEntity=Products::class, mappedBy="subscriber")
     */
    private $products;

    /**
     * @ORM\ManyToOne(targetEntity=AuctionRoom::class, inversedBy="Users")
     */
    private $auctionRoom;




    public function __construct()
    {
        $this->Auctions = new ArrayCollection();
        $this->ReverseAuctions = new ArrayCollection();
        $this->Review = new ArrayCollection();
        $this->products = new ArrayCollection();

    }


    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
    /**
     * Get the value of plainPassword
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * Set the value of plainPassword
     * @return  self
     */
    public function setPlainPassword($plainPassword)
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }
    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }
    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }
    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
        $this->plainPassword =null;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    /**
     * Get the value of FirstName
     */ 
    public function getFirstName()
    {
        return $this->FirstName;
    }

    /**
     * Set the value of FirstName
     *
     * @return  self
     */ 
    public function setFirstName($FirstName)
    {
        $this->FirstName = $FirstName;

        return $this;
    }


    /**
     * Get the value of LastName
     */ 
    public function getLastName()
    {
        return $this->LastName;
    }

    /**
     * Set the value of LastName
     *
     * @return  self
     */ 
    public function setLastName($LastName)
    {
        $this->LastName = $LastName;

        return $this;
    }
    
    /**
     * @return Collection<int, Auction>
     */
    public function getAuctions(): Collection
    {
        return $this->Auctions;
    }

    public function addAuction(Auction $auction): self
    {
        if (!$this->Auctions->contains($auction)) {
            $this->Auctions[] = $auction;
        }

        return $this;
    }

    public function removeAuction(Auction $auction): self
    {
        $this->Auctions->removeElement($auction);

        return $this;
    }

    /**
     * @return Collection<int, ReverseAuction>
     */
    public function getReverseAuctions(): Collection
    {
        return $this->ReverseAuctions;
    }

    public function addReverseAuction(ReverseAuction $reverseAuction): self
    {
        if (!$this->ReverseAuctions->contains($reverseAuction)) {
            $this->ReverseAuctions[] = $reverseAuction;
        }

        return $this;
    }

    public function removeReverseAuction(ReverseAuction $reverseAuction): self
    {
        $this->ReverseAuctions->removeElement($reverseAuction);

        return $this;
    }



    public function getSubscriptiontype(): ?subscriptiontypes
    {
        return $this->subscriptiontype;
    }

    public function setSubscriptiontype(?subscriptiontypes $subscriptiontype): self
    {
        $this->subscriptiontype = $subscriptiontype;

        return $this;
    }





    /**
     * @return Collection<int, Review>
     */
    public function getReview(): Collection
    {
        return $this->Review;
    }

    public function addReview(Review $review): self
    {
        if (!$this->Review->contains($review)) {
            $this->Review[] = $review;
            $review->setSubscriber($this);
        }

        return $this;
    }

    public function removeReview(Review $review): self
    {
        if ($this->Review->removeElement($review)) {
            // set the owning side to null (unless already changed)
            if ($review->getSubscriber() === $this) {
                $review->setSubscriber(null);
            }
        }

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
            $product->setSubscriber($this);
        }

        return $this;
    }

    public function removeProduct(Products $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getSubscriber() === $this) {
                $product->setSubscriber(null);
            }
        }

        return $this;
    }
    public function __toString() {
        return $this->email;
    }

    public function getAuctionRoom(): ?AuctionRoom
    {
        return $this->auctionRoom;
    }

    public function setAuctionRoom(?AuctionRoom $auctionRoom): self
    {
        $this->auctionRoom = $auctionRoom;

        return $this;
    }



  


}
