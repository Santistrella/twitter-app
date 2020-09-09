<?php


namespace App\Http\Controllers;


use App\Models\Like;
use App\Models\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class LikesController extends Controller
{
    // CREATE LIKES - TESTED
    public function create(Request $request) {
        $data = $request->all();
        $user = $this->getAuthUser();
        $likesValidator = Validator::make($data, [
            'tweet_id' => ['required', 'integer'],
        ]);
        if($likesValidator->fails()) {
            $errors = $likesValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY; // ERROR 422
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }
        // CREATE A LIKE
        $like = Like::create([
            'user_id' => $user->id,
            'tweet_id' => $data['tweet_id'],
        ]);
        return response()->json($like);
    }
    // DELETE LIKE - TESTED
    public function delete($tweet_id) {
        $like = Like::where('tweet_id', $tweet_id) ->first();
        $like->delete();
        return response()->json("Like deleted");
    }
    // FIND ALL LIKES - TESTED
    public function findAll() {
        // $like = Like::orderBy('id','desc')->get();
        $like = Like::all();
        return response()->json($like);
    }
    // FIND LIKE BY TWEET ID
    public function findLikeByTweetId($tweet_id) {
        $likes = Like::where('tweet_id', $tweet_id)->get();
        $data = [
            "count" => sizeof($likes)
        ];
        return response()->json($data);
    }
    // FIND USER ID BY TWEET ID
    public function findUserIdByTweetId($tweet_id) {
        $user = $this->getAuthUser();
        $like = Like::where('tweet_id', $tweet_id)->where('user_id',$user->id)->first();
        return response()->json($like);
    }
}
