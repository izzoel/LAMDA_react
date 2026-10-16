<?php

use App\Http\Controllers\Api\AssetApiController;
use App\Http\Controllers\Api\FakultasApiController;
use App\Http\Controllers\Api\LaboratoriumApiController;
use App\Http\Controllers\Api\OrganisasiApiController;
use App\Http\Controllers\Api\SopApiController;
use App\Http\Controllers\Api\UserApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - LAMDA
|--------------------------------------------------------------------------
| Seluruh endpoint RESTful API terintegrasi dengan generator OpenAPI Scramble.
| Dokumentasi interaktif dapat diakses di: /docs/api
*/

Route::prefix('v1')->group(function () {
    // 1. Laboratorium CRUD
    Route::apiResource('laboratoriums', LaboratoriumApiController::class);

    // 2. Aset & Inventaris CRUD
    Route::apiResource('assets', AssetApiController::class);

    // 3. Standar Operasional Prosedur (SOP) CRUD
    Route::apiResource('sops', SopApiController::class);

    // 4. Struktur Organisasi CRUD
    Route::apiResource('organisasi', OrganisasiApiController::class);

    // 5. User Management CRUD
    Route::apiResource('users', UserApiController::class);

    // 6. Fakultas CRUD
    Route::apiResource('fakultas', FakultasApiController::class)->parameters(['fakultas' => 'fakultas']);
});
