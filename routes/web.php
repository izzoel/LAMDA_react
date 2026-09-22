<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
Route::inertia('dashboard', 'dashboard')->name('dashboard');
Route::inertia('laboratorium/profil', 'laboratorium/profil')->name('laboratorium.profil');
Route::inertia('laboratorium/aset', 'laboratorium/aset')->name('laboratorium.aset');
// });

require __DIR__.'/settings.php';
