<?php

namespace App\Http\Controllers;

use App\Models\Createblog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CreateblogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogList = Createblog::get(['*', 'id as key']);
        // dd($blogList);
        $dataVar = 'Welcome Ramya';
        return Inertia::render('Newblog/BlogList', [
            'ramyaVar' => $dataVar,
            'allBlogs' => $blogList,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Newblog/CreateBlog', [
            'record' => new Createblog(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $requestData = $request->all();
        $data = Createblog::create($requestData);
        $data->save();

        return to_route('newblog.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Createblog $createblog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Createblog $createblog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Createblog $createblog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Createblog $createblog)
    {
        //
    }
}
