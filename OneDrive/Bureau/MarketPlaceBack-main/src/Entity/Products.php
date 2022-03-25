<?php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource (formats={"json"})
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
 * @Vich\Uploadable
 * @ApiFilter(SearchFilter::class, properties={"designation": "ipartial","id":"exact"})
 */
class Products
{
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
     * @ORM\Column(type="string", length=255)
     */
    private $description;

     /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $image;

    /**
     * @Vich\UploadableField(mapping="product_images", fileNameProperty="image")
     * 
     */
    private $imageFile;
    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Category;

    /**
     * @ORM\ManyToOne(targetEntity=SubCategory::class, inversedBy="products")
     */
    private $SubCategory;

    /**
     * @ORM\ManyToOne(targetEntity=Usern::class, inversedBy="products")
     * @ORM\JoinColumn(nullable=false)
     */
    private $subscriber;

    /**
     * @ORM\ManyToOne(targetEntity=Auction::class, inversedBy="products")
     */
    private $Auction;

    /**
     * @ORM\ManyToOne(targetEntity=ReverseAuction::class, inversedBy="products")
     */
    private $ReverseAuction;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    
    public function setImageFile( $image = null)
    {
        $this->imageFile = $image;

        // VERY IMPORTANT:
        // It is required that at least one field changes if you are using Doctrine,
        // otherwise the event listeners won't be called and the file is lost
        if ($image) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getImageFile()
    {
        return $this->imageFile;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }
    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->Category;
    }

    public function setCategory(?Category $Category): self
    {
        $this->Category = $Category;

        return $this;
    }

    public function getSubCategory(): ?SubCategory
    {
        return $this->SubCategory;
    }

    public function setSubCategory(?SubCategory $SubCategory): self
    {
        $this->SubCategory = $SubCategory;

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
    public function __toString() {
        return $this->designation;
    }
    
}
