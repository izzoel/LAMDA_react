<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Tabel Laboratorium
        if (!Schema::hasTable('laboratoriums')) {
            Schema::create('laboratoriums', function (Blueprint $table) {
                $table->id();
                $table->string('kode', 50)->unique();
                $table->string('nama');
                $table->string('fakultas')->nullable();
                $table->string('gedung')->nullable();
                $table->string('ruangan')->nullable();
                $table->string('kepala_lab')->nullable();
                $table->string('laboran')->nullable();
                $table->text('deskripsi')->nullable();
                $table->integer('kapasitas')->default(30);
                $table->enum('status', ['Aktif', 'Pemeliharaan', 'Nonaktif'])->default('Aktif');
                $table->timestamps();
            });
        }

        // 2. Tabel Aset / Inventaris
        if (!Schema::hasTable('assets')) {
            Schema::create('assets', function (Blueprint $table) {
                $table->id();
                $table->string('kode', 50)->unique();
                $table->string('nama');
                $table->foreignId('laboratorium_id')->nullable()->constrained('laboratoriums')->nullOnDelete();
                $table->string('laboratorium_nama')->nullable();
                $table->string('penyimpanan')->nullable();
                $table->enum('jenis', ['Alat', 'Cair', 'Padat', 'Gas'])->default('Alat');
                $table->enum('kondisi', ['Baik', 'Rusak Ringan', 'Rusak Berat'])->default('Baik');
                $table->enum('ketersediaan', ['Tersedia', 'Dipinjam', 'Pemeliharaan'])->default('Tersedia');
                $table->integer('jumlah')->default(1);
                $table->string('satuan', 50)->default('Unit');
                $table->text('spesifikasi')->nullable();
                $table->timestamps();
            });
        }

        // 3. Tabel SOP
        if (!Schema::hasTable('sops')) {
            Schema::create('sops', function (Blueprint $table) {
                $table->id();
                $table->string('kode', 50)->unique();
                $table->string('judul');
                $table->string('laboratorium');
                $table->enum('kategori', [
                    'SOP Penggunaan Alat',
                    'SOP Pedoman Laboratorium',
                    'SOP Keselamatan Kerja & K3',
                ])->default('SOP Pedoman Laboratorium');
                $table->string('nama_alat')->nullable();
                $table->text('deskripsi')->nullable();
                $table->string('versi', 20)->default('v1.0');
                $table->string('file_name')->nullable();
                $table->string('file_path')->nullable();
                $table->string('file_size', 50)->nullable();
                $table->date('tgl_upload')->nullable();
                $table->enum('status', ['Aktif', 'Revisi', 'Arsip'])->default('Aktif');
                $table->string('uploaded_by')->nullable();
                $table->timestamps();
            });
        }

        // 4. Tabel Struktur Organisasi
        if (!Schema::hasTable('organisasis')) {
            Schema::create('organisasis', function (Blueprint $table) {
                $table->id();
                $table->foreignId('parent_id')->nullable()->constrained('organisasis')->nullOnDelete();
                $table->string('nama');
                $table->string('nip', 50)->nullable();
                $table->string('jabatan');
                $table->enum('level', ['pimpinan', 'koordinator', 'sub_koordinator', 'laboran', 'staf'])->default('laboran');
                $table->string('divisi')->nullable();
                $table->string('laboratorium')->nullable();
                $table->string('email')->nullable();
                $table->string('telepon', 50)->nullable();
                $table->enum('status', ['Aktif', 'Cuti', 'Tugas Belajar'])->default('Aktif');
                $table->json('tupoksi')->nullable();
                $table->json('sertifikasi')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organisasis');
        Schema::dropIfExists('sops');
        Schema::dropIfExists('assets');
        Schema::dropIfExists('laboratoriums');
    }
};
