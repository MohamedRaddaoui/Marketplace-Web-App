<?php

namespace App\Controller\Admin;

use App\Entity\Usern;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UsernCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Usern::class;
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            
            TextField::new('FirstName'),
            TextField::new('LastName'),
            EmailField::new('email'),
            TextField::new('password'),
            DateField::new('birthDate'),
            AssociationField::new('subscriptiontype'),

      
        ];
    }
}
