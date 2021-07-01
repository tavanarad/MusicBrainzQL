import { useParams } from "react-router-dom";

function ArtistPage() {
  const { id: artistId } = useParams();
  return <p>Artist - {artistId}</p>;
}

export default ArtistPage;
