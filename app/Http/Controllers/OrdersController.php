<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class OrdersController extends Controller
{
    public function index(): Response
    {
        $orders = request()->user()->orders()->paginate();

        return Inertia::render('orders/Index', [
            'orders' => $orders,
        ]);
    }
}
