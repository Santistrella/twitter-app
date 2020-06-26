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
    ];
    /*
    public function user()
    {
        return $this->belongsTo('App\Models\Users');
    }
    */
}
