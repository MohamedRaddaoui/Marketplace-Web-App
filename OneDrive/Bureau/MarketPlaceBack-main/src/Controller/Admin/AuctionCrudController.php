<?php

namespace App\Controller\Admin;

use App\Entity\Auction;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\HiddenField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
class AuctionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Auction::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            DateField::new('Date'),
            MoneyField::new('Price','Price')->setCurrency('EUR'),
            AssociationField::new('subscribers'),
            AssociationField::new('products'),
            AssociationField::new('review'),
            AssociationField::new('Auctionhistory'),
          
        ];
    }
    
}
