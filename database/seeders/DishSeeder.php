<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Dish;
use DB;

class DishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('dishes')->truncate();

        $dishes = [
            [
                'type_id' => 2,
                'name' => 'Spaghetti Bolognese',
                'heading' => 'An easy to prepare dish',
                'method' => 'Just cook it.',
                'pic_name' => 'Example1',
                'source' => "My mother's wisdom",
                'notes' => ""
            ], [
                'type_id' => 3,
                'name' => 'Bread',
                'heading' => 'A simple, basic bread',
                'method' => 'Just kneed it, let it rest, and bake it',
                'pic_name' => 'Example2',
                'source' => "Somewhere on the internet",
                'notes' => ""
            ], [
                'type_id' => 6,
                'name' => 'Chilli con Carne',
                'heading' => 'Spicy Mexican stuff',
                'method' => 'Just cook it.',
                'pic_name' => 'Example3',
                'source' => "The internet and experimentation",
                'notes' => ""
            ], [
                'type_id' => 2,
                'name' => 'Schntizel',
                'heading' => 'Central European stuff',
                'method' => 'Just flour it, egg it, bread it, and fry it.',
                'pic_name' => 'Example4',
                'source' => "Centuries of Czech/German tradition",
                'notes' => ""
            ], [
                'type_id' => 3,
                'name' => 'Banana Bread',
                'heading' => 'Great use for manky bananas',
                'method' => 'Just bake it.',
                'pic_name' => 'Example5',
                'source' => "https://www.simplyrecipes.com/recipes/banana_bread/",
                'notes' => ""
            ], [
                'type_id' => 6,
                'name' => 'Hummus',
                'heading' => 'Yum yum!',
                'method' => 'Stick it all in a blender.... and blend!',
                'pic_name' => 'Example6',
                'source' => "Experimentation during the viral apocalypse",
                'notes' => ""
            ],
        ];

        foreach($dishes as $dishex) {
            $dish = new Dish;

            $dish->type_id = $dishex['type_id'];
            $dish->name = $dishex['name'];
            $dish->heading = $dishex['heading'];
            $dish->method = $dishex['method'];
            $dish->pic_name = $dishex['pic_name'];
            $dish->source = $dishex['source'];
            $dish->notes = $dishex['notes'];

            $dish->save();
        }
    }
}