
"use client";

import { useState, useEffect, useCallback } from 'react';
import AnimalCard from '@/components/kiwi-critters/AnimalCard';
import GameControls from '@/components/kiwi-critters/GameControls';
import { Skeleton } from '@/components/ui/skeleton';

interface Animal {
  id: number;
  name: string;
  description: string;
}

const staticAnimalsData: Animal[] = [
  { id: 1, name: "Kiwi", description: "A flightless bird with a long beak, native to New Zealand. It lays the largest egg in relation to its body size of any bird." },
  { id: 2, name: "Tūī", description: "An endemic passerine bird known for its beautiful, complex songs and iridescent plumage, with distinctive white throat tufts." },
  { id: 3, name: "Kākāpō", description: "A species of large, flightless, nocturnal, ground-dwelling parrot. It is critically endangered and has a distinct mossy green color." },
  { id: 4, name: "Kea", description: "The world's only alpine parrot, known for its intelligence, curiosity, and olive-green feathers with brilliant orange underwings." },
  { id: 5, name: "Pūkeko", description: "A swamphen with distinctive deep blue and black plumage, a bright red bill, and long, reddish legs." },
  { id: 6, name: "Wētā", description: "Large, flightless crickets, some species are among the heaviest insects in the world. They are ancient and nocturnal." },
  { id: 7, name: "Tuatara", description: "A reptile endemic to New Zealand, often called a 'living fossil' as it's the only surviving member of its ancient order." },
  { id: 8, name: "Morepork (Ruru)", description: "A small brown owl found throughout New Zealand, known for its distinctive 'more-pork' call and keen night vision." },
  { id: 9, name: "Hector's Dolphin", description: "One of the world's rarest and smallest marine dolphins, found only in the coastal waters of New Zealand." },
  { id: 10, name: "Yellow-eyed Penguin (Hoiho)", description: "An endangered penguin species native to New Zealand, recognizable by its pale yellow eye band." },
  { id: 11, name: "Fantail (Pīwakawaka)", description: "A small, friendly bird known for its distinctive fanned tail and acrobatic flight while catching insects." },
  { id: 12, name: "Silver Fern (Ponga)", description: "Though a plant, it's a national symbol. Its fronds have a distinctive silver-white underside." },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function KiwiCrittersPage() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const initializeAnimals = useCallback(() => {
    setIsLoading(true);
    // Simulate a brief loading period for better UX, even if shuffling is fast
    setTimeout(() => {
      setAnimals(shuffleArray(staticAnimalsData));
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    initializeAnimals();
  }, [initializeAnimals]);

  const handleNewGame = () => {
    initializeAnimals();
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 flex flex-col">
      <header className="text-center my-6 md:my-10">
        <h1 className="text-5xl md:text-6xl font-headline text-primary drop-shadow-sm">Kiwi Critters</h1>
        <p className="text-muted-foreground mt-3 text-lg font-body">Flip the cards to discover New Zealand&apos;s unique animals!</p>
      </header>

      <GameControls onNewGame={handleNewGame} />

      <main className="flex-grow">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-80 rounded-lg" />
            ))}
          </div>
        ) : animals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} name={animal.name} description={animal.description} />
            ))}
          </div>
        ) : (
          <p className="text-center font-body text-lg">No critters found! Try starting a new game.</p>
        )}
      </main>
      
      <footer className="text-center mt-12 py-6 border-t border-border/50">
        <p className="text-sm text-muted-foreground font-body">
          Crafted with care for Kiwi Critter enthusiasts.
        </p>
      </footer>
    </div>
  );
}
