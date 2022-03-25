<?php

namespace App\Repository;

use App\Entity\ReverseAuction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ReverseAuction|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReverseAuction|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReverseAuction[]    findAll()
 * @method ReverseAuction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReverseAuctionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReverseAuction::class);
    }

    // /**
    //  * @return ReverseAuction[] Returns an array of ReverseAuction objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ReverseAuction
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
