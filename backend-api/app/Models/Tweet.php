<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    protected $table = 'tweets';
    protected $fillable = [
        'user_id',
        'tweet',
        'media_url',
        'parent_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function like()
    {
        return $this->belongsToMany(Tweet::class, "likes", "tweet_id", "user_id");
    }
}
