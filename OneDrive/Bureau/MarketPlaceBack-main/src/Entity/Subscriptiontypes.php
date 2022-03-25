<?php

namespace App\Entity;

use App\Traits\TimeStampTrait;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SubscriptiontypesRepository;
/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=SubscriptiontypesRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Subscriptiontypes
{
    use TimeStampTrait;
   /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $designation;

    /**
     * @ORM\Column(type="integer")
     */
    private $duration;

    /**
     * @ORM\OneToOne(targetEntity=Usern::class, mappedBy="subscriptiontype")
     */
    private $subscriber;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getSubscriber(): ?Usern
    {
        return $this->subscriber;
    }

    public function setSubscriber(?Usern $subscriber): self
    {
        // unset the owning side of the relation if necessary
        if ($subscriber === null && $this->subscriber !== null) {
            $this->subscriber->setSubscriptiontype(null);
        }

        // set the owning side of the relation if necessary
        if ($subscriber !== null && $subscriber->getSubscriptiontype() !== $this) {
            $subscriber->setSubscriptiontype($this);
        }

        $this->subscriber = $subscriber;

        return $this;
    }
    public function __toString() {
        return $this->designation;
    }
}












