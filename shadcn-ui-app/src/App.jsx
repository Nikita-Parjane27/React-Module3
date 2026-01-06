import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeedbackForm from './components/FeedbackForm';
import ImageSlideshow from './components/ImageSlideshow';
import TodoApp from './components/TodoApp';
import { MessageSquare, Images, ListTodo, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-600 animate-pulse" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              shadcn/ui Apps
            </h1>
            <Sparkles className="w-10 h-10 text-purple-600 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg font-medium">
            Three beautiful interactive applications built with React & shadcn/ui ✨
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">React</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">shadcn/ui</span>
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold">Tailwind CSS</span>
          </div>
        </div>

        <Tabs defaultValue="feedback" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl border-2 border-white h-auto">
            <TabsTrigger 
              value="feedback" 
              className="flex flex-col md:flex-row items-center gap-2 py-4 text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="hidden sm:inline">Feedback Form</span>
              <span className="sm:hidden">Feedback</span>
            </TabsTrigger>
            <TabsTrigger 
              value="slideshow" 
              className="flex flex-col md:flex-row items-center gap-2 py-4 text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Images className="w-5 h-5" />
              <span className="hidden sm:inline">Image Slideshow</span>
              <span className="sm:hidden">Slideshow</span>
            </TabsTrigger>
            <TabsTrigger 
              value="todo" 
              className="flex flex-col md:flex-row items-center gap-2 py-4 text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <ListTodo className="w-5 h-5" />
              <span className="hidden sm:inline">Todo List</span>
              <span className="sm:hidden">Todo</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="feedback" className="mt-0">
            <FeedbackForm />
          </TabsContent>
          
          <TabsContent value="slideshow" className="mt-0">
            <ImageSlideshow />
          </TabsContent>
          
          <TabsContent value="todo" className="mt-0">
            <TodoApp />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-10 text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <p className="text-gray-600 font-medium">
            Built with using React, shadcn/ui & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}