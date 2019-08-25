<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lists;

class ListsController extends Controller
{
    public function all()
    {
        $lists = Lists::all();
        return response()->json([
            "lists" => $lists
        ], 200);
    }
    public function get($id)
    {
        $list = Lists::whereId($id)->first();
        return response()->json([
            "list" => $list
        ], 200);
    }
    public function new(Request $request)
    {
        $list = Lists::create($request->only(["name", "user"]));
        return response()->json([
            "list" => $list
        ], 200);
    }

    public function update($id, Request $request)
    {
        $list = Lists::find($id);
        $list->update($request->all());
        
        return response()->json("List has been edited successfully", 200);
    }

    public function delete($id)
    {
        $list = Lists::find($id);
        $list->delete();
        return response()->json('List has been deleted successfully', 200);
    }
}