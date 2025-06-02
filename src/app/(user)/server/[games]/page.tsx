export default async function Page({
  params,
}: {
  params: Promise<{ games: string }>;
}) {
  const games = (await params).games;

  return (
    <>
      <div>games: {games}</div>
      <>
        <div>Filter: Game, Tag, Verified, Peringkat, Online</div>
        <div>Sort: Popularitas, Terbaru, Rating Tertinggi</div>
        <div>Nama + banner</div>
        <>
          <div>Skor total (upvote + feedback)</div>
          <div>Status (online/offline)</div>
          <div>Tag & kategori</div>
          <div>Tombol Lihat Detail</div>
        </>
      </>
    </>
  );
}
