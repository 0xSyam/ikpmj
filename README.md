# IKPMJ Website - Next.js

![IKPMJ Logo](public/img/IKPMJ.png)

Ini adalah proyek website resmi untuk IKPMJ (Ikatan Keluarga Pelajar Mahasiswa Jember) yang dibangun menggunakan Next.js dan TypeScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Fitur Utama

- **Desain Modern & Responsif**: Tampilan yang menarik dan dapat diakses di berbagai perangkat, dari desktop hingga mobile.
- **Framework Terbaru**: Dibangun di atas Next.js 14 dengan App Router untuk performa dan pengalaman pengembang terbaik.
- **TypeScript**: Kode yang lebih aman dan mudah dikelola dengan static typing.
- **Komponen Modular**: Struktur berbasis komponen dengan React untuk kemudahan penggunaan kembali dan pemeliharaan.
- **Optimasi Gambar**: Pemuatan gambar yang efisien menggunakan komponen `next/image`.
- **SEO Friendly**: Struktur yang dioptimalkan untuk mesin pencari agar mudah ditemukan.
- **Animasi Halus**: Menggunakan AOS (Animate On Scroll) untuk pengalaman pengguna yang lebih dinamis.

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Bootstrap](https://getbootstrap.com/)
- **Animasi**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: npm

## 🚀 Memulai Proyek

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone repository:**
    ```bash
    git clone https://github.com/0xSyam/IKPMJ.git
    cd IKPMJ
    ```

2.  **Instalasi dependensi:**
    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

4.  Buka browser Anda dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📂 Struktur Proyek

```
ikpmj-nextjs/
├── public/                 # Aset statis (gambar, font, CSS)
│   ├── css/
│   ├── fonts/
│   ├── img/
│   └── js/
├── src/                    # Kode sumber aplikasi
│   ├── app/                # Halaman dan layout (App Router)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Komponen React yang dapat digunakan kembali
│   └── types/              # Definisi tipe TypeScript
├── .gitignore
├── next.config.mjs         # Konfigurasi Next.js
├── package.json            # Dependensi dan skrip proyek
└── tsconfig.json           # Konfigurasi TypeScript
```

## 🤝 Kontribusi

Kontribusi untuk pengembangan proyek ini sangat diharapkan. Jika Anda ingin berkontribusi, silakan buat *fork* dari repositori ini dan ajukan *pull request*.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Dibuat dengan ❤️ untuk IKPMJ.
