export default async function Page({
  params,
}: {
  params: Promise<{ games: string }>;
}) {
  const games = (await params).games;

  return (
    <div>
      <div>{games}</div>
      <div>Game Header Logo + Nama Game + Deskripsi singkat</div>
      <div>
        Filter Bar Region, Version (jika ada), Mode (e.g. Survival, Factions),
        Sorting
      </div>
      <div>
        Top Rated This Month Berdasarkan skor agregat dari rating & uptime
      </div>
      <div>Verified Servers Server yang sudah diverifikasi owner-nya</div>
      <div>New Additions Server baru ditambahkan dalam 2 minggu terakhir</div>
      <div>Coming Soon Server baru yang belum launching</div>
      <div>
        Small Community Picks Server kecil dengan feedback positif tinggi
      </div>
      <div>CTA Submit/Claim Ajak user submit atau claim server baru</div>
    </div>
  );
}
