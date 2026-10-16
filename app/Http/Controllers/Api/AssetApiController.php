<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @tags Aset & Inventaris Laboratorium
 */
class AssetApiController extends Controller
{
    /**
     * Menampilkan daftar seluruh aset inventaris.
     *
     * Mendukung filter pencarian berdasarkan kode, nama, jenis bahan/alat, kondisi, dan laboratorium.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Asset::query()->with('laboratorium');

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('nama', 'like', "%{$search}%")
                    ->orWhere('kode', 'like', "%{$search}%")
                    ->orWhere('penyimpanan', 'like', "%{$search}%")
                    ->orWhere('laboratorium_nama', 'like', "%{$search}%");
            });
        }

        if ($request->filled('jenis')) {
            $query->where('jenis', $request->input('jenis'));
        }

        if ($request->filled('kondisi')) {
            $query->where('kondisi', $request->input('kondisi'));
        }

        if ($request->filled('ketersediaan')) {
            $query->where('ketersediaan', $request->input('ketersediaan'));
        }

        if ($request->filled('laboratorium_id')) {
            $query->where('laboratorium_id', $request->input('laboratorium_id'));
        }

        $assets = $query->latest()->paginate($request->input('per_page', 15));

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar aset laboratorium berhasil diambil.',
            'data' => $assets,
        ]);
    }

    /**
     * Mendaftarkan data aset/alat/bahan baru.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:50|unique:assets,kode',
            'nama' => 'required|string|max:255',
            'laboratorium_id' => 'nullable|exists:laboratoriums,id',
            'laboratorium_nama' => 'nullable|string|max:255',
            'penyimpanan' => 'nullable|string|max:255',
            'jenis' => 'required|in:Alat,Cair,Padat,Gas',
            'kondisi' => 'nullable|in:Baik,Rusak Ringan,Rusak Berat',
            'ketersediaan' => 'nullable|in:Tersedia,Dipinjam,Pemeliharaan',
            'jumlah' => 'nullable|integer|min:1',
            'satuan' => 'nullable|string|max:50',
            'spesifikasi' => 'nullable|string',
        ]);

        $asset = Asset::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data aset berhasil ditambahkan.',
            'data' => $asset,
        ], 201);
    }

    /**
     * Menampilkan detail satu aset.
     */
    public function show(Asset $asset): JsonResponse
    {
        $asset->load('laboratorium');

        return response()->json([
            'status' => 'success',
            'message' => 'Detail aset berhasil diambil.',
            'data' => $asset,
        ]);
    }

    /**
     * Memperbarui informasi aset.
     */
    public function update(Request $request, Asset $asset): JsonResponse
    {
        $validated = $request->validate([
            'kode' => 'sometimes|required|string|max:50|unique:assets,kode,' . $asset->id,
            'nama' => 'sometimes|required|string|max:255',
            'laboratorium_id' => 'nullable|exists:laboratoriums,id',
            'laboratorium_nama' => 'nullable|string|max:255',
            'penyimpanan' => 'nullable|string|max:255',
            'jenis' => 'sometimes|required|in:Alat,Cair,Padat,Gas',
            'kondisi' => 'nullable|in:Baik,Rusak Ringan,Rusak Berat',
            'ketersediaan' => 'nullable|in:Tersedia,Dipinjam,Pemeliharaan',
            'jumlah' => 'nullable|integer|min:1',
            'satuan' => 'nullable|string|max:50',
            'spesifikasi' => 'nullable|string',
        ]);

        $asset->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data aset berhasil diperbarui.',
            'data' => $asset,
        ]);
    }

    /**
     * Menghapus aset dari inventaris.
     */
    public function destroy(Asset $asset): JsonResponse
    {
        $asset->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Data aset berhasil dihapus.',
        ]);
    }
}
