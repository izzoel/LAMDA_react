<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sop;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @tags Standar Operasional Prosedur (SOP)
 */
class SopApiController extends Controller
{
    /**
     * Menampilkan daftar dokumen SOP laboratorium.
     *
     * Mendukung filter pencarian berdasarkan nama, kategori (Penggunaan Alat, Pedoman Lab, K3), dan laboratorium.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Sop::query();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('judul', 'like', "%{$search}%")
                    ->orWhere('kode', 'like', "%{$search}%")
                    ->orWhere('laboratorium', 'like', "%{$search}%")
                    ->orWhere('nama_alat', 'like', "%{$search}%");
            });
        }

        if ($request->filled('laboratorium')) {
            $query->where('laboratorium', $request->input('laboratorium'));
        }

        if ($request->filled('kategori')) {
            $query->where('kategori', $request->input('kategori'));
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        $sops = $query->latest()->paginate($request->input('per_page', 15));

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar dokumen SOP berhasil diambil.',
            'data' => $sops,
        ]);
    }

    /**
     * Menyimpan data dokumen SOP baru.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'kode' => 'required|string|max:50|unique:sops,kode',
            'judul' => 'required|string|max:255',
            'laboratorium' => 'required|string|max:255',
            'kategori' => 'required|in:SOP Penggunaan Alat,SOP Pedoman Laboratorium,SOP Keselamatan Kerja & K3',
            'nama_alat' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'versi' => 'nullable|string|max:20',
            'file_name' => 'nullable|string|max:255',
            'file_size' => 'nullable|string|max:50',
            'tgl_upload' => 'nullable|date',
            'status' => 'nullable|in:Aktif,Revisi,Arsip',
            'uploaded_by' => 'nullable|string|max:255',
        ]);

        $sop = Sop::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Dokumen SOP berhasil disimpan.',
            'data' => $sop,
        ], 201);
    }

    /**
     * Menampilkan detail satu dokumen SOP.
     */
    public function show(Sop $sop): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Detail dokumen SOP berhasil diambil.',
            'data' => $sop,
        ]);
    }

    /**
     * Memperbarui informasi dokumen SOP.
     */
    public function update(Request $request, Sop $sop): JsonResponse
    {
        $validated = $request->validate([
            'kode' => 'sometimes|required|string|max:50|unique:sops,kode,' . $sop->id,
            'judul' => 'sometimes|required|string|max:255',
            'laboratorium' => 'sometimes|required|string|max:255',
            'kategori' => 'sometimes|required|in:SOP Penggunaan Alat,SOP Pedoman Laboratorium,SOP Keselamatan Kerja & K3',
            'nama_alat' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string',
            'versi' => 'nullable|string|max:20',
            'file_name' => 'nullable|string|max:255',
            'file_size' => 'nullable|string|max:50',
            'tgl_upload' => 'nullable|date',
            'status' => 'nullable|in:Aktif,Revisi,Arsip',
            'uploaded_by' => 'nullable|string|max:255',
        ]);

        $sop->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data SOP berhasil diperbarui.',
            'data' => $sop,
        ]);
    }

    /**
     * Menghapus dokumen SOP.
     */
    public function destroy(Sop $sop): JsonResponse
    {
        $sop->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Dokumen SOP berhasil dihapus.',
        ]);
    }
}
