<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dish;

class DishController extends Controller
{
    public function index()
    {
        $dishes = Dish::select('id', 'name', 'heading', 'pic_name', 'type_id')
                    ->orderBy('name')
                    ->with('ingredients')       
                    ->get();

        return $dishes;
    }
}

