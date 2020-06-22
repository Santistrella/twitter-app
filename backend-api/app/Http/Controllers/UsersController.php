<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller

{
    public function create(Request $request) {

        $data = $request->all();

        $user = User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'password' => Hash::make($data['password']),
            'email'=> $data['email']
        ]);

        return response() ->json($user);

    }

    public function findAll() {
        $users = User::all();

        return response() ->json($users);
    }

    public function findById($id) {
        $users = User::where('id', $id) ->first();

        return response() ->json($users);
    }

    public function findUser($id) {
        $users = User::where('id', $id) ->first();


        return response() ->json($users);
    }

    public function delete($id) {
        $user = User::where('id', $id) ->first();
        $user->delete();

        return response()->json("User deleted");
    }

    public function update(Request $request, $id) {
        $User = User::where('id', $id) ->first();

        $dataFromTheUserToUpdate = $request->all();

        $User->update($dataFromTheUserToUpdate);

        return response()->json($user);
    }
}
