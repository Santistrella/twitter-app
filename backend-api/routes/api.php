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

// CREATE TWEET
Route::post('/tweet','TweetController@create');
// FIND TWEET BY USER ID
Route::get('/tweet/user/{user_id}','TweetController@findTweetByUserId');
// DELETE TWEET
Route::delete('/tweet/{id}','TweetController@delete');
// FIND ALL TWEETS
Route::get('/tweet/','TweetController@findAll');
// FIND TWEET BY TWEET ID
Route::get('/tweet/{id}','TweetController@findTweetById');
