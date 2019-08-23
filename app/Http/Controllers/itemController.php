<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\itemCollection;

use App\item;

class itemController extends Controller
{


    public function store(Request $request)
    {

        $item = new Item([

            'title' => $request->get('title'),

            'body' => $request->get('body'),

            'idList' => $request->get('idList')

        ]);

  

        $item->save();

  

        return response()->json('success');

    }

    public function list()
    {
        return new itemCollection(Item::all());
    }

    public function edit($id)
    {
       $item = Item::find($id);
        return response()->json($item);
    }

    public function update($id, Request $request)
    {
        $item = Item::find($id);
        $item->update($request->all());

        return response()->json('successfully updated');
    }

    public function delete($id)
    {
        $item = Item::find($id);
        $item->delete();

        return response()->json('successfully deleted');

    }

}

