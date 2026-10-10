"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import GameModal from "@/components/GameModal";

interface GameModalContextType {
  isGameOpen: boolean;
  selectedMap: string | null;
  openGame: (mapName?: string) => void;
  closeGame: () => void;
}

const GameModalContext = createContext<GameModalContextType | undefined>(undefined);

export function GameModalProvider({ children }: { children: ReactNode }) {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const openGame = useCallback((mapName?: string) => {
    if (mapName) setSelectedMap(mapName);
    setIsGameOpen(true);
  }, []);

  const closeGame = useCallback(() => {
    setIsGameOpen(false);
  }, []);

  return (
    <GameModalContext.Provider value={{ isGameOpen, selectedMap, openGame, closeGame }}>
      {children}
      <GameModal isOpen={isGameOpen} onClose={closeGame} selectedMap={selectedMap} />
    </GameModalContext.Provider>
  );
}

export function useGameModal() {
  const context = useContext(GameModalContext);
  if (!context) {
    throw new Error("useGameModal must be used within a GameModalProvider");
  }
  return context;
}
