<?php

namespace App\Controller\User;

use App\Entity\Auction;
use App\Entity\AuctionRoom;
use App\Entity\Category;
use App\Entity\Products;
use App\Entity\ReverseAuction;
use App\Entity\Review;
use App\Entity\SubCategory;
use App\Entity\Subscriptiontypes;
use App\Entity\Usern;
use App\Repository\AuctionRoomRepository;
use App\Service\MailerService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use App\Service\Validate;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UsernController extends AbstractController
{
    #[Route('/usern/add', name: 'usern.add')]
    public function add(ManagerRegistry $doctrine, UserPasswordHasherInterface $userPasswordHasher,$a,$b,$c,$d,$e): Response
    {

        $entityManager=$doctrine->getManager();
        $user=new Usern;
        $user->setFirstName($a);
        $user->setLastName($b);
        $user->setEmail($c);
        $user->setBirthDate(new \DateTime($d) );
        $user->setPlainPassword($e);
        $user->setPassword( $userPasswordHasher->hashPassword(
            $user,
            $user->getPlainPassword()
        ));

        $user->setIsActive(1);
        $entityManager->persist( $user);
        $entityManager->flush();
        return $this->render('usern/index.html.twig', [
            'controller_name' => 'UsernController',
        ]);
    }


    #[Route('/usern/update/{a}/{b}/{c}/{d}/{e}', name: 'usern.update')]
    public function update(Usern $user=null,ManagerRegistry $doctrine, UserPasswordHasherInterface $userPasswordHasher,$a,$b,$c,$d,$e): Response
    {


        if($user){

            $entityManager=$doctrine->getManager();

            $user->setFirstName($a);
            $user->setLastName($b);
            $user->setEmail($c);
            $user->setBirthDate(new \DateTime($d) );
            $user->setPlainPassword($e);
            $user->setPassword( $userPasswordHasher->hashPassword(
                $user,
                $user->getPlainPassword()
            ));

            $entityManager->persist( $user);
            $entityManager->flush();
            return $this->render('usern/index.html.twig', [
                'controller_name' => 'UsernController',
            ]);

        }else{
            return new Response('echec');

        }
    }



    #[Route('/usern/updatePw/{id}/{e}', name: 'usern.updatepw')]
    public function updatePW(Usern $user,ManagerRegistry $doctrine, UserPasswordHasherInterface $userPasswordHasher,$e): Response
    {


        if($user){

            $entityManager=$doctrine->getManager();

            $user->setPlainPassword($e);
            $user->setPassword( $userPasswordHasher->hashPassword(
                $user,
                $user->getPlainPassword()
            ));


            $entityManager->persist( $user);
            $entityManager->flush();
            return $this->render('usern/index.html.twig', [
                'controller_name' => 'UsernController',
            ]);

        }else{
            return new Response('echec');

        }
    }

    #[Route('/usern/subscibe/{user}/{subscriptiontypes}', name: 'usern.subscibe' ,methods: ['PUT','HEAD'])]
    public function subscibe(Usern $user,Subscriptiontypes $subscriptiontypes,ManagerRegistry $doctrine): Response
    {

        if($subscriptiontypes)
        {
            if($user){

                $entityManager=$doctrine->getManager();
                $user->setSubscriptiontype($subscriptiontypes);



                $entityManager->persist( $user);
                $entityManager->flush();

                $response=array(

                    'code'=>0,
                    'message'=>' updated!',
                    'errors'=>null,
                    'result'=>null

                );

                return new JsonResponse($response,200);
            }
            else{
                $response=array(

                    'code'=>1,
                    'message'=>' Not found !',
                    'errors'=>null,
                    'result'=>null

                );

                return new JsonResponse($response, Response::HTTP_NOT_FOUND);

            }

        }


        else{
            $response=array(

                'code'=>1,
                'message'=>' Not found !',
                'errors'=>null,
                'result'=>null

            );

            return new JsonResponse($response, Response::HTTP_NOT_FOUND);

        }

    }

    #[Route('/usern/product/{user}/{auction}/{category}/{subCategory}', name: 'usern.AddProduct')]
    public function AddProduct(Usern $user,Auction $auction,ManagerRegistry $doctrine,Category $category=null,SubCategory $subCategory): Response
    {

        if($user){
            if($category){

                $product =new Products();


                $entityManager=$doctrine->getManager();
                $product->setDescription('Asus10252');
                $product->setDesignation('Asus');
                $product->setImage('angular.pnj');

                $product->setQuantity(1);
                $product->setAuction($auction);
                $product->setSubscriber($user);
                $product->setCategory($category);
                $product->setSubCategory($subCategory);



                $entityManager->persist( $product);
                $entityManager->flush();

                return $this->render('usern/index.html.twig', [
                    'controller_name' => 'UsernController',
                ]);
            }else{
                return new Response('echec');

            }

        }
        else{
            return new Response('echec');

        }



    }
    #[Route('/usern/reviewau/{user}/{auction}/{comment}/{rating}', name: 'usern.review1')]
    public function reviewau(Usern $user=null,Auction $auction,ManagerRegistry $doctrine,$comment,$rating): Response
    {

        if($user){
            $review =new Review();


            $entityManager=$doctrine->getManager();
            $review->setComment($comment);
            $review->setRating($rating);
            $review->setReviewDate();
            $review->setAuction($auction);
            $review->setSubscriber($user);



            $entityManager->persist( $review);
            $entityManager->flush();

            return $this->render('usern/index.html.twig', [
                'controller_name' => 'UsernController',
            ]);
        }
        else{
            return new Response('echec');

        }




    }

    #[Route('/usern/reviewrau/{user}/{reverseAuction}/{comment}/{rating}', name: 'usern.review2')]
    public function revierwau(Usern $user=null,ReverseAuction $reverseAuction,ManagerRegistry $doctrine,$comment,$rating): Response
    {

        if($user){
            $review =new Review();


            $entityManager=$doctrine->getManager();
            $review->setComment($comment);
            $review->setRating($rating);
            $review->setReviewDate();
            $review->setReverseAuction($reverseAuction);
            $review->setSubscriber($user);



            $entityManager->persist( $review);
            $entityManager->flush();

            return $this->render('usern/index.html.twig', [
                'controller_name' => 'UsernController',
            ]);
        }
        else{
            return new Response('echec');

        }




    }





    #[Route('/usern/Auctionromm/{user}/{auctionRoom}', name: 'usern.Auctionromm',methods: ['PUT','HEAD'])]
    public function Auctionromm(Usern $user,AuctionRoom $auctionRoom,ManagerRegistry $doctrine,Request $request): JsonResponse
    {

        if($auctionRoom)
        {
            if($user){




                $data=$request->getContent();;

                $obj = json_decode($data,true);
                $entityManager=$doctrine->getManager();
                $auctionRoom->addUser($user);

                $auctionRoom->setToken($user);
                if(!$auctionRoom->getReverseAuction())
                {   $auctionRoom->setLastPrice( $auctionRoom->getLastPrice()+(int)$obj['lastprice']);

                }else{
                    $auctionRoom->setLastPrice((int)$obj['lastprice']);
                }

                $entityManager->persist( $auctionRoom);
                $entityManager->flush();

                $response=array(

                    'code'=>0,
                    'message'=>' updated!',
                    'errors'=>null,
                    'result'=>null

                );

                return new JsonResponse($response,200);
            }
            else{
                $response=array(

                    'code'=>1,
                    'message'=>' Not found !',
                    'errors'=>null,
                    'result'=>null

                );

                return new JsonResponse($response, Response::HTTP_NOT_FOUND);

            }

        }


        else{
            $response=array(

                'code'=>1,
                'message'=>' Not found !',
                'errors'=>null,
                'result'=>null

            );

            return new JsonResponse($response, Response::HTTP_NOT_FOUND);

        }

    }


    #[Route('/usern/leaveAuctionromm/{user}/{auctionRoom}', name: 'usern.leaveAuctionromm',methods: ['PUT','HEAD'])]

    public function leaveAuctionromm(Usern $user,AuctionRoom $auctionRoom,ManagerRegistry $doctrine): Response
    {


        if($auctionRoom->getToken() !== $user){

            $entityManager=$doctrine->getManager();
            $auctionRoom->removeUser($user);

            $entityManager->persist( $auctionRoom);
            $entityManager->flush();

            $response=array(

                'code'=>0,
                'message'=>' Ok !',
                'errors'=>null,
                'result'=>null

            );

            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }else
        {
            $response=array(

                'code'=>1,
                'message'=>' Not found !',
                'errors'=>null,
                'result'=>null

            );

            return new JsonResponse($response, Response::HTTP_NOT_FOUND);

        }





    }

    #[Route('/usern/Sendmail', name: 'usern.Sendmail')]

    public function Sendmail(    MailerService $mailer): Response
    {


        $mailer->sendEmail(content: "Welcom");


        $response=array(

            'code'=>0,
            'message'=>' Success!',
            'errors'=>null,
            'result'=>null

        );

        return new JsonResponse($response, Response::HTTP_NOT_FOUND);

    }



}
