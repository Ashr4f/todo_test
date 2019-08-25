<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Todos extends Controller
{
    public function all()
    {
        $todos = Todos::all();
        return response()->json([
            "todos" => $todos
        ], 200);
    }
    public function get($id)
    {
        $todo = Todos::whereId($id)->first();
        return response()->json([
            "todo" => $todo
        ], 200);
    }
    public function new(Request $request)
    {
        $todo = Todos::create($request->only(["title", "body", "list"]));
        return response()->json([
            "todo" => $todo
        ], 200);
    }

    public function delete($id)
    {
        $todo = Todos::find($id);
        $todo->delete();
        return response()->json('Todo has been deleted successfully', 200);
    }
}