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

//CREATE USER
Route::post('/user', 'UsersController@create');
//GET ALL USERS
Route::get('/user', 'UsersController@findAll');
//GET ONE USER BY ID
Route::get('/user/{id}', 'UsersController@findById');
//UPDATE ONE USER BY ID
Route::put('/user/{id}', 'UsersController@update');
//DELETE ONE USER BY ID
Route::delete('/user/{id}', 'UsersController@delete');

// REGISTER AND LOGIN AND LOGOUT AUTHENTICATED USERS
Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

// GROUP ROUTES JWT
Route::group([

    'middleware' => 'auth.jwt',

], function ($router) {

    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::patch('/user/{id}', 'UsersController@update');

    // CREATE TWEET
    Route::post('/tweet','TweetController@create');

});

// FIND TWEET BY USER ID
Route::get('/tweet/user/{user_id}','TweetController@findTweetByUserId');
// DELETE TWEET
Route::delete('/tweet/{id}','TweetController@delete');
// FIND ALL TWEETS
Route::get('/tweet','TweetController@findAll');
// FIND TWEET BY TWEET ID
Route::get('/tweet/{id}','TweetController@findTweetById');

// CREATE LIKE BY USER ID
Route::post('/like','LikesController@create');
// FIND LIKES
Route::get('/like','LikesController@findAll');
// FIND LIKES BY TWEET ID
Route::get('/like/{id}','LikesController@findLikeByTweetId');
// FIND USER ID BY TWEET ID
Route::get('/like/user/{id}','LikesController@findUserIdByTweetId');
// DELETE LIKE BY TWEET ID
Route::delete('/like/tweet/{id}','LikesController@delete');
