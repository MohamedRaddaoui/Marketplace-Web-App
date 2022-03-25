<?php

namespace App\Repository;

use App\Entity\AuctionRoom;
use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AuctionRoom|null find($id, $lockMode = null, $lockVersion = null)
 * @method AuctionRoom|null findOneBy(array $criteria, array $orderBy = null)
 * @method AuctionRoom[]    findAll()
 * @method AuctionRoom[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AuctionRoomRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AuctionRoom::class);
    }

    public function findOneBySomeField(ManagerRegistry $doctrine)
    {
        $cath = new Category();
        $entityManager=$doctrine->getManager();

        $queryBuilder = $entityManager->createQueryBuilder();
        $queryBuilder
            ->update('App\Entity\Category', 'u')
            ->set('u.name', 'Telephone')
        ->getQuery();
    }

   /**
    * @return AuctionRoom[] Returns an array of AuctionRoom objects
    */

    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }


    /*
    public function findOneBySomeField($value): ?AuctionRoom
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */



}
