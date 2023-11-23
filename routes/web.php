<?php

use App\Http\Controllers\ProfileController;
use App\Models\Movie;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard2', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/movies', function () {
//     return Inertia::render('Movies', [
//         'Movies' => Movie::all()
//     ]);
//     // return Movie::all();
// })->middleware(['auth', 'verified'])->name('movies');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
});

Route::prefix('/')->middleware(['auth','user'])->name('user.')->group(function () {
    require __DIR__.'/user.php';
});

Route::prefix('/')->middleware(['auth','admin'])->name('admin.')->group(function () {
    require __DIR__.'/admin.php';
});

require __DIR__.'/auth.php';
