<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>LAMDA API Documentation</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset("/vendor/scribe/css/theme-default.style.css") }}" media="screen">
    <link rel="stylesheet" href="{{ asset("/vendor/scribe/css/theme-default.print.css") }}" media="print">

    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>

    <link rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/obsidian.min.css">
    <script src="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jets/0.14.1/jets.min.js"></script>

    <style id="language-style">
        /* starts out as display none and is replaced with js later  */
                    body .content .bash-example code { display: none; }
                    body .content .javascript-example code { display: none; }
            </style>

    <script>
        var tryItOutBaseUrl = "http://localhost:8000";
        var useCsrf = Boolean();
        var csrfUrl = "/sanctum/csrf-cookie";
    </script>
    <script src="{{ asset("/vendor/scribe/js/tryitout-5.11.0.js") }}"></script>

    <script src="{{ asset("/vendor/scribe/js/theme-default-5.11.0.js") }}"></script>

</head>

<body data-languages="[&quot;bash&quot;,&quot;javascript&quot;]">

<a href="#" id="nav-button">
    <span>
        MENU
        <img src="{{ asset("/vendor/scribe/images/navbar.png") }}" alt="navbar-image"/>
    </span>
</a>
<div class="tocify-wrapper">
    
            <div class="lang-selector">
                                            <button type="button" class="lang-button" data-language-name="bash">bash</button>
                                            <button type="button" class="lang-button" data-language-name="javascript">javascript</button>
                    </div>
    
    <div class="search">
        <input type="text" class="search" id="input-search" placeholder="Search">
    </div>

    <div id="toc">
                    <ul id="tocify-header-introduction" class="tocify-header">
                <li class="tocify-item level-1" data-unique="introduction">
                    <a href="#introduction">Introduction</a>
                </li>
                            </ul>
                    <ul id="tocify-header-authenticating-requests" class="tocify-header">
                <li class="tocify-item level-1" data-unique="authenticating-requests">
                    <a href="#authenticating-requests">Authenticating requests</a>
                </li>
                            </ul>
                    <ul id="tocify-header-endpoints" class="tocify-header">
                <li class="tocify-item level-1" data-unique="endpoints">
                    <a href="#endpoints">Endpoints</a>
                </li>
                                    <ul id="tocify-subheader-endpoints" class="tocify-subheader">
                                                    <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-laboratoriums">
                                <a href="#endpoints-GETapi-v1-laboratoriums">Menampilkan daftar semua laboratorium.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-v1-laboratoriums">
                                <a href="#endpoints-POSTapi-v1-laboratoriums">Membuat data laboratorium baru.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-laboratoriums--id-">
                                <a href="#endpoints-GETapi-v1-laboratoriums--id-">Menampilkan detail satu laboratorium.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-v1-laboratoriums--id-">
                                <a href="#endpoints-PUTapi-v1-laboratoriums--id-">Memperbarui data laboratorium.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-v1-laboratoriums--id-">
                                <a href="#endpoints-DELETEapi-v1-laboratoriums--id-">Menghapus data laboratorium.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-assets">
                                <a href="#endpoints-GETapi-v1-assets">Menampilkan daftar seluruh aset inventaris.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-v1-assets">
                                <a href="#endpoints-POSTapi-v1-assets">Mendaftarkan data aset/alat/bahan baru.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-assets--id-">
                                <a href="#endpoints-GETapi-v1-assets--id-">Menampilkan detail satu aset.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-v1-assets--id-">
                                <a href="#endpoints-PUTapi-v1-assets--id-">Memperbarui informasi aset.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-v1-assets--id-">
                                <a href="#endpoints-DELETEapi-v1-assets--id-">Menghapus aset dari inventaris.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-sops">
                                <a href="#endpoints-GETapi-v1-sops">Menampilkan daftar dokumen SOP laboratorium.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-v1-sops">
                                <a href="#endpoints-POSTapi-v1-sops">Menyimpan data dokumen SOP baru.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-sops--id-">
                                <a href="#endpoints-GETapi-v1-sops--id-">Menampilkan detail satu dokumen SOP.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-v1-sops--id-">
                                <a href="#endpoints-PUTapi-v1-sops--id-">Memperbarui informasi dokumen SOP.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-v1-sops--id-">
                                <a href="#endpoints-DELETEapi-v1-sops--id-">Menghapus dokumen SOP.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-organisasi">
                                <a href="#endpoints-GETapi-v1-organisasi">Menampilkan hierarki struktur organisasi laboratorium.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-v1-organisasi">
                                <a href="#endpoints-POSTapi-v1-organisasi">Menambahkan personel baru ke dalam struktur organisasi.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-organisasi--id-">
                                <a href="#endpoints-GETapi-v1-organisasi--id-">Menampilkan detail satu personel organisasi.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-v1-organisasi--id-">
                                <a href="#endpoints-PUTapi-v1-organisasi--id-">Memperbarui data personel organisasi.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-v1-organisasi--id-">
                                <a href="#endpoints-DELETEapi-v1-organisasi--id-">Menghapus personel dari struktur organisasi.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-users">
                                <a href="#endpoints-GETapi-v1-users">Menampilkan daftar akun pengguna sistem LAMDA.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-v1-users">
                                <a href="#endpoints-POSTapi-v1-users">Membuat akun pengguna baru.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-users--id-">
                                <a href="#endpoints-GETapi-v1-users--id-">Menampilkan profil detail pengguna.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-v1-users--id-">
                                <a href="#endpoints-PUTapi-v1-users--id-">Memperbarui data pengguna.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-v1-users--id-">
                                <a href="#endpoints-DELETEapi-v1-users--id-">Menghapus akun pengguna.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-fakultas">
                                <a href="#endpoints-GETapi-v1-fakultas">Menampilkan daftar semua fakultas.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-v1-fakultas">
                                <a href="#endpoints-POSTapi-v1-fakultas">Menyimpan data fakultas baru.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-v1-fakultas--fakultas_id-">
                                <a href="#endpoints-GETapi-v1-fakultas--fakultas_id-">Menampilkan detail satu fakultas.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-v1-fakultas--fakultas_id-">
                                <a href="#endpoints-PUTapi-v1-fakultas--fakultas_id-">Memperbarui data fakultas.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-v1-fakultas--fakultas_id-">
                                <a href="#endpoints-DELETEapi-v1-fakultas--fakultas_id-">Menghapus data fakultas.</a>
                            </li>
                                                                        </ul>
                            </ul>
            </div>

    <ul class="toc-footer" id="toc-footer">
                    <li style="padding-bottom: 5px;"><a href="{{ route("scribe.postman") }}">View Postman collection</a></li>
                            <li style="padding-bottom: 5px;"><a href="{{ route("scribe.openapi") }}">View OpenAPI spec</a></li>
                <li><a href="http://github.com/knuckleswtf/scribe">Documentation powered by Scribe ✍</a></li>
    </ul>

    <ul class="toc-footer" id="last-updated">
        <li>Last updated: October 16, 2026</li>
    </ul>
</div>

<div class="page-wrapper">
    <div class="dark-box"></div>
    <div class="content">
        <h1 id="introduction">Introduction</h1>
<p>Dokumentasi RESTful API Laboratorium Manajemen Data &amp; Aset (LAMDA).</p>
<aside>
    <strong>Base URL</strong>: <code>http://localhost:8000</code>
</aside>
<pre><code>Dokumentasi lengkap RESTful API untuk Sistem Laboratorium Manajemen Data &amp; Aset (LAMDA).
Mencakup endpoint Laboratorium, Aset &amp; Inventaris, Standar Operasional Prosedur (SOP), Struktur Organisasi, User Management, dan Fakultas.</code></pre>

        <h1 id="authenticating-requests">Authenticating requests</h1>
<p>This API is not authenticated.</p>

        <h1 id="endpoints">Endpoints</h1>

    

                                <h2 id="endpoints-GETapi-v1-laboratoriums">Menampilkan daftar semua laboratorium.</h2>

<p>
</p>

<p>Endpoint ini mengembalikan daftar seluruh profil laboratorium terpadu,
mendukung pencarian dan filter per fakultas/status.</p>

<span id="example-requests-GETapi-v1-laboratoriums">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/laboratoriums" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/laboratoriums"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-laboratoriums">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Daftar laboratorium berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;nama&quot;: &quot;Batra &amp; Kosmetika&quot;,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#D3E0D6&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 2,
                &quot;nama&quot;: &quot;Kimia Farmasi&quot;,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#E8EDDA&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 3,
                &quot;nama&quot;: &quot;Teknologi Sediaan Farmasi&quot;,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;gedung&quot;: &quot;Lab Terpadu&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 8,
                &quot;warna&quot;: &quot;#CADEEE&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-26T12:31:03.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 4,
                &quot;nama&quot;: &quot;Farmakologi&quot;,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#F3FDDC&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 5,
                &quot;nama&quot;: &quot;Sediaan Steril&quot;,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#FAF6D9&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-09-14T01:15:01.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 6,
                &quot;nama&quot;: &quot;Mikrobiologi&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#EECCEB&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 7,
                &quot;nama&quot;: &quot;Kimia&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#FBD4DA&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 8,
                &quot;nama&quot;: &quot;Patologi Klinis&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#E4E8C9&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 9,
                &quot;nama&quot;: &quot;Flebotomi &amp; Sitohistologi&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#FAFADD&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 10,
                &quot;nama&quot;: &quot;CBT&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#DAEBD9&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-10-08T10:07:45.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 11,
                &quot;nama&quot;: &quot;OSCE&quot;,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#F4F8F4&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 12,
                &quot;nama&quot;: &quot;Gizi Kuliner &amp; Ilmu Bahan Makanan&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#DDFCD8&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 13,
                &quot;nama&quot;: &quot;Penilaian Status Gizi&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#FBDFF9&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 14,
                &quot;nama&quot;: &quot;Mini Teaching Hospital&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Kesehatan dan Sains Teknologi&quot;,
                &quot;gedung&quot;: &quot;Gedung C&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#D7CDDB&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            },
            {
                &quot;id&quot;: 15,
                &quot;nama&quot;: &quot;Peradilan Semu&quot;,
                &quot;fakultas&quot;: &quot;Ilmu Sosial dan Humaniora&quot;,
                &quot;gedung&quot;: &quot;Gedung B&quot;,
                &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
                &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
                &quot;id_laboran&quot;: 1,
                &quot;warna&quot;: &quot;#EEF5EE&quot;,
                &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
                &quot;assets&quot;: []
            }
        ],
        &quot;first_page_url&quot;: &quot;http://localhost:8000/api/v1/laboratoriums?page=1&quot;,
        &quot;from&quot;: 1,
        &quot;last_page&quot;: 2,
        &quot;last_page_url&quot;: &quot;http://localhost:8000/api/v1/laboratoriums?page=2&quot;,
        &quot;links&quot;: [
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/laboratoriums?page=1&quot;,
                &quot;label&quot;: &quot;1&quot;,
                &quot;page&quot;: 1,
                &quot;active&quot;: true
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/laboratoriums?page=2&quot;,
                &quot;label&quot;: &quot;2&quot;,
                &quot;page&quot;: 2,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/laboratoriums?page=2&quot;,
                &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                &quot;page&quot;: 2,
                &quot;active&quot;: false
            }
        ],
        &quot;next_page_url&quot;: &quot;http://localhost:8000/api/v1/laboratoriums?page=2&quot;,
        &quot;path&quot;: &quot;http://localhost:8000/api/v1/laboratoriums&quot;,
        &quot;per_page&quot;: 15,
        &quot;prev_page_url&quot;: null,
        &quot;to&quot;: 15,
        &quot;total&quot;: 17
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-laboratoriums" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-laboratoriums"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-laboratoriums"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-laboratoriums" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-laboratoriums">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-laboratoriums" data-method="GET"
      data-path="api/v1/laboratoriums"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-laboratoriums', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-laboratoriums"
                    onclick="tryItOut('GETapi-v1-laboratoriums');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-laboratoriums"
                    onclick="cancelTryOut('GETapi-v1-laboratoriums');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-laboratoriums"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/laboratoriums</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-laboratoriums"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-laboratoriums"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-v1-laboratoriums">Membuat data laboratorium baru.</h2>

<p>
</p>



<span id="example-requests-POSTapi-v1-laboratoriums">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost:8000/api/v1/laboratoriums" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"kode\": \"b\",
    \"nama\": \"n\",
    \"fakultas\": \"g\",
    \"gedung\": \"z\",
    \"ruangan\": \"m\",
    \"kepala_lab\": \"i\",
    \"laboran\": \"y\",
    \"deskripsi\": \"architecto\",
    \"kapasitas\": 22,
    \"status\": \"Nonaktif\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/laboratoriums"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "kode": "b",
    "nama": "n",
    "fakultas": "g",
    "gedung": "z",
    "ruangan": "m",
    "kepala_lab": "i",
    "laboran": "y",
    "deskripsi": "architecto",
    "kapasitas": 22,
    "status": "Nonaktif"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-v1-laboratoriums">
</span>
<span id="execution-results-POSTapi-v1-laboratoriums" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-v1-laboratoriums"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-v1-laboratoriums"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-v1-laboratoriums" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-v1-laboratoriums">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-v1-laboratoriums" data-method="POST"
      data-path="api/v1/laboratoriums"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-v1-laboratoriums', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-v1-laboratoriums"
                    onclick="tryItOut('POSTapi-v1-laboratoriums');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-v1-laboratoriums"
                    onclick="cancelTryOut('POSTapi-v1-laboratoriums');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-v1-laboratoriums"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/v1/laboratoriums</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-v1-laboratoriums"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-v1-laboratoriums"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kode</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kode"                data-endpoint="POSTapi-v1-laboratoriums"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama"                data-endpoint="POSTapi-v1-laboratoriums"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fakultas</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fakultas"                data-endpoint="POSTapi-v1-laboratoriums"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>gedung</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="gedung"                data-endpoint="POSTapi-v1-laboratoriums"
               value="z"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>ruangan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="ruangan"                data-endpoint="POSTapi-v1-laboratoriums"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kepala_lab</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kepala_lab"                data-endpoint="POSTapi-v1-laboratoriums"
               value="i"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>i</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboran</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboran"                data-endpoint="POSTapi-v1-laboratoriums"
               value="y"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>y</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>deskripsi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="deskripsi"                data-endpoint="POSTapi-v1-laboratoriums"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kapasitas</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="kapasitas"                data-endpoint="POSTapi-v1-laboratoriums"
               value="22"
               data-component="body">
    <br>
<p>Must be at least 1. Example: <code>22</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>status</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="status"                data-endpoint="POSTapi-v1-laboratoriums"
               value="Nonaktif"
               data-component="body">
    <br>
<p>Example: <code>Nonaktif</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Aktif</code></li> <li><code>Pemeliharaan</code></li> <li><code>Nonaktif</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-v1-laboratoriums--id-">Menampilkan detail satu laboratorium.</h2>

<p>
</p>



<span id="example-requests-GETapi-v1-laboratoriums--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/laboratoriums/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/laboratoriums/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-laboratoriums--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Detail laboratorium berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;nama&quot;: &quot;Batra &amp; Kosmetika&quot;,
        &quot;fakultas&quot;: &quot;Farmasi&quot;,
        &quot;gedung&quot;: &quot;Gedung B&quot;,
        &quot;deskripsi&quot;: &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi est neque porro expedita, quisquam officia! Molestiae cum eligendi doloribus ad provident eos quibusdam animi unde, at, autem quam deleniti.&quot;,
        &quot;gambar&quot;: &quot;laboratorium/profil/img.jpg&quot;,
        &quot;id_laboran&quot;: 1,
        &quot;warna&quot;: &quot;#D3E0D6&quot;,
        &quot;created_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
        &quot;updated_at&quot;: &quot;2026-05-25T08:22:46.000000Z&quot;,
        &quot;assets&quot;: []
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-laboratoriums--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-laboratoriums--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-laboratoriums--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-laboratoriums--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-laboratoriums--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-laboratoriums--id-" data-method="GET"
      data-path="api/v1/laboratoriums/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-laboratoriums--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-laboratoriums--id-"
                    onclick="tryItOut('GETapi-v1-laboratoriums--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-laboratoriums--id-"
                    onclick="cancelTryOut('GETapi-v1-laboratoriums--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-laboratoriums--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/laboratoriums/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-laboratoriums--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-laboratoriums--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-v1-laboratoriums--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the laboratorium. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-v1-laboratoriums--id-">Memperbarui data laboratorium.</h2>

<p>
</p>



<span id="example-requests-PUTapi-v1-laboratoriums--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost:8000/api/v1/laboratoriums/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nama\": \"b\",
    \"fakultas\": \"n\",
    \"gedung\": \"g\",
    \"ruangan\": \"z\",
    \"kepala_lab\": \"m\",
    \"laboran\": \"i\",
    \"deskripsi\": \"architecto\",
    \"kapasitas\": 22,
    \"status\": \"Pemeliharaan\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/laboratoriums/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nama": "b",
    "fakultas": "n",
    "gedung": "g",
    "ruangan": "z",
    "kepala_lab": "m",
    "laboran": "i",
    "deskripsi": "architecto",
    "kapasitas": 22,
    "status": "Pemeliharaan"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-v1-laboratoriums--id-">
</span>
<span id="execution-results-PUTapi-v1-laboratoriums--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-v1-laboratoriums--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-v1-laboratoriums--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-v1-laboratoriums--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-v1-laboratoriums--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-v1-laboratoriums--id-" data-method="PUT"
      data-path="api/v1/laboratoriums/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-v1-laboratoriums--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-v1-laboratoriums--id-"
                    onclick="tryItOut('PUTapi-v1-laboratoriums--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-v1-laboratoriums--id-"
                    onclick="cancelTryOut('PUTapi-v1-laboratoriums--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-v1-laboratoriums--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/v1/laboratoriums/{id}</code></b>
        </p>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/v1/laboratoriums/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the laboratorium. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kode</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kode"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fakultas</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fakultas"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>gedung</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="gedung"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>ruangan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="ruangan"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="z"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kepala_lab</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kepala_lab"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboran</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboran"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="i"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>i</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>deskripsi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="deskripsi"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kapasitas</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="kapasitas"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="22"
               data-component="body">
    <br>
<p>Must be at least 1. Example: <code>22</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>status</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="status"                data-endpoint="PUTapi-v1-laboratoriums--id-"
               value="Pemeliharaan"
               data-component="body">
    <br>
<p>Example: <code>Pemeliharaan</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Aktif</code></li> <li><code>Pemeliharaan</code></li> <li><code>Nonaktif</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-v1-laboratoriums--id-">Menghapus data laboratorium.</h2>

<p>
</p>



<span id="example-requests-DELETEapi-v1-laboratoriums--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost:8000/api/v1/laboratoriums/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/laboratoriums/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-v1-laboratoriums--id-">
</span>
<span id="execution-results-DELETEapi-v1-laboratoriums--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-v1-laboratoriums--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-v1-laboratoriums--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-v1-laboratoriums--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-v1-laboratoriums--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-v1-laboratoriums--id-" data-method="DELETE"
      data-path="api/v1/laboratoriums/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-v1-laboratoriums--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-v1-laboratoriums--id-"
                    onclick="tryItOut('DELETEapi-v1-laboratoriums--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-v1-laboratoriums--id-"
                    onclick="cancelTryOut('DELETEapi-v1-laboratoriums--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-v1-laboratoriums--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/v1/laboratoriums/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-v1-laboratoriums--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-v1-laboratoriums--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-v1-laboratoriums--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the laboratorium. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-v1-assets">Menampilkan daftar seluruh aset inventaris.</h2>

<p>
</p>

<p>Mendukung filter pencarian berdasarkan kode, nama, jenis bahan/alat, kondisi, dan laboratorium.</p>

<span id="example-requests-GETapi-v1-assets">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/assets" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/assets"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-assets">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Daftar aset laboratorium berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [],
        &quot;first_page_url&quot;: &quot;http://localhost:8000/api/v1/assets?page=1&quot;,
        &quot;from&quot;: null,
        &quot;last_page&quot;: 1,
        &quot;last_page_url&quot;: &quot;http://localhost:8000/api/v1/assets?page=1&quot;,
        &quot;links&quot;: [
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/assets?page=1&quot;,
                &quot;label&quot;: &quot;1&quot;,
                &quot;page&quot;: 1,
                &quot;active&quot;: true
            },
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            }
        ],
        &quot;next_page_url&quot;: null,
        &quot;path&quot;: &quot;http://localhost:8000/api/v1/assets&quot;,
        &quot;per_page&quot;: 15,
        &quot;prev_page_url&quot;: null,
        &quot;to&quot;: null,
        &quot;total&quot;: 0
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-assets" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-assets"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-assets"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-assets" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-assets">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-assets" data-method="GET"
      data-path="api/v1/assets"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-assets', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-assets"
                    onclick="tryItOut('GETapi-v1-assets');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-assets"
                    onclick="cancelTryOut('GETapi-v1-assets');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-assets"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/assets</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-assets"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-assets"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-v1-assets">Mendaftarkan data aset/alat/bahan baru.</h2>

<p>
</p>



<span id="example-requests-POSTapi-v1-assets">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost:8000/api/v1/assets" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"kode\": \"b\",
    \"nama\": \"n\",
    \"laboratorium_nama\": \"g\",
    \"penyimpanan\": \"z\",
    \"jenis\": \"Gas\",
    \"kondisi\": \"Rusak Ringan\",
    \"ketersediaan\": \"Dipinjam\",
    \"jumlah\": 27,
    \"satuan\": \"i\",
    \"spesifikasi\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/assets"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "kode": "b",
    "nama": "n",
    "laboratorium_nama": "g",
    "penyimpanan": "z",
    "jenis": "Gas",
    "kondisi": "Rusak Ringan",
    "ketersediaan": "Dipinjam",
    "jumlah": 27,
    "satuan": "i",
    "spesifikasi": "architecto"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-v1-assets">
</span>
<span id="execution-results-POSTapi-v1-assets" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-v1-assets"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-v1-assets"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-v1-assets" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-v1-assets">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-v1-assets" data-method="POST"
      data-path="api/v1/assets"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-v1-assets', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-v1-assets"
                    onclick="tryItOut('POSTapi-v1-assets');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-v1-assets"
                    onclick="cancelTryOut('POSTapi-v1-assets');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-v1-assets"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/v1/assets</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-v1-assets"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-v1-assets"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kode</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kode"                data-endpoint="POSTapi-v1-assets"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama"                data-endpoint="POSTapi-v1-assets"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium_id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium_id"                data-endpoint="POSTapi-v1-assets"
               value=""
               data-component="body">
    <br>
<p>Must match an existing stored value.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium_nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium_nama"                data-endpoint="POSTapi-v1-assets"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>penyimpanan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="penyimpanan"                data-endpoint="POSTapi-v1-assets"
               value="z"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>jenis</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="jenis"                data-endpoint="POSTapi-v1-assets"
               value="Gas"
               data-component="body">
    <br>
<p>Example: <code>Gas</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Alat</code></li> <li><code>Cair</code></li> <li><code>Padat</code></li> <li><code>Gas</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kondisi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kondisi"                data-endpoint="POSTapi-v1-assets"
               value="Rusak Ringan"
               data-component="body">
    <br>
<p>Example: <code>Rusak Ringan</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Baik</code></li> <li><code>Rusak Ringan</code></li> <li><code>Rusak Berat</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>ketersediaan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="ketersediaan"                data-endpoint="POSTapi-v1-assets"
               value="Dipinjam"
               data-component="body">
    <br>
<p>Example: <code>Dipinjam</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Tersedia</code></li> <li><code>Dipinjam</code></li> <li><code>Pemeliharaan</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>jumlah</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="jumlah"                data-endpoint="POSTapi-v1-assets"
               value="27"
               data-component="body">
    <br>
<p>Must be at least 1. Example: <code>27</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>satuan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="satuan"                data-endpoint="POSTapi-v1-assets"
               value="i"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>i</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>spesifikasi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="spesifikasi"                data-endpoint="POSTapi-v1-assets"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-v1-assets--id-">Menampilkan detail satu aset.</h2>

<p>
</p>



<span id="example-requests-GETapi-v1-assets--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/assets/16" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/assets/16"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-assets--id-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;No query results for model [App\\Models\\Asset] 16&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-assets--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-assets--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-assets--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-assets--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-assets--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-assets--id-" data-method="GET"
      data-path="api/v1/assets/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-assets--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-assets--id-"
                    onclick="tryItOut('GETapi-v1-assets--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-assets--id-"
                    onclick="cancelTryOut('GETapi-v1-assets--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-assets--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/assets/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-assets--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-assets--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-v1-assets--id-"
               value="16"
               data-component="url">
    <br>
<p>The ID of the asset. Example: <code>16</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-v1-assets--id-">Memperbarui informasi aset.</h2>

<p>
</p>



<span id="example-requests-PUTapi-v1-assets--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost:8000/api/v1/assets/16" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nama\": \"b\",
    \"laboratorium_nama\": \"n\",
    \"penyimpanan\": \"g\",
    \"jenis\": \"Alat\",
    \"kondisi\": \"Rusak Ringan\",
    \"ketersediaan\": \"Tersedia\",
    \"jumlah\": 66,
    \"satuan\": \"m\",
    \"spesifikasi\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/assets/16"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nama": "b",
    "laboratorium_nama": "n",
    "penyimpanan": "g",
    "jenis": "Alat",
    "kondisi": "Rusak Ringan",
    "ketersediaan": "Tersedia",
    "jumlah": 66,
    "satuan": "m",
    "spesifikasi": "architecto"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-v1-assets--id-">
</span>
<span id="execution-results-PUTapi-v1-assets--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-v1-assets--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-v1-assets--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-v1-assets--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-v1-assets--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-v1-assets--id-" data-method="PUT"
      data-path="api/v1/assets/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-v1-assets--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-v1-assets--id-"
                    onclick="tryItOut('PUTapi-v1-assets--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-v1-assets--id-"
                    onclick="cancelTryOut('PUTapi-v1-assets--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-v1-assets--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/v1/assets/{id}</code></b>
        </p>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/v1/assets/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-v1-assets--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-v1-assets--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-v1-assets--id-"
               value="16"
               data-component="url">
    <br>
<p>The ID of the asset. Example: <code>16</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kode</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kode"                data-endpoint="PUTapi-v1-assets--id-"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama"                data-endpoint="PUTapi-v1-assets--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium_id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium_id"                data-endpoint="PUTapi-v1-assets--id-"
               value=""
               data-component="body">
    <br>
<p>Must match an existing stored value.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium_nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium_nama"                data-endpoint="PUTapi-v1-assets--id-"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>penyimpanan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="penyimpanan"                data-endpoint="PUTapi-v1-assets--id-"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>jenis</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="jenis"                data-endpoint="PUTapi-v1-assets--id-"
               value="Alat"
               data-component="body">
    <br>
<p>Example: <code>Alat</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Alat</code></li> <li><code>Cair</code></li> <li><code>Padat</code></li> <li><code>Gas</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kondisi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kondisi"                data-endpoint="PUTapi-v1-assets--id-"
               value="Rusak Ringan"
               data-component="body">
    <br>
<p>Example: <code>Rusak Ringan</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Baik</code></li> <li><code>Rusak Ringan</code></li> <li><code>Rusak Berat</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>ketersediaan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="ketersediaan"                data-endpoint="PUTapi-v1-assets--id-"
               value="Tersedia"
               data-component="body">
    <br>
<p>Example: <code>Tersedia</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Tersedia</code></li> <li><code>Dipinjam</code></li> <li><code>Pemeliharaan</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>jumlah</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="jumlah"                data-endpoint="PUTapi-v1-assets--id-"
               value="66"
               data-component="body">
    <br>
<p>Must be at least 1. Example: <code>66</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>satuan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="satuan"                data-endpoint="PUTapi-v1-assets--id-"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>spesifikasi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="spesifikasi"                data-endpoint="PUTapi-v1-assets--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-v1-assets--id-">Menghapus aset dari inventaris.</h2>

<p>
</p>



<span id="example-requests-DELETEapi-v1-assets--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost:8000/api/v1/assets/16" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/assets/16"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-v1-assets--id-">
</span>
<span id="execution-results-DELETEapi-v1-assets--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-v1-assets--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-v1-assets--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-v1-assets--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-v1-assets--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-v1-assets--id-" data-method="DELETE"
      data-path="api/v1/assets/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-v1-assets--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-v1-assets--id-"
                    onclick="tryItOut('DELETEapi-v1-assets--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-v1-assets--id-"
                    onclick="cancelTryOut('DELETEapi-v1-assets--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-v1-assets--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/v1/assets/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-v1-assets--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-v1-assets--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-v1-assets--id-"
               value="16"
               data-component="url">
    <br>
<p>The ID of the asset. Example: <code>16</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-v1-sops">Menampilkan daftar dokumen SOP laboratorium.</h2>

<p>
</p>

<p>Mendukung filter pencarian berdasarkan nama, kategori (Penggunaan Alat, Pedoman Lab, K3), dan laboratorium.</p>

<span id="example-requests-GETapi-v1-sops">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/sops" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/sops"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-sops">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Daftar dokumen SOP berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;kode&quot;: &quot;SOP-LNVMUV&quot;,
                &quot;judul&quot;: &quot;SOP Penggunaan LAB CBT&quot;,
                &quot;laboratorium&quot;: &quot;CBT&quot;,
                &quot;id_laboratorium&quot;: 10,
                &quot;kategori&quot;: &quot;SOP Pedoman Laboratorium&quot;,
                &quot;nama_alat&quot;: null,
                &quot;deskripsi&quot;: null,
                &quot;versi&quot;: &quot;v1.0&quot;,
                &quot;file_name&quot;: &quot;sertifikat-ppi-rina-melati.pdf&quot;,
                &quot;file_path&quot;: &quot;sop/IYxCo0ybjzoImYz9VSbxXyv5GuJV7ZrB14Armby8.pdf&quot;,
                &quot;file_size&quot;: &quot;1.48 MB&quot;,
                &quot;tgl_upload&quot;: &quot;2026-10-08T00:00:00.000000Z&quot;,
                &quot;status&quot;: &quot;Aktif&quot;,
                &quot;uploaded_by&quot;: &quot;admin&quot;,
                &quot;created_at&quot;: &quot;2026-10-08T11:24:54.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-10-08T11:24:54.000000Z&quot;
            }
        ],
        &quot;first_page_url&quot;: &quot;http://localhost:8000/api/v1/sops?page=1&quot;,
        &quot;from&quot;: 1,
        &quot;last_page&quot;: 1,
        &quot;last_page_url&quot;: &quot;http://localhost:8000/api/v1/sops?page=1&quot;,
        &quot;links&quot;: [
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/sops?page=1&quot;,
                &quot;label&quot;: &quot;1&quot;,
                &quot;page&quot;: 1,
                &quot;active&quot;: true
            },
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            }
        ],
        &quot;next_page_url&quot;: null,
        &quot;path&quot;: &quot;http://localhost:8000/api/v1/sops&quot;,
        &quot;per_page&quot;: 15,
        &quot;prev_page_url&quot;: null,
        &quot;to&quot;: 1,
        &quot;total&quot;: 1
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-sops" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-sops"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-sops"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-sops" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-sops">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-sops" data-method="GET"
      data-path="api/v1/sops"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-sops', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-sops"
                    onclick="tryItOut('GETapi-v1-sops');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-sops"
                    onclick="cancelTryOut('GETapi-v1-sops');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-sops"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/sops</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-sops"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-sops"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-v1-sops">Menyimpan data dokumen SOP baru.</h2>

<p>
</p>



<span id="example-requests-POSTapi-v1-sops">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost:8000/api/v1/sops" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"kode\": \"b\",
    \"judul\": \"n\",
    \"laboratorium\": \"g\",
    \"kategori\": \"SOP Penggunaan Alat\",
    \"nama_alat\": \"z\",
    \"deskripsi\": \"architecto\",
    \"versi\": \"ngzmiyvdljnikhwa\",
    \"file_name\": \"y\",
    \"file_size\": \"k\",
    \"tgl_upload\": \"2026-10-16T13:54:22\",
    \"status\": \"Aktif\",
    \"uploaded_by\": \"c\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/sops"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "kode": "b",
    "judul": "n",
    "laboratorium": "g",
    "kategori": "SOP Penggunaan Alat",
    "nama_alat": "z",
    "deskripsi": "architecto",
    "versi": "ngzmiyvdljnikhwa",
    "file_name": "y",
    "file_size": "k",
    "tgl_upload": "2026-10-16T13:54:22",
    "status": "Aktif",
    "uploaded_by": "c"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-v1-sops">
</span>
<span id="execution-results-POSTapi-v1-sops" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-v1-sops"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-v1-sops"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-v1-sops" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-v1-sops">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-v1-sops" data-method="POST"
      data-path="api/v1/sops"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-v1-sops', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-v1-sops"
                    onclick="tryItOut('POSTapi-v1-sops');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-v1-sops"
                    onclick="cancelTryOut('POSTapi-v1-sops');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-v1-sops"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/v1/sops</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-v1-sops"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-v1-sops"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kode</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kode"                data-endpoint="POSTapi-v1-sops"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>judul</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="judul"                data-endpoint="POSTapi-v1-sops"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium"                data-endpoint="POSTapi-v1-sops"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kategori</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kategori"                data-endpoint="POSTapi-v1-sops"
               value="SOP Penggunaan Alat"
               data-component="body">
    <br>
<p>Example: <code>SOP Penggunaan Alat</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>SOP Penggunaan Alat</code></li> <li><code>SOP Pedoman Laboratorium</code></li> <li><code>SOP Keselamatan Kerja & K3</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama_alat</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama_alat"                data-endpoint="POSTapi-v1-sops"
               value="z"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>deskripsi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="deskripsi"                data-endpoint="POSTapi-v1-sops"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>versi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="versi"                data-endpoint="POSTapi-v1-sops"
               value="ngzmiyvdljnikhwa"
               data-component="body">
    <br>
<p>Must not be greater than 20 characters. Example: <code>ngzmiyvdljnikhwa</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>file_name</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="file_name"                data-endpoint="POSTapi-v1-sops"
               value="y"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>y</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>file_size</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="file_size"                data-endpoint="POSTapi-v1-sops"
               value="k"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>k</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>tgl_upload</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="tgl_upload"                data-endpoint="POSTapi-v1-sops"
               value="2026-10-16T13:54:22"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2026-10-16T13:54:22</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>status</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="status"                data-endpoint="POSTapi-v1-sops"
               value="Aktif"
               data-component="body">
    <br>
<p>Example: <code>Aktif</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Aktif</code></li> <li><code>Revisi</code></li> <li><code>Arsip</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>uploaded_by</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="uploaded_by"                data-endpoint="POSTapi-v1-sops"
               value="c"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>c</code></p>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-v1-sops--id-">Menampilkan detail satu dokumen SOP.</h2>

<p>
</p>



<span id="example-requests-GETapi-v1-sops--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/sops/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/sops/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-sops--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Detail dokumen SOP berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;kode&quot;: &quot;SOP-LNVMUV&quot;,
        &quot;judul&quot;: &quot;SOP Penggunaan LAB CBT&quot;,
        &quot;laboratorium&quot;: &quot;CBT&quot;,
        &quot;id_laboratorium&quot;: 10,
        &quot;kategori&quot;: &quot;SOP Pedoman Laboratorium&quot;,
        &quot;nama_alat&quot;: null,
        &quot;deskripsi&quot;: null,
        &quot;versi&quot;: &quot;v1.0&quot;,
        &quot;file_name&quot;: &quot;sertifikat-ppi-rina-melati.pdf&quot;,
        &quot;file_path&quot;: &quot;sop/IYxCo0ybjzoImYz9VSbxXyv5GuJV7ZrB14Armby8.pdf&quot;,
        &quot;file_size&quot;: &quot;1.48 MB&quot;,
        &quot;tgl_upload&quot;: &quot;2026-10-08T00:00:00.000000Z&quot;,
        &quot;status&quot;: &quot;Aktif&quot;,
        &quot;uploaded_by&quot;: &quot;admin&quot;,
        &quot;created_at&quot;: &quot;2026-10-08T11:24:54.000000Z&quot;,
        &quot;updated_at&quot;: &quot;2026-10-08T11:24:54.000000Z&quot;
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-sops--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-sops--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-sops--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-sops--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-sops--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-sops--id-" data-method="GET"
      data-path="api/v1/sops/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-sops--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-sops--id-"
                    onclick="tryItOut('GETapi-v1-sops--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-sops--id-"
                    onclick="cancelTryOut('GETapi-v1-sops--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-sops--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/sops/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-sops--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-sops--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-v1-sops--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the sop. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-v1-sops--id-">Memperbarui informasi dokumen SOP.</h2>

<p>
</p>



<span id="example-requests-PUTapi-v1-sops--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost:8000/api/v1/sops/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"judul\": \"b\",
    \"laboratorium\": \"n\",
    \"kategori\": \"SOP Penggunaan Alat\",
    \"nama_alat\": \"g\",
    \"deskripsi\": \"architecto\",
    \"versi\": \"ngzmiyvdljnikhwa\",
    \"file_name\": \"y\",
    \"file_size\": \"k\",
    \"tgl_upload\": \"2026-10-16T13:54:22\",
    \"status\": \"Revisi\",
    \"uploaded_by\": \"c\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/sops/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "judul": "b",
    "laboratorium": "n",
    "kategori": "SOP Penggunaan Alat",
    "nama_alat": "g",
    "deskripsi": "architecto",
    "versi": "ngzmiyvdljnikhwa",
    "file_name": "y",
    "file_size": "k",
    "tgl_upload": "2026-10-16T13:54:22",
    "status": "Revisi",
    "uploaded_by": "c"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-v1-sops--id-">
</span>
<span id="execution-results-PUTapi-v1-sops--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-v1-sops--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-v1-sops--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-v1-sops--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-v1-sops--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-v1-sops--id-" data-method="PUT"
      data-path="api/v1/sops/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-v1-sops--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-v1-sops--id-"
                    onclick="tryItOut('PUTapi-v1-sops--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-v1-sops--id-"
                    onclick="cancelTryOut('PUTapi-v1-sops--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-v1-sops--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/v1/sops/{id}</code></b>
        </p>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/v1/sops/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-v1-sops--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-v1-sops--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-v1-sops--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the sop. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kode</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kode"                data-endpoint="PUTapi-v1-sops--id-"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>judul</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="judul"                data-endpoint="PUTapi-v1-sops--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium"                data-endpoint="PUTapi-v1-sops--id-"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>kategori</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="kategori"                data-endpoint="PUTapi-v1-sops--id-"
               value="SOP Penggunaan Alat"
               data-component="body">
    <br>
<p>Example: <code>SOP Penggunaan Alat</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>SOP Penggunaan Alat</code></li> <li><code>SOP Pedoman Laboratorium</code></li> <li><code>SOP Keselamatan Kerja & K3</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama_alat</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama_alat"                data-endpoint="PUTapi-v1-sops--id-"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>deskripsi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="deskripsi"                data-endpoint="PUTapi-v1-sops--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>versi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="versi"                data-endpoint="PUTapi-v1-sops--id-"
               value="ngzmiyvdljnikhwa"
               data-component="body">
    <br>
<p>Must not be greater than 20 characters. Example: <code>ngzmiyvdljnikhwa</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>file_name</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="file_name"                data-endpoint="PUTapi-v1-sops--id-"
               value="y"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>y</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>file_size</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="file_size"                data-endpoint="PUTapi-v1-sops--id-"
               value="k"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>k</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>tgl_upload</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="tgl_upload"                data-endpoint="PUTapi-v1-sops--id-"
               value="2026-10-16T13:54:22"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2026-10-16T13:54:22</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>status</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="status"                data-endpoint="PUTapi-v1-sops--id-"
               value="Revisi"
               data-component="body">
    <br>
<p>Example: <code>Revisi</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Aktif</code></li> <li><code>Revisi</code></li> <li><code>Arsip</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>uploaded_by</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="uploaded_by"                data-endpoint="PUTapi-v1-sops--id-"
               value="c"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>c</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-v1-sops--id-">Menghapus dokumen SOP.</h2>

<p>
</p>



<span id="example-requests-DELETEapi-v1-sops--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost:8000/api/v1/sops/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/sops/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-v1-sops--id-">
</span>
<span id="execution-results-DELETEapi-v1-sops--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-v1-sops--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-v1-sops--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-v1-sops--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-v1-sops--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-v1-sops--id-" data-method="DELETE"
      data-path="api/v1/sops/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-v1-sops--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-v1-sops--id-"
                    onclick="tryItOut('DELETEapi-v1-sops--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-v1-sops--id-"
                    onclick="cancelTryOut('DELETEapi-v1-sops--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-v1-sops--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/v1/sops/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-v1-sops--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-v1-sops--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-v1-sops--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the sop. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-v1-organisasi">Menampilkan hierarki struktur organisasi laboratorium.</h2>

<p>
</p>

<p>Mengembalikan pohon struktur hierarki pimpinan, koordinator, dan pranata lab.</p>

<span id="example-requests-GETapi-v1-organisasi">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/organisasi" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/organisasi"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-organisasi">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Pohon hierarki organisasi berhasil diambil.&quot;,
    &quot;data&quot;: null
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-organisasi" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-organisasi"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-organisasi"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-organisasi" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-organisasi">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-organisasi" data-method="GET"
      data-path="api/v1/organisasi"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-organisasi', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-organisasi"
                    onclick="tryItOut('GETapi-v1-organisasi');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-organisasi"
                    onclick="cancelTryOut('GETapi-v1-organisasi');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-organisasi"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/organisasi</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-organisasi"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-organisasi"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-v1-organisasi">Menambahkan personel baru ke dalam struktur organisasi.</h2>

<p>
</p>



<span id="example-requests-POSTapi-v1-organisasi">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost:8000/api/v1/organisasi" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nama\": \"b\",
    \"nip\": \"n\",
    \"jabatan\": \"g\",
    \"level\": \"staf\",
    \"divisi\": \"z\",
    \"laboratorium\": \"m\",
    \"email\": \"gulgowski.asia@example.com\",
    \"telepon\": \"j\",
    \"status\": \"Aktif\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/organisasi"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nama": "b",
    "nip": "n",
    "jabatan": "g",
    "level": "staf",
    "divisi": "z",
    "laboratorium": "m",
    "email": "gulgowski.asia@example.com",
    "telepon": "j",
    "status": "Aktif"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-v1-organisasi">
</span>
<span id="execution-results-POSTapi-v1-organisasi" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-v1-organisasi"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-v1-organisasi"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-v1-organisasi" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-v1-organisasi">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-v1-organisasi" data-method="POST"
      data-path="api/v1/organisasi"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-v1-organisasi', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-v1-organisasi"
                    onclick="tryItOut('POSTapi-v1-organisasi');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-v1-organisasi"
                    onclick="cancelTryOut('POSTapi-v1-organisasi');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-v1-organisasi"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/v1/organisasi</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-v1-organisasi"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-v1-organisasi"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>parent_id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="parent_id"                data-endpoint="POSTapi-v1-organisasi"
               value=""
               data-component="body">
    <br>
<p>Must match an existing stored value.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama"                data-endpoint="POSTapi-v1-organisasi"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nip</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nip"                data-endpoint="POSTapi-v1-organisasi"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>jabatan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="jabatan"                data-endpoint="POSTapi-v1-organisasi"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>level</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="level"                data-endpoint="POSTapi-v1-organisasi"
               value="staf"
               data-component="body">
    <br>
<p>Example: <code>staf</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>pimpinan</code></li> <li><code>koordinator</code></li> <li><code>sub_koordinator</code></li> <li><code>laboran</code></li> <li><code>staf</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>divisi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="divisi"                data-endpoint="POSTapi-v1-organisasi"
               value="z"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium"                data-endpoint="POSTapi-v1-organisasi"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>email</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="email"                data-endpoint="POSTapi-v1-organisasi"
               value="gulgowski.asia@example.com"
               data-component="body">
    <br>
<p>Must be a valid email address. Must not be greater than 255 characters. Example: <code>gulgowski.asia@example.com</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>telepon</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="telepon"                data-endpoint="POSTapi-v1-organisasi"
               value="j"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>j</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>status</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="status"                data-endpoint="POSTapi-v1-organisasi"
               value="Aktif"
               data-component="body">
    <br>
<p>Example: <code>Aktif</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Aktif</code></li> <li><code>Cuti</code></li> <li><code>Tugas Belajar</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>tupoksi</code></b>&nbsp;&nbsp;
<small>object</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="tupoksi"                data-endpoint="POSTapi-v1-organisasi"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>sertifikasi</code></b>&nbsp;&nbsp;
<small>object</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="sertifikasi"                data-endpoint="POSTapi-v1-organisasi"
               value=""
               data-component="body">
    <br>

        </div>
        </form>

                    <h2 id="endpoints-GETapi-v1-organisasi--id-">Menampilkan detail satu personel organisasi.</h2>

<p>
</p>



<span id="example-requests-GETapi-v1-organisasi--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/organisasi/16" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/organisasi/16"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-organisasi--id-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;No query results for model [App\\Models\\Organisasi] 16&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-organisasi--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-organisasi--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-organisasi--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-organisasi--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-organisasi--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-organisasi--id-" data-method="GET"
      data-path="api/v1/organisasi/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-organisasi--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-organisasi--id-"
                    onclick="tryItOut('GETapi-v1-organisasi--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-organisasi--id-"
                    onclick="cancelTryOut('GETapi-v1-organisasi--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-organisasi--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/organisasi/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-organisasi--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-organisasi--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-v1-organisasi--id-"
               value="16"
               data-component="url">
    <br>
<p>The ID of the organisasi. Example: <code>16</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-v1-organisasi--id-">Memperbarui data personel organisasi.</h2>

<p>
</p>



<span id="example-requests-PUTapi-v1-organisasi--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost:8000/api/v1/organisasi/16" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nama\": \"b\",
    \"nip\": \"n\",
    \"jabatan\": \"g\",
    \"level\": \"pimpinan\",
    \"divisi\": \"z\",
    \"laboratorium\": \"m\",
    \"email\": \"gulgowski.asia@example.com\",
    \"telepon\": \"j\",
    \"status\": \"Aktif\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/organisasi/16"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nama": "b",
    "nip": "n",
    "jabatan": "g",
    "level": "pimpinan",
    "divisi": "z",
    "laboratorium": "m",
    "email": "gulgowski.asia@example.com",
    "telepon": "j",
    "status": "Aktif"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-v1-organisasi--id-">
</span>
<span id="execution-results-PUTapi-v1-organisasi--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-v1-organisasi--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-v1-organisasi--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-v1-organisasi--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-v1-organisasi--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-v1-organisasi--id-" data-method="PUT"
      data-path="api/v1/organisasi/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-v1-organisasi--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-v1-organisasi--id-"
                    onclick="tryItOut('PUTapi-v1-organisasi--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-v1-organisasi--id-"
                    onclick="cancelTryOut('PUTapi-v1-organisasi--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-v1-organisasi--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/v1/organisasi/{id}</code></b>
        </p>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/v1/organisasi/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="16"
               data-component="url">
    <br>
<p>The ID of the organisasi. Example: <code>16</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>parent_id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="parent_id"                data-endpoint="PUTapi-v1-organisasi--id-"
               value=""
               data-component="body">
    <br>
<p>Must match an existing stored value.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nama</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nama"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nip</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nip"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>jabatan</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="jabatan"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="g"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>level</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="level"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="pimpinan"
               data-component="body">
    <br>
<p>Example: <code>pimpinan</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>pimpinan</code></li> <li><code>koordinator</code></li> <li><code>sub_koordinator</code></li> <li><code>laboran</code></li> <li><code>staf</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>divisi</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="divisi"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="z"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>laboratorium</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="laboratorium"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>email</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="email"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="gulgowski.asia@example.com"
               data-component="body">
    <br>
<p>Must be a valid email address. Must not be greater than 255 characters. Example: <code>gulgowski.asia@example.com</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>telepon</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="telepon"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="j"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>j</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>status</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="status"                data-endpoint="PUTapi-v1-organisasi--id-"
               value="Aktif"
               data-component="body">
    <br>
<p>Example: <code>Aktif</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Aktif</code></li> <li><code>Cuti</code></li> <li><code>Tugas Belajar</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>tupoksi</code></b>&nbsp;&nbsp;
<small>object</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="tupoksi"                data-endpoint="PUTapi-v1-organisasi--id-"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>sertifikasi</code></b>&nbsp;&nbsp;
<small>object</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="sertifikasi"                data-endpoint="PUTapi-v1-organisasi--id-"
               value=""
               data-component="body">
    <br>

        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-v1-organisasi--id-">Menghapus personel dari struktur organisasi.</h2>

<p>
</p>



<span id="example-requests-DELETEapi-v1-organisasi--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost:8000/api/v1/organisasi/16" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/organisasi/16"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-v1-organisasi--id-">
</span>
<span id="execution-results-DELETEapi-v1-organisasi--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-v1-organisasi--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-v1-organisasi--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-v1-organisasi--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-v1-organisasi--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-v1-organisasi--id-" data-method="DELETE"
      data-path="api/v1/organisasi/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-v1-organisasi--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-v1-organisasi--id-"
                    onclick="tryItOut('DELETEapi-v1-organisasi--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-v1-organisasi--id-"
                    onclick="cancelTryOut('DELETEapi-v1-organisasi--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-v1-organisasi--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/v1/organisasi/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-v1-organisasi--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-v1-organisasi--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-v1-organisasi--id-"
               value="16"
               data-component="url">
    <br>
<p>The ID of the organisasi. Example: <code>16</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-v1-users">Menampilkan daftar akun pengguna sistem LAMDA.</h2>

<p>
</p>

<p>Menampilkan data akun, status otentikasi dua faktor (2FA), dan biometrik passkey.</p>

<span id="example-requests-GETapi-v1-users">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/users" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/users"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-users">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Daftar pengguna berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [
            {
                &quot;id&quot;: 5,
                &quot;name&quot;: &quot;Zulfahmi Ramadhani&quot;,
                &quot;email&quot;: &quot;zulfahmiramadhani@zetware.id&quot;,
                &quot;email_verified_at&quot;: null,
                &quot;two_factor_confirmed_at&quot;: null,
                &quot;created_at&quot;: &quot;2026-05-26T05:08:15.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-06-02T19:03:45.000000Z&quot;
            },
            {
                &quot;id&quot;: 2,
                &quot;name&quot;: &quot;Test User&quot;,
                &quot;email&quot;: &quot;test@example.com&quot;,
                &quot;email_verified_at&quot;: &quot;2026-05-19T13:40:54.000000Z&quot;,
                &quot;two_factor_confirmed_at&quot;: null,
                &quot;created_at&quot;: &quot;2026-05-19T13:40:55.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-19T13:40:55.000000Z&quot;
            },
            {
                &quot;id&quot;: 1,
                &quot;name&quot;: &quot;admin&quot;,
                &quot;email&quot;: &quot;admin@mail.com&quot;,
                &quot;email_verified_at&quot;: null,
                &quot;two_factor_confirmed_at&quot;: null,
                &quot;created_at&quot;: &quot;2026-05-18T19:14:08.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-05-18T19:14:08.000000Z&quot;
            },
            {
                &quot;id&quot;: 7,
                &quot;name&quot;: &quot;admin&quot;,
                &quot;email&quot;: &quot;admin2@mail.com&quot;,
                &quot;email_verified_at&quot;: null,
                &quot;two_factor_confirmed_at&quot;: null,
                &quot;created_at&quot;: null,
                &quot;updated_at&quot;: &quot;2026-09-15T09:01:59.000000Z&quot;
            }
        ],
        &quot;first_page_url&quot;: &quot;http://localhost:8000/api/v1/users?page=1&quot;,
        &quot;from&quot;: 1,
        &quot;last_page&quot;: 1,
        &quot;last_page_url&quot;: &quot;http://localhost:8000/api/v1/users?page=1&quot;,
        &quot;links&quot;: [
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/users?page=1&quot;,
                &quot;label&quot;: &quot;1&quot;,
                &quot;page&quot;: 1,
                &quot;active&quot;: true
            },
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            }
        ],
        &quot;next_page_url&quot;: null,
        &quot;path&quot;: &quot;http://localhost:8000/api/v1/users&quot;,
        &quot;per_page&quot;: 15,
        &quot;prev_page_url&quot;: null,
        &quot;to&quot;: 4,
        &quot;total&quot;: 4
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-users" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-users"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-users"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-users" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-users">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-users" data-method="GET"
      data-path="api/v1/users"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-users', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-users"
                    onclick="tryItOut('GETapi-v1-users');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-users"
                    onclick="cancelTryOut('GETapi-v1-users');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-users"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/users</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-users"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-users"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-v1-users">Membuat akun pengguna baru.</h2>

<p>
</p>



<span id="example-requests-POSTapi-v1-users">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost:8000/api/v1/users" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"name\": \"b\",
    \"email\": \"zbailey@example.net\",
    \"password\": \"-0pBNvYgxw\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/users"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "b",
    "email": "zbailey@example.net",
    "password": "-0pBNvYgxw"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-v1-users">
</span>
<span id="execution-results-POSTapi-v1-users" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-v1-users"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-v1-users"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-v1-users" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-v1-users">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-v1-users" data-method="POST"
      data-path="api/v1/users"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-v1-users', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-v1-users"
                    onclick="tryItOut('POSTapi-v1-users');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-v1-users"
                    onclick="cancelTryOut('POSTapi-v1-users');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-v1-users"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/v1/users</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-v1-users"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-v1-users"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>name</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="name"                data-endpoint="POSTapi-v1-users"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>email</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="email"                data-endpoint="POSTapi-v1-users"
               value="zbailey@example.net"
               data-component="body">
    <br>
<p>Must be a valid email address. Must not be greater than 255 characters. Example: <code>zbailey@example.net</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>password</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="password"                data-endpoint="POSTapi-v1-users"
               value="-0pBNvYgxw"
               data-component="body">
    <br>
<p>Must be at least 8 characters. Example: <code>-0pBNvYgxw</code></p>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-v1-users--id-">Menampilkan profil detail pengguna.</h2>

<p>
</p>



<span id="example-requests-GETapi-v1-users--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/users/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/users/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-users--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Detail pengguna berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;admin&quot;,
        &quot;email&quot;: &quot;admin@mail.com&quot;,
        &quot;email_verified_at&quot;: null,
        &quot;two_factor_confirmed_at&quot;: null,
        &quot;created_at&quot;: &quot;2026-05-18T19:14:08.000000Z&quot;,
        &quot;updated_at&quot;: &quot;2026-05-18T19:14:08.000000Z&quot;
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-users--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-users--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-users--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-users--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-users--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-users--id-" data-method="GET"
      data-path="api/v1/users/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-users--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-users--id-"
                    onclick="tryItOut('GETapi-v1-users--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-users--id-"
                    onclick="cancelTryOut('GETapi-v1-users--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-users--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/users/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-users--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-users--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-v1-users--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the user. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-v1-users--id-">Memperbarui data pengguna.</h2>

<p>
</p>



<span id="example-requests-PUTapi-v1-users--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost:8000/api/v1/users/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"name\": \"b\",
    \"password\": \"]|{+-0pBNvYg\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/users/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "name": "b",
    "password": "]|{+-0pBNvYg"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-v1-users--id-">
</span>
<span id="execution-results-PUTapi-v1-users--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-v1-users--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-v1-users--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-v1-users--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-v1-users--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-v1-users--id-" data-method="PUT"
      data-path="api/v1/users/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-v1-users--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-v1-users--id-"
                    onclick="tryItOut('PUTapi-v1-users--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-v1-users--id-"
                    onclick="cancelTryOut('PUTapi-v1-users--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-v1-users--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/v1/users/{id}</code></b>
        </p>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/v1/users/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-v1-users--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-v1-users--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-v1-users--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the user. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>name</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="name"                data-endpoint="PUTapi-v1-users--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>email</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="email"                data-endpoint="PUTapi-v1-users--id-"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>password</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="password"                data-endpoint="PUTapi-v1-users--id-"
               value="]|{+-0pBNvYg"
               data-component="body">
    <br>
<p>Must be at least 8 characters. Example: <code>]|{+-0pBNvYg</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-v1-users--id-">Menghapus akun pengguna.</h2>

<p>
</p>



<span id="example-requests-DELETEapi-v1-users--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost:8000/api/v1/users/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/users/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-v1-users--id-">
</span>
<span id="execution-results-DELETEapi-v1-users--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-v1-users--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-v1-users--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-v1-users--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-v1-users--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-v1-users--id-" data-method="DELETE"
      data-path="api/v1/users/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-v1-users--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-v1-users--id-"
                    onclick="tryItOut('DELETEapi-v1-users--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-v1-users--id-"
                    onclick="cancelTryOut('DELETEapi-v1-users--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-v1-users--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/v1/users/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-v1-users--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-v1-users--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-v1-users--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the user. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-v1-fakultas">Menampilkan daftar semua fakultas.</h2>

<p>
</p>

<p>Endpoint ini mengembalikan daftar fakultas yang terdaftar,
mendukung pencarian berdasarkan nama fakultas dan opsi pagination.</p>

<span id="example-requests-GETapi-v1-fakultas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/fakultas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/fakultas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-fakultas">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Daftar fakultas berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [
            {
                &quot;id&quot;: 1,
                &quot;fakultas&quot;: &quot;Farmasi&quot;,
                &quot;created_at&quot;: &quot;2026-10-05T08:09:19.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-10-05T08:55:17.000000Z&quot;
            },
            {
                &quot;id&quot;: 2,
                &quot;fakultas&quot;: &quot;FIKST&quot;,
                &quot;created_at&quot;: &quot;2026-10-05T08:09:19.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-10-16T13:18:42.000000Z&quot;
            },
            {
                &quot;id&quot;: 3,
                &quot;fakultas&quot;: &quot;FISH&quot;,
                &quot;created_at&quot;: &quot;2026-10-05T08:09:19.000000Z&quot;,
                &quot;updated_at&quot;: &quot;2026-10-05T08:55:38.000000Z&quot;
            }
        ],
        &quot;first_page_url&quot;: &quot;http://localhost:8000/api/v1/fakultas?page=1&quot;,
        &quot;from&quot;: 1,
        &quot;last_page&quot;: 1,
        &quot;last_page_url&quot;: &quot;http://localhost:8000/api/v1/fakultas?page=1&quot;,
        &quot;links&quot;: [
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;http://localhost:8000/api/v1/fakultas?page=1&quot;,
                &quot;label&quot;: &quot;1&quot;,
                &quot;page&quot;: 1,
                &quot;active&quot;: true
            },
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                &quot;page&quot;: null,
                &quot;active&quot;: false
            }
        ],
        &quot;next_page_url&quot;: null,
        &quot;path&quot;: &quot;http://localhost:8000/api/v1/fakultas&quot;,
        &quot;per_page&quot;: 15,
        &quot;prev_page_url&quot;: null,
        &quot;to&quot;: 3,
        &quot;total&quot;: 3
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-fakultas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-fakultas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-fakultas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-fakultas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-fakultas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-fakultas" data-method="GET"
      data-path="api/v1/fakultas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-fakultas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-fakultas"
                    onclick="tryItOut('GETapi-v1-fakultas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-fakultas"
                    onclick="cancelTryOut('GETapi-v1-fakultas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-fakultas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/fakultas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-fakultas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-fakultas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-v1-fakultas">Menyimpan data fakultas baru.</h2>

<p>
</p>



<span id="example-requests-POSTapi-v1-fakultas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost:8000/api/v1/fakultas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"fakultas\": \"b\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/fakultas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "fakultas": "b"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-v1-fakultas">
</span>
<span id="execution-results-POSTapi-v1-fakultas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-v1-fakultas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-v1-fakultas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-v1-fakultas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-v1-fakultas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-v1-fakultas" data-method="POST"
      data-path="api/v1/fakultas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-v1-fakultas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-v1-fakultas"
                    onclick="tryItOut('POSTapi-v1-fakultas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-v1-fakultas"
                    onclick="cancelTryOut('POSTapi-v1-fakultas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-v1-fakultas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/v1/fakultas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-v1-fakultas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-v1-fakultas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fakultas</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fakultas"                data-endpoint="POSTapi-v1-fakultas"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-v1-fakultas--fakultas_id-">Menampilkan detail satu fakultas.</h2>

<p>
</p>



<span id="example-requests-GETapi-v1-fakultas--fakultas_id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost:8000/api/v1/fakultas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/fakultas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-v1-fakultas--fakultas_id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;success&quot;,
    &quot;message&quot;: &quot;Detail fakultas berhasil diambil.&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;fakultas&quot;: &quot;Farmasi&quot;,
        &quot;created_at&quot;: &quot;2026-10-05T08:09:19.000000Z&quot;,
        &quot;updated_at&quot;: &quot;2026-10-05T08:55:17.000000Z&quot;
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-v1-fakultas--fakultas_id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-v1-fakultas--fakultas_id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-v1-fakultas--fakultas_id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-v1-fakultas--fakultas_id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-v1-fakultas--fakultas_id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-v1-fakultas--fakultas_id-" data-method="GET"
      data-path="api/v1/fakultas/{fakultas_id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-v1-fakultas--fakultas_id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-v1-fakultas--fakultas_id-"
                    onclick="tryItOut('GETapi-v1-fakultas--fakultas_id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-v1-fakultas--fakultas_id-"
                    onclick="cancelTryOut('GETapi-v1-fakultas--fakultas_id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-v1-fakultas--fakultas_id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/v1/fakultas/{fakultas_id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-v1-fakultas--fakultas_id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-v1-fakultas--fakultas_id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>fakultas_id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="fakultas_id"                data-endpoint="GETapi-v1-fakultas--fakultas_id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the fakultas. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-v1-fakultas--fakultas_id-">Memperbarui data fakultas.</h2>

<p>
</p>



<span id="example-requests-PUTapi-v1-fakultas--fakultas_id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost:8000/api/v1/fakultas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/fakultas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "PUT",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-v1-fakultas--fakultas_id-">
</span>
<span id="execution-results-PUTapi-v1-fakultas--fakultas_id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-v1-fakultas--fakultas_id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-v1-fakultas--fakultas_id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-v1-fakultas--fakultas_id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-v1-fakultas--fakultas_id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-v1-fakultas--fakultas_id-" data-method="PUT"
      data-path="api/v1/fakultas/{fakultas_id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-v1-fakultas--fakultas_id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-v1-fakultas--fakultas_id-"
                    onclick="tryItOut('PUTapi-v1-fakultas--fakultas_id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-v1-fakultas--fakultas_id-"
                    onclick="cancelTryOut('PUTapi-v1-fakultas--fakultas_id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-v1-fakultas--fakultas_id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/v1/fakultas/{fakultas_id}</code></b>
        </p>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/v1/fakultas/{fakultas_id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-v1-fakultas--fakultas_id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-v1-fakultas--fakultas_id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>fakultas_id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="fakultas_id"                data-endpoint="PUTapi-v1-fakultas--fakultas_id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the fakultas. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fakultas</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fakultas"                data-endpoint="PUTapi-v1-fakultas--fakultas_id-"
               value=""
               data-component="body">
    <br>

        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-v1-fakultas--fakultas_id-">Menghapus data fakultas.</h2>

<p>
</p>



<span id="example-requests-DELETEapi-v1-fakultas--fakultas_id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost:8000/api/v1/fakultas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost:8000/api/v1/fakultas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-v1-fakultas--fakultas_id-">
</span>
<span id="execution-results-DELETEapi-v1-fakultas--fakultas_id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-v1-fakultas--fakultas_id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-v1-fakultas--fakultas_id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-v1-fakultas--fakultas_id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-v1-fakultas--fakultas_id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-v1-fakultas--fakultas_id-" data-method="DELETE"
      data-path="api/v1/fakultas/{fakultas_id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-v1-fakultas--fakultas_id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-v1-fakultas--fakultas_id-"
                    onclick="tryItOut('DELETEapi-v1-fakultas--fakultas_id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-v1-fakultas--fakultas_id-"
                    onclick="cancelTryOut('DELETEapi-v1-fakultas--fakultas_id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-v1-fakultas--fakultas_id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/v1/fakultas/{fakultas_id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-v1-fakultas--fakultas_id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-v1-fakultas--fakultas_id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>fakultas_id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="fakultas_id"                data-endpoint="DELETEapi-v1-fakultas--fakultas_id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the fakultas. Example: <code>1</code></p>
            </div>
                    </form>

            

        
    </div>
    <div class="dark-box">
                    <div class="lang-selector">
                                                        <button type="button" class="lang-button" data-language-name="bash">bash</button>
                                                        <button type="button" class="lang-button" data-language-name="javascript">javascript</button>
                            </div>
            </div>
</div>
</body>
</html>
