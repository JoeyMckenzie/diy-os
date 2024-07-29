<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Jenssegers\Optimus\Optimus;

final class OrderController extends Controller
{
    public function __construct(private readonly Optimus $optimus) {}

    public function index(): Response
    {
        $orders = request()->user()?->orders()->paginate(10);

        return Inertia::render('orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function show(Order $order): Response
    {
        return Inertia::render('orders/Show', [
            'orderId' => $this->optimus->encode($order->id),
            'order' => $order,
        ]);
    }

    public function destroy(Order $order): RedirectResponse
    {
        $order->delete();

        return redirect()->route('orders.index');
    }

    public function store(Request $request): Response
    {
        return Inertia::render('orders/Store');
    }

    public function create(): Response
    {
        return Inertia::render('orders/Create');
    }
}
