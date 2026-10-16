<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

/**
 * @tags User & Hak Akses
 */
class UserApiController extends Controller
{
    /**
     * Menampilkan daftar akun pengguna sistem LAMDA.
     *
     * Menampilkan data akun, status otentikasi dua faktor (2FA), dan biometrik passkey.
     */
    public function index(Request $request): JsonResponse
    {
        $query = User::query();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if ($request->has('limit')) {
            $users = $query->orderBy('name', 'asc')->limit((int) $request->input('limit'))->get();
        } elseif ($request->boolean('all')) {
            $users = $query->orderBy('name', 'asc')->get();
        } else {
            $users = $query->latest()->paginate($request->input('per_page', 15));
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Daftar pengguna berhasil diambil.',
            'data' => $users,
        ]);
    }

    /**
     * Membuat akun pengguna baru.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $user = User::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Pengguna baru berhasil didaftarkan.',
            'data' => $user,
        ], 201);
    }

    /**
     * Menampilkan profil detail pengguna.
     */
    public function show(User $user): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Detail pengguna berhasil diambil.',
            'data' => $user,
        ]);
    }

    /**
     * Memperbarui data pengguna.
     */
    public function update(Request $request, User $user): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8',
        ]);

        if (!empty($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        } else {
            unset($validated['password']);
        }

        $user->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data pengguna berhasil diperbarui.',
            'data' => $user,
        ]);
    }

    /**
     * Menghapus akun pengguna.
     */
    public function destroy(User $user): JsonResponse
    {
        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Akun pengguna berhasil dihapus.',
        ]);
    }
}
