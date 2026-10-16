<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organisasi extends Model
{
    use HasFactory;

    protected $table = 'organisasis';

    protected $fillable = [
        'parent_id',
        'nama',
        'nip',
        'jabatan',
        'level',
        'divisi',
        'laboratorium',
        'email',
        'telepon',
        'status',
        'tupoksi',
        'sertifikasi',
    ];

    protected $casts = [
        'tupoksi' => 'array',
        'sertifikasi' => 'array',
    ];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Organisasi::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Organisasi::class, 'parent_id');
    }
}
