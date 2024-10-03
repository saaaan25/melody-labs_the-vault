import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";

const User = () => {
  return (
    <div className="bg-custom-color-2 text-black h-full w-full overflow-hidden overflow-y-auto">
      <Header><></></Header >
      <div className="grid grid-cols-2 gap-32 container mx-auto px-4">
        <ProfileSection />
        <div className="w-full">
          <div className="bg-custom-color-3 rounded-lg px-6 pt-4 pb-2 mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Historial de reproducción
            </h2>
            {/* Aquí estaba el componente RecentContent */}
            <div></div>
          </div>
          <div className="bg-custom-color-3 rounded-lg px-6 pt-4 pb-2">
            <h2 className="text-2xl font-bold mb-4">Canciones favoritas</h2>
            {/* Aquí estaba el componente LikedContent */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
