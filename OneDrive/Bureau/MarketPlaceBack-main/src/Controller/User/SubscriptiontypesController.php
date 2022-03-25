<?php

namespace App\Controller\User;

use App\Entity\Subscriptiontypes;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;

class SubscriptiontypesController extends AbstractController
{ 
    #[Route('/subscriptiontypes/add', name: 'subscriptiontypes.add')]
    public function AddSP(ManagerRegistry $doctrine): Response
    {

        $entityManager=$doctrine->getManager();
        $Subscriptiontypes=new Subscriptiontypes;
        $Subscriptiontypes->setDesignation("subscription233");
        $Subscriptiontypes->setDuration(3);
        $entityManager->persist( $Subscriptiontypes);
        $entityManager->flush();

        return $this->render('subscriptiontypes/index.html.twig', [
            'Subscriptiontypes' => $Subscriptiontypes,
        ]);
    }

    #[Route('/subscriptiontypes/find/{id<\d+>}', name: 'subscriptiontypes.Find')]
    public function FindSPbyid(Subscriptiontypes $subscriptiontypes=null):Response
    {

        // Récupérer la personne
      if ($subscriptiontypes) {
        return new Response($subscriptiontypes); ;
     
    }
    else
    {
        return new Response('echec'); 
    }
  
}
/*
#[Route('/subscriptiontypes/find/{id<\d+>}', name: 'subscriptiontypes.Find')]
public function FindSP(Subscriptiontypes $subscriptiontypes=null):Response
{ if ($subscriptiontypes) {
    return new Response($subscriptiontypes); ;
 }else{  return new Response('echec'); }

}
*/









    #[Route('/subscriptiontypes/delete/{id}', name: 'subscriptiontypes.delete')]
    public function DeleteSP(Subscriptiontypes $subscriptiontypes=null,ManagerRegistry $doctrine):Response
     {

        // Récupérer la personne
      if ($subscriptiontypes) {
          
    $manager=$doctrine->getManager();
    // Ajoute la fonction de suppression dans la transaction
    $manager->remove($subscriptiontypes);
    // Exécuter La transacition
    $manager->flush();
     
    }
    else
    {
        return new Response('ggggggggg dans Symfony'); 
    }
    return new Response('Bienvenue dans Symfony');  ;
}










#[Route('/subscriptiontypes/add/{designation}/{duration}', name: 'subscriptiontypes.add')]
public function AddSPi(ManagerRegistry $doctrine,$designation,$duration): Response
{

    $entityManager=$doctrine->getManager();
    $Subscriptiontypes=new Subscriptiontypes;
    $Subscriptiontypes->setDesignation($designation);
    $Subscriptiontypes->setDuration($duration);
    $entityManager->persist( $Subscriptiontypes);
    $entityManager->flush();

    return $this->render('subscriptiontypes/index.html.twig', [
        'Subscriptiontypes' => $Subscriptiontypes,
    ]);
}


}