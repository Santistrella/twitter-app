<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JWTMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if( !$user ) throw new Exception('User Not Found');
        } catch (Exception $e) {
            if ($e instanceof TokenInvalidException){
                return response()->json([
                        'data' => null,
                        'status' => false,
                        'err_' => [
                            'message' => 'Token Invalid',
                        ]
                    ]
                    , 500);
            }else if ($e instanceof TokenExpiredException){
                return response()->json([
                        'data' => null,
                        'status' => false,
                        'err_' => [
                            'message' => 'Token Expired',
                        ]
                    ]
                    , 500);
            }
            else{
                if( $e->getMessage() === 'User Not Found') {
                    return response()->json([
                            "err_" => [
                                "message" => "User Not Found",
                            ]
                        ]
                        , 500); }
                return response()->json([
                        'err_' => [
                            'message' => 'Authorization Token not found',
                        ]
                    ]
                    , 500);
            }
        }
        return $next($request);
    }
}
