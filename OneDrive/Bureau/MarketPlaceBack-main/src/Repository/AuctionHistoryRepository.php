<?php

namespace App\Repository;

use App\Entity\AuctionHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AuctionHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method AuctionHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method AuctionHistory[]    findAll()
 * @method AuctionHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AuctionHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AuctionHistory::class);
    }

    // /**
    //  * @return AuctionHistory[] Returns an array of AuctionHistory objects
    //  */
    /*
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
    */

    /*
    public function findOneBySomeField($value): ?AuctionHistory
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
