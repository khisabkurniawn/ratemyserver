export default async function Page({
  params,
}: {
  params: Promise<{ games: string; server: string }>;
}) {
  const games = (await params).games;
  const server = (await params).server;

  return (
    <>
      <div>games: {games}</div>
      <div>server: {server}</div>
      <>
        <div>Banner besar server</div>
        <div>Nama + status online</div>
        <div>Skor total (grafik breakdown)</div>
        <div>Uptime chart (7 hari)</div>
        <div>Tombol: Upvote, Feedback, Forum, Claim (jika belum diklaim)</div>
        <div>Feedback dari pengguna (rating + komentar)</div>
        <div>Update log</div>
        <div>Sub-forum terkait</div>
        <div>Owner info + badge</div>
        <div>Statistik singkat (jumlah vote, feedback, uptime)</div>
        <div>Feedback Form Modal</div>
        <div>Mini Forum Page</div>
      </>
    </>
  );
}
