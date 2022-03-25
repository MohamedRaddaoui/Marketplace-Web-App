<?php

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReverseAuctionController extends AbstractController
{
    #[Route('/reverse/auction', name: 'reverse_auction')]
    public function index(): Response
    {
        return $this->render('reverse_auction/index.html.twig', [
            'controller_name' => 'ReverseAuctionController',
        ]);
    }
}
