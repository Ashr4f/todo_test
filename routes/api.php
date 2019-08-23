<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Items
Route::post('/item/createItem', 'itemController@store');
Route::get('/item/editItem/{id}', 'itemController@edit');
Route::post('/item/updateItem/{id}', 'itemController@update');
Route::delete('/item/deleteItem/{id}', 'itemController@delete');
Route::get('/item', 'itemController@list');


// Listes
Route::post('/list/createList', 'ListesController@store');
Route::get('/list/editList/{id}', 'ListesController@edit');
Route::post('/list/updateList/{id}', 'ListesController@update');
Route::delete('/list/deleteList/{id}', 'ListesController@delete');
Route::get('/list', 'ListesController@list');