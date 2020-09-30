<?php


namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Tweet;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class TweetController extends Controller
{
    // CREATE TWEET - TESTED
    public function create(Request $request) {
        $data = $request->all();
        $user = $this->getAuthUser();
        $data["user_id"] = $user->id;
        $tweetValidator = Validator::make($data, [
            'user_id' => ['required', 'integer'],
            'tweet' => [Rule::requiredIf(function () use ($data) {
                if (empty($data['media_url'])) {
                    return true; // REQUIRED
                } else {
                    return false; // NO REQUIRED
                }
            }),'string','max:280'],
            'media_url' => [Rule::requiredIf(function () use ($data) {
                if (empty($data['tweet'])) {
                    return true; // REQUIRED
                } else {
                    return false; // NO REQUIRED
                }
            }),'string','max:255'],
        ]);
        if($tweetValidator->fails()) {
            $errors = $tweetValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY; // ERROR 422
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }


        // CREATE A TWEET
        $tweet = Tweet::create($data);

        return response()->json($tweet);
    }
    // FIND TWEET BY USER ID
    public function findTweetByUserId($user_id) {

        $tweet = Tweet::with("user")->where('user_id', $user_id)->orderBy('id', 'desc')->get();

        return response()->json($tweet);
    }
    // DELETE TWEET - TESTED
    public function delete($id) {
        $tweet = Tweet::where('id', $id) ->first();
        $tweet->delete();
            return response()->json("Tweet deleted");
    }
    // FIND ALL TWEETS - TESTED
    public function findAll() {
        $tweets = Tweet::with("user")->orderBy('id','desc')->get();

        $user = $this->getAuthUser();
        foreach ($tweets as $tweet) {
            $tweet["isLiked"] = false;
;            if(!is_null($user)) {
                $like = Like::where("tweet_id", $tweet->id)->where("user_id", $user->id)->first();
                if (!is_null($like)) {
                    $tweet["isLiked"] = true;
                }
            }

            $likes = Like::where("tweet_id", $tweet->id)->get();
            $tweet["numLikes"] = sizeof($likes);
        }
        //$tweet = Tweet::all();
        return response()->json($tweets);
    }
    // FIND TWEET BY TWEET ID
    public function findTweetById($id) {
        $tweet = Tweet::where('id', $id)->first();

        return response()->json($tweet);
    }

}
