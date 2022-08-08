<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Unit;
use DB;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->truncate();

        $units = [
            "each",
            "ml",
            "g",
            "tsp",
            "tbsp"  
        ];

        foreach($units as $unitex) {
            $unit = new Unit;

            $unit->unit = $unitex;
            $unit->save();
        } 
    }
}
