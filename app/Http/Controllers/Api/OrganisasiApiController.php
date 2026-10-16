<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Organisasi;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @tags Struktur Organisasi Laboratorium
 */
class OrganisasiApiController extends Controller
{
    /**
     * Menampilkan hierarki struktur organisasi laboratorium.
     *
     * Mengembalikan pohon struktur hierarki pimpinan, koordinator, dan pranata lab.
     */
    public function index(Request $request): JsonResponse
    {
        if ($request->boolean('tree', true)) {
            // Mengambil root node (pimpinan utama) beserta seluruh relasi rekursif
            $tree = Organisasi::whereNull('parent_id')
                ->with('children.children.children')
                ->first();

            return response()->json([
                'status' => 'success',
                'message' => 'Pohon hierarki organisasi berhasil diambil.',
                'data' => $tree,
            ]);
        }

        $list = Organisasi::latest()->paginate($request->input('per_page', 20));

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar personel organisasi berhasil diambil.',
            'data' => $list,
        ]);
    }

    /**
     * Menambahkan personel baru ke dalam struktur organisasi.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'parent_id' => 'nullable|exists:organisasis,id',
            'nama' => 'required|string|max:255',
            'nip' => 'nullable|string|max:50',
            'jabatan' => 'required|string|max:255',
            'level' => 'required|in:pimpinan,koordinator,sub_koordinator,laboran,staf',
            'divisi' => 'nullable|string|max:255',
            'laboratorium' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'telepon' => 'nullable|string|max:50',
            'status' => 'nullable|in:Aktif,Cuti,Tugas Belajar',
            'tupoksi' => 'nullable|array',
            'sertifikasi' => 'nullable|array',
        ]);

        $organisasi = Organisasi::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Personel organisasi berhasil ditambahkan.',
            'data' => $organisasi,
        ], 201);
    }

    /**
     * Menampilkan detail satu personel organisasi.
     */
    public function show(Organisasi $organisasi): JsonResponse
    {
        $organisasi->load(['parent', 'children']);

        return response()->json([
            'status' => 'success',
            'message' => 'Detail personel berhasil diambil.',
            'data' => $organisasi,
        ]);
    }

    /**
     * Memperbarui data personel organisasi.
     */
    public function update(Request $request, Organisasi $organisasi): JsonResponse
    {
        $validated = $request->validate([
            'parent_id' => 'nullable|exists:organisasis,id',
            'nama' => 'sometimes|required|string|max:255',
            'nip' => 'nullable|string|max:50',
            'jabatan' => 'sometimes|required|string|max:255',
            'level' => 'sometimes|required|in:pimpinan,koordinator,sub_koordinator,laboran,staf',
            'divisi' => 'nullable|string|max:255',
            'laboratorium' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'telepon' => 'nullable|string|max:50',
            'status' => 'nullable|in:Aktif,Cuti,Tugas Belajar',
            'tupoksi' => 'nullable|array',
            'sertifikasi' => 'nullable|array',
        ]);

        $organisasi->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data personel organisasi berhasil diperbarui.',
            'data' => $organisasi,
        ]);
    }

    /**
     * Menghapus personel dari struktur organisasi.
     */
    public function destroy(Organisasi $organisasi): JsonResponse
    {
        $organisasi->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Personel berhasil dihapus dari organisasi.',
        ]);
    }
}
