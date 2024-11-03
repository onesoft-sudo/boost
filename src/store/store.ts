"use client";

import { create } from "zustand";

type State = {
    apps: string[];
};

type Actions = {
    setApps: (apps: State["apps"]) => void;
};

export const useStore = create<State & Actions>((set) => ({
    apps: [],
    setApps: (apps) => set({ apps }),
}));
