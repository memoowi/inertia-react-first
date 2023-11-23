<?php

use App\Models\Movie;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->name('home');