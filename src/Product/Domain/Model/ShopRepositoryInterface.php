<?php
namespace Affilicious\Product\Domain\Model;

use Affilicious\Common\Domain\Model\RepositoryInterface;

if(!defined('ABSPATH')) exit('Not allowed to access pages directly.');

interface ShopRepositoryInterface extends RepositoryInterface
{
    /**
     * Find a shop by the given ID
     *
     * @since 0.3
     * @param int $shopId
     * @return Shop|null
     */
    public function findById($shopId);

    /**
     * Find all shops
     *
     * @since 0.3
     * @return Shop[]
     */
    public function findAll();
}
