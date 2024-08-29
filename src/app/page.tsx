import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const { data } = await photosGet();
  return (
    <section className="container mainContainer">
      { data?.length ? <Feed photos={data} /> :
        <div><p style={{
          color: '#444',
          fontSize: '1.25rem',
          marginBottom: '1rem'
        }}>Nunhuma foto encontrada.</p></div>
      }
    </section>
  );
}
