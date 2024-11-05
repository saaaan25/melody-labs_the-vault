import React from 'react';
import { FaPalette } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import Image from 'next/image';

const ProfileSection: React.FC = () => {
  // Eliminamos el uso de estados y hooks interactivos.
  const profileImg = "https://ozmrtqgdxaioihjqacow.supabase.co/storage/v1/object/public/images/userImage-default.jpg";
  const currentName = "UsuarioNuevo";

  return (
    <div className="bg-custom-color-2 text-black h-full w-full overflow-hidden overflow-y-auto">
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{
          flex: '1',
          backgroundColor: 'bg-custom-color-2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div className="bg-custom-color-2 text-black h-full w-full overflow-hidden overflow-y-auto">
            <div className="mb-2 ml-14">
              <div className="flex justify-between items-center">
                <h1 className="text-black text-6xl font-bold">Perfil</h1>
              </div>
              <div style={{ display: 'grid', placeItems: 'center', height: '10vh' }}>
                <div className="relative">
                  {/* Imagen de perfil estática */}
                  <Image
                    src={profileImg}
                    alt="Foto de usuario"
                    className="rounded-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="p-2"></div>
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-black text-4xl">{currentName}</h3>
                  {/* Icono de editar nombre, pero sin funcionalidad */}
                  <button style={{ fontSize: '24px' }}>
                    <FaPencilAlt />
                  </button>
                </div>
                <div className="p-2"></div>
                <div className="p-2"></div>
                {/* Botón de personalizar tema, sin funcionalidad */}
                <button style={{ fontSize: '24px' }} className="bg-custom-color-6 pl-8 pr-8 pt-1 pb-1 rounded flex items-center gap-2">
                  <FaPalette />Personalizar tema
                </button>
                <div className="p-2"></div>
                {/* Botón de cerrar sesión, sin funcionalidad */}
                <button style={{ fontSize: '24px' }} className="bg-custom-color-6 pl-16 pr-16 pt-1 pb-1 rounded flex items-center gap-2">
                  <RiLogoutBoxLine /> Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

