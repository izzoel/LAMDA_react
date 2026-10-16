<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Laboratorium extends Model
{
    use HasFactory;

    protected $table = 'laboratoriums';

    protected $fillable = [
        'kode',
        'nama',
        'fakultas',
        'gedung',
        'ruangan',
        'kepala_lab',
        'laboran',
        'deskripsi',
        'kapasitas',
        'status',
    ];

    protected $casts = [
        'kapasitas' => 'integer',
    ];

    public function assets(): HasMany
    {
        return $this->hasMany(Asset::class, 'laboratorium_id');
    }
}
