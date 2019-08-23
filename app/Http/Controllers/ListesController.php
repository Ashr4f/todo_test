<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\ListesCollection;

use App\listes;

class ListesController extends Controller
{


    public function store(Request $request)
    {
        $list = new listes([

            'nameList' => $request->get('nameList'),

        ]);

        $list->save();

        return response()->json('success');

    }

    public function list()
    {
        return new ListesCollection(listes::all());
    }

    public function edit($id)
    {
       $list = listes::find($id);
        return response()->json($list);
    }

    public function update($id, Request $request)
    {
        $list = listes::find($id);
        $list->update($request->all());

        return response()->json('successfully updated');
    }

    public function delete($id)
    {
        $list = listes::find($id);
        $list->delete();

        return response()->json('successfully deleted');

    }


    
}