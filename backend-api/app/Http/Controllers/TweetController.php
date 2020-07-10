<?php


namespace App\Http\Controllers;

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
        $tweetValidator = Validator::make($data, [
            'user_id' => ['required', 'integer', 'max:11'],
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
        $tweet = Tweet::create([
            'user_id' => $data['user_id'],
            'tweet' => $data['tweet'],
            'media_url' => $data['media_url']
        ]);
        return response()->json($tweet);
    }
    // FIND TWEET BY USER ID
    public function findTweetByUserId($user_id) {

        $tweet = Tweet::where('user_id', $user_id)->get();

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
        $tweet = Tweet::all();
        return response()->json($tweet);
    }
    // FIND TWEET BY TWEET ID
    public function findTweetById($id) {
        $tweet = Tweet::where('id', $id)->first();

        return response()->json($tweet);
    }

}
