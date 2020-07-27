<?php


namespace App\Models;


use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Followers extends Authenticatable implements JWTSubject
{
    protected $table = 'followers';

    protected $fillable = [
        'user_id',
        'following',
    ];

    public function follow()
    {
        return $this->hasOne(User::class);
    }

}
