<?php

namespace App\Repository;

use App\Entity\Subscriptiontypes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Subscriptiontypes|null find($id, $lockMode = null, $lockVersion = null)
 * @method Subscriptiontypes|null findOneBy(array $criteria, array $orderBy = null)
 * @method Subscriptiontypes[]    findAll()
 * @method Subscriptiontypes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubscriptiontypesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Subscriptiontypes::class);
    }

    // /**
    //  * @return Subscriptiontypes[] Returns an array of Subscriptiontypes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Subscriptiontypes
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
