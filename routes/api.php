<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/types/index', ['App\Http\Controllers\Api\TypeController', 'index']);
Route::get('/units/index', ['App\Http\Controllers\Api\UnitController', 'index']);
Route::get('/dishes/index', ['App\Http\Controllers\Api\DishController', 'index']);
Route::post('/dishes/delete', ['App\Http\Controllers\Api\DishController', 'destroy']);
Route::post('/dishes/create', ['App\Http\Controllers\Api\DishController', 'create']);
Route::post('/dishes/edit/{id}', ['App\Http\Controllers\Api\DishController', 'edit']);
Route::get('/dishes/{id}', ['App\Http\Controllers\Api\DishController', 'dish']);