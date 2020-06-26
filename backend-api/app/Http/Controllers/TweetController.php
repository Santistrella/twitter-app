<?php


namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    // CREATE TWEET
    public function create(Request $request) {
        $data = $request->all();
        $tweet = Tweet::create([
            'user_id' => $data['user_id'],
            'tweet' => $data['tweet'],
            'media_url' => $data['media_url']
        ]);
        return response()->json($tweet);
    }
    /*
    // NOT TESTED
    // FIND TWEET BY USER ID
    public function findTweetByUserId(Request $request) {
        $tweet = Tweet::where('id', $id)->first();
        $users = $tweet->users;
        return response()->json($tweet);
    }
    */
    // DELETE TWEET
    public function delete($id) {
        $tweet = Tweet::where('id', $id) ->first();
        $tweet->delete();
        return response()->json("Tweet deleted");
    }
    // FIND ALL TWEETS
    public function findAll() {
        $tweet = Tweet::all();

        return response()->json($tweet);
    }
    // FIND TWEET BY TWEET ID
    public function findById($id) {
        $pin = Pin::where('id', $id)->first();

        return response()->json($pin);
    }

}
