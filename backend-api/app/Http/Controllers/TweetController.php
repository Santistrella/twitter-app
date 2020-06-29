<?php


namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    // CREATE TWEET - TESTED
    public function create(Request $request) {

        $data = $request->all();

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
