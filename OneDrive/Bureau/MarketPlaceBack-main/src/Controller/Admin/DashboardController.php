<?php

namespace App\Controller\Admin;
use App\Entity\AuctionRoom;
use App\Entity\Subscriptiontypes;
use App\Entity\Subscriber;
use App\Entity\Category;
use App\Entity\Products;
use App\Entity\SubCategory;
use App\Entity\Auction;
use App\Entity\Review;
use App\Entity\ReverseAuction;
use App\Entity\AuctionHistory;
use App\Entity\Usern;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Mrketplace');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Subscriptiontypes', 'fas fa-list', Subscriptiontypes::class);
       yield MenuItem::linkToCrud('Usern', 'fas fa-user', Usern::class);
        yield MenuItem::linkToCrud('Category', 'fas fa-list', Category::class);
        yield MenuItem::linkToCrud('Products', 'fas fa-list', Products::class);
        yield MenuItem::linkToCrud('SubCategory', 'fas fa-list', SubCategory::class);
      
        yield MenuItem::linkToCrud('Auction', 'fas fa-list', Auction::class);
        yield MenuItem::linkToCrud('ReverseAuction', 'fas fa-list', ReverseAuction::class);
        yield MenuItem::linkToCrud('AuctionHistory', 'fas fa-list', AuctionHistory::class);
        yield MenuItem::linkToCrud('Review', 'fas fa-list', Review::class);
        yield MenuItem::linkToCrud('AuctionRoom', 'fas fa-list', AuctionRoom::class);

    }
}
