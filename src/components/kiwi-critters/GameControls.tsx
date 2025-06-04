
"use client";

import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface GameControlsProps {
  onNewGame: () => void;
}

export default function GameControls({ onNewGame }: GameControlsProps) {
  return (
    <div className="my-8 flex justify-center">
      <Button onClick={onNewGame} variant="default" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
        <RefreshCw className="mr-2 h-5 w-5" />
        New Game
      </Button>
    </div>
  );
}
