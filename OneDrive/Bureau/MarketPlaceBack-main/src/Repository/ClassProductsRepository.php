<?php

namespace App\Repository;

use App\Entity\ClassProducts;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ClassProducts|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClassProducts|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClassProducts[]    findAll()
 * @method ClassProducts[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClassProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClassProducts::class);
    }

    // /**
    //  * @return ClassProducts[] Returns an array of ClassProducts objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ClassProducts
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
