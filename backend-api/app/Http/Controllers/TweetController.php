<?php


namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    // CREATE TWEET - TESTED
    public function create(Request $request) {

        $data = $request->all();

        $user = $this->getAuthUser();
        $tweet = new Tweet($request->only(["tweet", "media_url"]));

        $user->tweets()->save($tweet);
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
        $tweet = Tweet::orderBy('id','desc')->get();
        //$tweet = Tweet::all();
        return response()->json($tweet);
    }
    // FIND TWEET BY TWEET ID
    public function findTweetById($id) {
        $tweet = Tweet::where('id', $id)->first();

        return response()->json($tweet);
    }

}
