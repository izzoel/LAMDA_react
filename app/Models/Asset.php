<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'nama',
        'laboratorium_id',
        'laboratorium_nama',
        'penyimpanan',
        'jenis',
        'kondisi',
        'ketersediaan',
        'jumlah',
        'satuan',
        'spesifikasi',
    ];

    protected $casts = [
        'jumlah' => 'integer',
    ];

    public function laboratorium(): BelongsTo
    {
        return $this->belongsTo(Laboratorium::class, 'laboratorium_id');
    }
}
