<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();
        $usersValidator = Validator::make($data, [
            'name' => ['required','string','max:255'],
            'surname' => ['required','string','max:255'],
            'email' => ['required','unique:users','regex:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i','string','max:195'],
            'password' => ['required','string','min:8'],
        ]);
        if($usersValidator->fails()) {
            $errors = $usersValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY; // ERROR 422
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }
        $user = User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'password' => Hash::make($request->newPassword)
        ]);
        $user->save();
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

    public function findUsers($id) {
        $users = User::where('id', $id) ->first();
        return response() ->json($users);
    }

    public function delete($id) {
        $user = User::where('id', $id) ->first();
        $user->delete();
        return response()->json("User deleted");
    }

    public function update(Request $request) {

        $user = $this->getAuthUser();
        $dataFromTheUserToUpdate = $request->all();
        $user->update($dataFromTheUserToUpdate);
        return response()->json($user);
    }
}
