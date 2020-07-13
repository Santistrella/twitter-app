<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Tymon\JWTAuth\Facades\JWTAuth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function getAuthUser(){
        return JWTAuth::parseToken()->authenticate();
    }

    protected function errorResponse($message, $errorCode){

        $error = [
            "message" => $message,
            "code" => $errorCode
        ];
        return response("", $errorCode)->json($error);
    }
}
