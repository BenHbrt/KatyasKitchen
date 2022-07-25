<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ingredient;
use DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredients')->truncate();

        $ingredients = [
            [
                'dish_id' => 1,
                'ingredient' => 'Minced beef',
                'amount' => 400,
                'unit' => 'g'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Onion',
                'amount' => 1,
                'unit' => 'each'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Carrot',
                'amount' => 1,
                'unit' => 'each'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Mushrooms',
                'amount' => 100,
                'unit' => 'g'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Chopped Tomatoes',
                'amount' => 1,
                'unit' => 'tin'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Tomato Puree',
                'amount' => 2,
                'unit' => 'tbsp'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Garlic',
                'amount' => 2,
                'unit' => 'clove'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Dried Basil',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Beef Stock',
                'amount' => 150,
                'unit' => 'ml'
            ], [
                'dish_id' => 1,
                'ingredient' => 'Olive Oil',
                'amount' => 2,
                'unit' => 'tbsp'
            ], [
                'dish_id' => 2,
                'ingredient' => 'Yest',
                'amount' => 10,
                'unit' => 'g'
            ], [
                'dish_id' => 2,
                'ingredient' => 'Flour',
                'amount' => 500,
                'unit' => 'g'
            ], [
                'dish_id' => 2,
                'ingredient' => 'Salt',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 2,
                'ingredient' => 'Sugar',
                'amount' => 20,
                'unit' => 'g'
            ], [
                'dish_id' => 2,
                'ingredient' => 'Water',
                'amount' => 500,
                'unit' => 'ml'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Minced beef',
                'amount' => 400,
                'unit' => 'g'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Onion',
                'amount' => 1,
                'unit' => 'each'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Red Pepper',
                'amount' => 1,
                'unit' => 'each'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Mushrooms',
                'amount' => 100,
                'unit' => 'g'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Chopped Tomatoes',
                'amount' => 1,
                'unit' => 'tin'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Tomato Puree',
                'amount' => 2,
                'unit' => 'tbsp'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Garlic',
                'amount' => 2,
                'unit' => 'clove'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Ground Cumin',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Hot Chilli Powder',
                'amount' => 2,
                'unit' => 'tsp'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Sweet Chilli Powder',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Majoram',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Beef Stock',
                'amount' => 150,
                'unit' => 'ml'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Olive Oil',
                'amount' => 2,
                'unit' => 'tbsp'
            ], [
                'dish_id' => 3,
                'ingredient' => 'Ground Cumin',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 4,
                'ingredient' => 'Chicken Brest',
                'amount' => 500,
                'unit' => 'g'
            ], [
                'dish_id' => 4,
                'ingredient' => 'Flour',
                'amount' => 100,
                'unit' => 'g'
            ], [
                'dish_id' => 4,
                'ingredient' => 'Egg',
                'amount' => 2,
                'unit' => 'each'
            ], [
                'dish_id' => 4,
                'ingredient' => 'Breadcrumbs',
                'amount' => 100,
                'unit' => 'g'
            ], [
                'dish_id' => 4,
                'ingredient' => 'Sunflower Oil',
                'amount' => 100,
                'unit' => 'ml'
            ], [
                'dish_id' => 4,
                'ingredient' => 'Sweet Chilli Powder',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Banana',
                'amount' => 3,
                'unit' => 'each'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Butter',
                'amount' => 76,
                'unit' => 'g'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Baking Soda',
                'amount' => 0.5,
                'unit' => 'tsp'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Salt',
                'amount' => 0.25,
                'unit' => 'tsp'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Sugar',
                'amount' => 100,
                'unit' => 'g'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Egg',
                'amount' => 1,
                'unit' => 'each'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Vanilla Extract',
                'amount' => 1,
                'unit' => 'tsp'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Flour',
                'amount' => 205,
                'unit' => 'tsp'
            ], [
                'dish_id' => 5,
                'ingredient' => 'Chopped Walnuts',
                'amount' => 100,
                'unit' => 'g'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Chickpeas',
                'amount' => 1,
                'unit' => 'tin'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Lemon',
                'amount' => 1,
                'unit' => 'each'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Tahina',
                'amount' => 60,
                'unit' => 'ml'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Garlic',
                'amount' => 1,
                'unit' => 'clove'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Olive Oil',
                'amount' => 30,
                'unit' => 'ml'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Ground Cumin',
                'amount' => 0.5,
                'unit' => 'tsp'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Salt',
                'amount' => 0.25,
                'unit' => 'tsp'
            ], [
                'dish_id' => 6,
                'ingredient' => 'Water',
                'amount' => 30,
                'unit' => 'ml'
            ]
        ];

        foreach($ingredients as $ingredientex) {
            $ingredient = new Ingredient;
            
            $ingredient->dish_id = $ingredientex['dish_id'];
            $ingredient->ingredient = $ingredientex['ingredient'];
            $ingredient->amount = $ingredientex['amount'];
            $ingredient->unit = $ingredientex['unit'];

            $ingredient->save();
        }
    }
}