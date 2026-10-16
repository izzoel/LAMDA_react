<?php

namespace Database\Seeders;

use App\Models\Fakultas;
use Illuminate\Database\Seeder;

class FakultasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['fakultas' => 'Farmasi'],
            ['fakultas' => 'Ilmu Kesehatan dan Sains Teknologi'],
            ['fakultas' => 'Ilmu Sosial dan Humaniora'],
        ];

        foreach ($data as $item) {
            Fakultas::firstOrCreate(
                ['fakultas' => $item['fakultas']],
                $item
            );
        }
    }
}
