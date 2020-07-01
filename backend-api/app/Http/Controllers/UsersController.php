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
            'email' => $data['email'],
            'password' => Hash::make($request->newPassword),
        ]);

        $user->save();

        return response() ->json($user);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|unique:posts|max:255',
            'password' => 'required',
        ]);
    }

    public function findAll() {
        $users = User::all();

        return response() ->json($users);
    }

    public function findById($id) {
        $users = User::where('id', $id) ->first();

        return response() ->json($users);
    }

    public function findPins($id) {
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
