<?php

use App\Http\Controllers\Admin\AdminController;
use App\Models\Movie;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
Route::get('/movies', [AdminController::class, 'movies'])->name('movies');
Route::get('/movie/new', [AdminController::class, 'formNewMovie'])->name('new.movie');
Route::patch('/movie/save', [AdminController::class, 'saveMovie'])->name('save.movie');
Route::get('/movie/{id}', [AdminController::class, 'detailMovie'])->name('detail.movie');
