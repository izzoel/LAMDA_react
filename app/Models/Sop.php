<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sop extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'judul',
        'laboratorium',
        'kategori',
        'nama_alat',
        'deskripsi',
        'versi',
        'file_name',
        'file_path',
        'file_size',
        'tgl_upload',
        'status',
        'uploaded_by',
    ];

    protected $casts = [
        'tgl_upload' => 'date',
    ];
}
