<?php

namespace App\Controller\Admin;

use App\Entity\Products;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\HiddenField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;



class ProductsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Products::class;
    }

    
   public function configureFields(string $pageName): iterable
    {
        return [
          
            TextField::new('designation'),
            TextField::new('description'),
            ImageField::new('image')
            ->setBasePath($this->getParameter("app.path.product_images"))
            ->onlyOnIndex(),
            TextareaField::new('imageFile',"Image de Produit")->setFormType(VichImageType::class)->hideOnIndex()
            ->setFormTypeOption('allow_delete', false),
            NumberField::new('quantity'),
            AssociationField::new('Category'),
            AssociationField::new('SubCategory'),
            AssociationField::new('subscriber'),
        ];
    }
    
}
