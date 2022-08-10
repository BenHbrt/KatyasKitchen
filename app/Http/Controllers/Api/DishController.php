<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dish;
use App\Models\Ingredient;

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
                    ->select('id', 'name', 'heading', 'method', 'notes', 'pic_name', 'source', 'type_id')
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
        if ($request->image != "null") {
            $newImageName = time() . "-". $request->image->getClientOriginalName();
            $request->image->move(public_path('img/dishes'), $newImageName);
        } else {
            $newImageName = "Bakery.png";
        }
        
        $dish = new Dish;

        $values = json_decode($request->values);
        

        $dish->name = $values->name;
        $dish->type_id = $values->type_id;
        $dish->heading = $values->heading;
        $dish->source = $values->source;
        $dish->method = $values->method;
        $dish->notes = $values->notes;
        $dish->pic_name = $newImageName;
        $dish->save();

        foreach($values->ingredients as $ingredientItem) {
            $ingredient = new Ingredient;
            $ingredient->ingredient = $ingredientItem->ingredient;
            $ingredient->dish_id = $dish->id;
            $ingredient->amount = $ingredientItem->amount;
            $ingredient->unit = $ingredientItem->unit;
            $ingredient->save();
        }

        return 'worked';
    }
    
    public function edit(Request $request)
    {
        $values = json_decode($request->values);

        $dish = Dish::findOrFail($values->id);
        $ingredientslist = Ingredient::where("dish_id", "=", $values->id)
                                    ->get();
        foreach($ingredientslist as $ing) {
            $ing->delete();
        }

        if ($request->image != "null") {
            $newImageName = time() . "-". $request->image->getClientOriginalName();
            $request->image->move(public_path('img/dishes'), $newImageName);
            $dish->pic_name = $newImageName;
        }

        $dish->name = $values->name;
        $dish->type_id = $values->type_id;
        $dish->heading = $values->heading;
        $dish->source = $values->source;
        $dish->method = $values->method;
        $dish->notes = $values->notes;
        $dish->save();

        foreach($values->ingredients as $ingredientItem) {
            $ingredient = new Ingredient;
            $ingredient->ingredient = $ingredientItem->ingredient;
            $ingredient->dish_id = $dish->id;
            $ingredient->amount = $ingredientItem->amount;
            $ingredient->unit = $ingredientItem->unit;
            $ingredient->save();
        }

        return 'worked';
    }

    public function indexNames()
    {
        $dishes = Dish::select('id', 'name')
                    ->orderBy('name')
                    ->with('ingredients')       
                    ->get();

        return $dishes;
    }
}

