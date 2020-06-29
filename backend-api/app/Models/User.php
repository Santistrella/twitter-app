<?php


namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'name',
        'surname',
        'email',
        'password',
    ];

    protected function users() {
        return $this->hasMany(Tweet::class);
    }
}
