<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function index ()
    {
        return Inertia::render('Dashboard');
    }

    public function movies()
    {
        return Inertia::render('Movies', [
            'movies' => Movie::all()
        ]);
    }

    public function formNewMovie()
    {
        return Inertia::render('Movies/NewMovies', [
            'movies' => Movie::all()
        ]);
    }

    public function saveMovie(Request $request)
    {
        // return $request->all();
        $movie = new Movie();
        $movie->title = $request->title;
        $movie->genre = $request->genre;
        $movie->year = $request->year;
        $movie->save();

        return Redirect::route('admin.movies');
    }

    public function detailMovie(Movie $id)
    {
        // return Inertia::render('Movies/DetailMovie', [
        //     'movie' => $id
        // ]);
        dd($id);
    }
    
}
