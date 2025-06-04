
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AnimalCardProps {
  name: string;
  description: string;
}

export default function AnimalCard({ name, description }: AnimalCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="card-container-perspective w-full h-80 cursor-pointer rounded-lg shadow-lg"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      aria-pressed={isFlipped}
      aria-label={`Card for ${name}. Front shows description, back shows name.`}
    >
      <div className={`card-inner-preserve3d w-full h-full ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front Face */}
        <Card className="card-face-base card-front absolute w-full h-full flex flex-col justify-start items-center p-1 text-center overflow-hidden">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="font-body text-lg text-muted-foreground">Can you guess who I am?</CardTitle>
          </CardHeader>
          <CardContent className="font-body text-sm flex-grow flex items-center justify-center px-4 pb-4">
            <p>{description}</p>
          </CardContent>
        </Card>
        
        {/* Back Face */}
        <Card className="card-face-base card-back absolute w-full h-full flex flex-col justify-center items-center p-4 text-center bg-primary text-primary-foreground">
          <CardContent className="font-body">
            <p className="text-2xl font-semibold">{name}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
