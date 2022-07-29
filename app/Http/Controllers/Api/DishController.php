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

    public function dish($id)
    {
        $dish = Dish::where('id', '=', $id)
                    ->select('id', 'name', 'heading', 'method', 'notes', 'pic_name', 'source')
                    ->with('ingredients:dish_id,ingredient,amount,unit')       
                    ->get();

        return $dish;
    }

    public function destroy(Request $request)
    {
        $dish = Dish::findOrFail($request->dishID);

        $dish->delete();
    }

    
    public function create(Request $request)
    {
        $dish = new Dish;

        $values = json_decode($request->values);
        $newImageName = time() . "-". $request->image->getClientOriginalName();

        $dish->name = $values->name;
        $dish->type_id = $values->type_id;
        $dish->heading = $values->heading;
        $dish->source = $values->source;
        $dish->method = $values->method;
        $dish->notes = $values->notes;
        $dish->pic_name = $newImageName;
        $dish->save();

        $request->image->move(public_path('img/dishes'), $newImageName);

        return 'worked';
    }
    
}

