<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = 'likes';
    protected $fillable = [
        'user_id',
        'tweet_id',
    ];

    public function user()
    {
        return $this->belongsToMany('App\Models\Users');
    }

    public function tweet()
    {
        return $this->belongsToMany('App\Models\Tweet');
    }
}
