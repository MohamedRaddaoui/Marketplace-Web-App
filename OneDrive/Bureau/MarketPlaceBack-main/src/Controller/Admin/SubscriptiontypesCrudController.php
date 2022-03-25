<?php

namespace App\Controller\Admin;

use App\Entity\Subscriptiontypes;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SubscriptiontypesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Subscriptiontypes::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
