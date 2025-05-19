import React, { createContext, ReactNode, useContext, useState } from "react";

interface ProfileContextType {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  createDoctorsNote: boolean;
  setCreateDoctorsNote: (value: boolean) => void;
  isMedicationsModal: boolean;
  setIsMedicationsModal: (value: boolean) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  openNotesModal: boolean;
  setOpenNotesModal: (value: boolean) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [createDoctorsNote, setCreateDoctorsNote] = useState(false);
  const [openNotesModal, setOpenNotesModal] = useState(false);
  const [isMedicationsModal, setIsMedicationsModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ProfileContext.Provider
      value={{
        editMode,
        setEditMode,
        isMedicationsModal,
        setIsMedicationsModal,
        createDoctorsNote,
        setCreateDoctorsNote,
        setOpenNotesModal,
        openNotesModal,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};
