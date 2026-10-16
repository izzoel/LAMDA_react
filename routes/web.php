<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
Route::inertia('dashboard', 'dashboard')->name('dashboard');
Route::inertia('laboratorium/profil', 'laboratorium/profil/index')->name('laboratorium.profil');
Route::inertia('laboratorium/aset', 'laboratorium/aset/index')->name('laboratorium.aset');
Route::inertia('laboratorium/sop', 'laboratorium/sop/index')->name('laboratorium.sop');
Route::inertia('administrasi/struktur', 'administrasi/struktur/index')->name('administrasi.struktur');
Route::inertia('administrasi/user', 'administrasi/user/index')->name('administrasi.user');
// });

require __DIR__.'/settings.php';
