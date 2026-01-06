import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', 
      title: 'Mountain View',
      description: 'Majestic peaks touching the sky'
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800', 
      title: 'Ocean Sunset',
      description: 'Golden hour by the sea'
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', 
      title: 'Forest Path',
      description: 'Nature trail through the woods'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="shadow-2xl border-2 border-purple-100">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Images className="w-6 h-6" />
          Image Slideshow
        </CardTitle>
        <CardDescription className="text-purple-50">
          Browse through beautiful scenic images
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 bg-gradient-to-br from-white to-purple-50">
        <div className="space-y-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-1">{images[currentIndex].title}</h3>
              <p className="text-gray-200 text-sm">{images[currentIndex].description}</p>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-md">
            <Button 
              onClick={handlePrevious} 
              variant="outline"
              className="flex items-center gap-2 border-2 border-purple-300 hover:bg-purple-100 hover:border-purple-500 transition-all duration-300 font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-purple-600">
                {currentIndex + 1}
              </span>
              <span className="text-xs text-gray-500">of {images.length}</span>
            </div>
            
            <Button 
              onClick={handleNext} 
              variant="outline"
              className="flex items-center gap-2 border-2 border-purple-300 hover:bg-purple-100 hover:border-purple-500 transition-all duration-300 font-semibold"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

\          <div className="flex justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-20 h-20 ring-4 ring-purple-500 scale-110' 
                    : 'w-16 h-16 ring-2 ring-gray-300 hover:ring-purple-300 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-purple-500/20"></div>
                )}
              </button>
            ))}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500 rounded-full"
              style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageSlideshow;