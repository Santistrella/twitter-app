<?php


namespace App\Http\Controllers;


use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class LikesController
{
    // CREATE TWEET - TESTED
    public function create(Request $request) {
        $data = $request->all();
        $likesValidator = Validator::make($data, [
            'user_id' => ['required', 'integer', 'max:11'],
            'tweet_id' => ['required', 'integer'],
        ]);
        if($likesValidator->fails()) {
            $errors = $likesValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY; // ERROR 422
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }
        // CREATE A LIKE
        $like = Like::create([
            'user_id' => $data['user_id'],
            'tweet_id' => $data['tweet_id'],
        ]);
        return response()->json($like);
    }
    // DELETE LIKE - TESTED
    public function delete($id) {
        $like = Like::where('id', $id) ->first();
        $like->delete();
        return response()->json("Like deleted");
    }
    /*
    // FIND ALL LIKES - TESTED
    public function findAll() {
        // $like = Like::orderBy('id','desc')->get();
        $like = Like::all();
        return response()->json($like);
    }
    // FIND LIKE BY TWEET ID
    public function findLikeByTweetId($id) {
        $like = Tweet::where('id', $id)->first();
        return response()->json($like);
    }
    */
}
