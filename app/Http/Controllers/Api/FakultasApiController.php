<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Fakultas;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @tags Fakultas
 */
class FakultasApiController extends Controller
{
    /**
     * Menampilkan daftar semua fakultas.
     *
     * Endpoint ini mengembalikan daftar fakultas yang terdaftar,
     * mendukung pencarian berdasarkan nama fakultas dan opsi pagination.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Fakultas::query();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where('fakultas', 'like', "%{$search}%");
        }

        if ($request->boolean('all')) {
            $fakultas = $query->orderBy('fakultas', 'asc')->get();
        } else {
            $fakultas = $query->latest()->paginate($request->input('per_page', 15));
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar fakultas berhasil diambil.',
            'data' => $fakultas,
        ]);
    }

    /**
     * Menyimpan data fakultas baru.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'fakultas' => 'required|string|max:255|unique:fakultas,fakultas',
        ], [
            'fakultas.required' => 'Nama fakultas wajib diisi.',
            'fakultas.unique' => 'Nama fakultas sudah terdaftar.',
            'fakultas.max' => 'Nama fakultas maksimal 255 karakter.',
        ]);

        $fakultas = Fakultas::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Fakultas berhasil ditambahkan.',
            'data' => $fakultas,
        ], 201);
    }

    /**
     * Menampilkan detail satu fakultas.
     */
    public function show(Fakultas $fakultas): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Detail fakultas berhasil diambil.',
            'data' => $fakultas,
        ]);
    }

    /**
     * Memperbarui data fakultas.
     */
    public function update(Request $request, Fakultas $fakultas): JsonResponse
    {
        $validated = $request->validate([
            'fakultas' => 'required|string|max:255|unique:fakultas,fakultas,' . $fakultas->id,
        ], [
            'fakultas.required' => 'Nama fakultas wajib diisi.',
            'fakultas.unique' => 'Nama fakultas sudah terdaftar.',
            'fakultas.max' => 'Nama fakultas maksimal 255 karakter.',
        ]);

        $fakultas->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data fakultas berhasil diperbarui.',
            'data' => $fakultas,
        ]);
    }

    /**
     * Menghapus data fakultas.
     */
    public function destroy(Fakultas $fakultas): JsonResponse
    {
        $fakultas->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Fakultas berhasil dihapus.',
        ]);
    }
}
