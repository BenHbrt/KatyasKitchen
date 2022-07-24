<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Type;
use DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->truncate();

        $types = [
            "Asian",
            "European",
            "Baking",
            "Dessert",
            "Soup",
            "Other"  
        ];

        foreach($types as $typeex) {
            $type = new Type;

            $type->name = $typeex;
            $type->save();
        } 
    }
}
