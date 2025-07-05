# Canyon University Template Next.js

Proyek ini adalah konversi dari template HTML Canyon University ke Next.js.

## Fitur

- Responsif untuk semua ukuran perangkat
- Dibangun dengan Next.js dan TypeScript
- Komponen yang dapat digunakan kembali
- Optimasi gambar dengan Next.js Image
- SEO yang dioptimalkan

## Memulai

Pertama, jalankan server pengembangan:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

## Struktur Proyek

```
├── public/             # Aset statis (gambar, CSS, dll.)
├── src/                # Kode sumber
│   ├── app/            # Direktori aplikasi Next.js
│   │   ├── page.tsx    # Halaman beranda
│   │   └── layout.tsx  # Layout aplikasi
│   ├── components/     # Komponen React yang dapat digunakan kembali
│   └── styles/         # Stylesheet tambahan (jika diperlukan)
└── package.json        # Dependensi proyek
```

## Teknologi

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - JavaScript dengan sintaks tipe
- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [AOS](https://michalsnik.github.io/aos/) - Animasi saat scroll

## Pengembangan

Proyek ini menggunakan perintah standar Next.js:

- `npm run dev` - Jalankan server pengembangan
- `npm run build` - Bangun aplikasi untuk produksi
- `npm run start` - Jalankan aplikasi yang sudah dibangun

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
