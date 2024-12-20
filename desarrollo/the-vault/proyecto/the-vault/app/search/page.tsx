import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchContent from "@/components/SearchContent";
import SearchInput from "@/components/SearchInput";
import SongRecent from "./components/SongRecent";
import getPlaylistsByUserId from "@/actions/getPlaylistsByUserId";

interface SearchProps {
  searchParams: {
    title: string;
  };
}
//Hola//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  const playlists = await getPlaylistsByUserId();

  return (
    <div className="bg-custom-color-2 text-black h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-6 mb-2 flex flex-col gap-y-6">
          <h1 className="text-black text-2xl font-bold">Buscar canciones</h1>
          <SearchInput />
        </div>
      </Header>
      {searchParams.title ? (
        <SearchContent songs={songs} playlists={playlists} />
      ) : (
        <div>
          <h3 className="text-black text-xl font-bold mt-2 ml-14"> Busquedas recientes </h3>
          <SongRecent />
        </div>
      )}
    </div>
  );
};

export default Search;
