<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Laboratorium;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @tags Laboratorium
 */
class LaboratoriumApiController extends Controller
{
    /**
     * Menampilkan daftar semua laboratorium.
     *
     * Endpoint ini mengembalikan daftar seluruh profil laboratorium terpadu,
     * mendukung pencarian dan filter per fakultas/status.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Laboratorium::query()->with('assets');

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('nama', 'like', "%{$search}%")
                    ->orWhere('kode', 'like', "%{$search}%")
                    ->orWhere('fakultas', 'like', "%{$search}%")
                    ->orWhere('kepala_lab', 'like', "%{$search}%");
            });
        }

        if ($request->filled('fakultas')) {
            $query->where('fakultas', $request->input('fakultas'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $laboratoriums = $query->latest()->paginate($request->input('per_page', 15));

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar laboratorium berhasil diambil.',
            'data' => $laboratoriums,
        ]);
    }

    /**
     * Membuat data laboratorium baru.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:50|unique:laboratoriums,kode',
            'nama' => 'required|string|max:255',
            'fakultas' => 'nullable|string|max:255',
            'gedung' => 'nullable|string|max:255',
            'ruangan' => 'nullable|string|max:255',
            'kepala_lab' => 'nullable|string|max:255',
            'laboran' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'kapasitas' => 'nullable|integer|min:1',
            'status' => 'nullable|in:Aktif,Pemeliharaan,Nonaktif',
        ]);

        $laboratorium = Laboratorium::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Laboratorium berhasil ditambahkan.',
            'data' => $laboratorium,
        ], 201);
    }

    /**
     * Menampilkan detail satu laboratorium.
     */
    public function show(Laboratorium $laboratorium): JsonResponse
    {
        $laboratorium->load('assets');

        return response()->json([
            'status' => 'success',
            'message' => 'Detail laboratorium berhasil diambil.',
            'data' => $laboratorium,
        ]);
    }

    /**
     * Memperbarui data laboratorium.
     */
    public function update(Request $request, Laboratorium $laboratorium): JsonResponse
    {
        $validated = $request->validate([
            'kode' => 'sometimes|required|string|max:50|unique:laboratoriums,kode,' . $laboratorium->id,
            'nama' => 'sometimes|required|string|max:255',
            'fakultas' => 'nullable|string|max:255',
            'gedung' => 'nullable|string|max:255',
            'ruangan' => 'nullable|string|max:255',
            'kepala_lab' => 'nullable|string|max:255',
            'laboran' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'kapasitas' => 'nullable|integer|min:1',
            'status' => 'nullable|in:Aktif,Pemeliharaan,Nonaktif',
        ]);

        $laboratorium->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data laboratorium berhasil diperbarui.',
            'data' => $laboratorium,
        ]);
    }

    /**
     * Menghapus data laboratorium.
     */
    public function destroy(Laboratorium $laboratorium): JsonResponse
    {
        $laboratorium->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Laboratorium berhasil dihapus.',
        ]);
    }
}
