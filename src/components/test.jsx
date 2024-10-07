


// "use client"
// import React, { useState } from 'react';
// import { LayoutGrid, List, Calendar, PlayCircle } from 'lucide-react'; // Import the PlayCircle icon
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import SearchBar from "./searchbar";

// const categories = ['All', 'Technology', 'Design', 'Business', 'Lifestyle'];

// const blogPosts = [
//   { id: 1, title: 'The Future of AI', description: 'Exploring the latest advancements in artificial intelligence.', image: '/api/placeholder/800/400', date: new Date('2024-10-01') },
//   { id: 2, title: 'Sustainable Design Practices', description: 'How designers are incorporating eco-friendly solutions.', image: '/api/placeholder/800/400', date: new Date('2024-10-03') },
//   { id: 3, title: 'Startup Success Stories', description: 'Learn from entrepreneurs who made it big.', image: '/api/placeholder/800/400', date: new Date('2024-10-05') },
// ];

// const Dashboard = () => {
//   const [layout, setLayout] = useState('grid');
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     console.log('Selected date:', date);
//   };

//   const renderPosts = () => {
//     let filteredPosts = blogPosts;
//     if (selectedDate) {
//       filteredPosts = filteredPosts.filter(post => 
//         post.date.toDateString() === selectedDate.toDateString()
//       );
//     }

//     switch (layout) {
//       case 'grid':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
//             {filteredPosts.map((post) => (
//               <Card key={post.id} className="overflow-hidden">
//                 <div className="relative h-48">
//                   <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{post.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription>{post.description}</CardDescription>
//                   <p className="text-sm text-gray-500 mt-2">{post.date.toDateString()}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         );
//       case 'list':
//         return (
//           <div className="space-y-4">
//             {filteredPosts.map((post) => (
//               <Card key={post.id} className="flex overflow-hidden">
//                 <div className="relative w-1/4">
//                   <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
//                 </div>
//                 <div className="w-3/4 p-4">
//                   <CardTitle>{post.title}</CardTitle>
//                   <CardDescription className="mt-2">{post.description}</CardDescription>
//                   <p className="text-sm text-gray-500 mt-2">{post.date.toDateString()}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         );
//       case 'date':
//         return (
//           <div className="space-y-4">
//             {filteredPosts.map((post) => (
//               <Card key={post.id} className="p-4">
//                 <CardTitle>{post.title}</CardTitle>
//                 <CardDescription className="mt-2">{post.description}</CardDescription>
//                 <p className="text-sm text-gray-500 mt-2">{post.date.toDateString()}</p>
//               </Card>
//             ))}
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="relative">
//         <SearchBar />
//       </div>

//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             variant={activeCategory === category ? "default" : "outline"}
//             className="rounded-full px-4 py-2 text-sm"
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </Button>
//         ))}
//       </div>

//       {/* Add the audio play section here */}
//       <div className="flex items-center space-x-2">
//         <PlayCircle size={20} />
//         <span>Demo Audio Transcription</span>
//       </div>

//       <div className="flex justify-end items-center space-x-2">
//         <Button
//           variant={layout === 'grid' ? "default" : "outline"}
//           size="icon"
//           onClick={() => setLayout('grid')}
//         >
//           <LayoutGrid size={20} />
//         </Button>
//         <Button
//           variant={layout === 'list' ? "default" : "outline"}
//           size="icon"
//           onClick={() => setLayout('list')}
//         >
//           <List size={20} />
//         </Button>
//         <Button
//           variant={layout === 'date' ? "default" : "outline"}
//           size="icon"
//           onClick={() => setLayout('date')}
//         >
//           <Calendar size={20} />
//         </Button>
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           customInput={
//             <Button variant="outline" className="flex items-center space-x-2">
//               <Calendar size={16} />
//               <span>{selectedDate ? selectedDate.toDateString() : "Select Date"}</span>
//             </Button>
//           }
//           dateFormat="MMMM d, yyyy"
//         />
//       </div>

//       {renderPosts()}
//     </div>
//   );
// };

// export default Dashboard;
"use client"
import React, { useState } from 'react';
import { LayoutGrid, List, Calendar, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from "./searchbar";

const categories = ['All', 'Technology', 'Design', 'Business', 'Lifestyle'];

const blogPosts = [
  { id: 1, title: 'The Future of AI', description: 'Exploring the latest advancements in artificial intelligence.', image: '/api/placeholder/800/400', date: new Date('2024-10-01') },
  { id: 2, title: 'Sustainable Design Practices', description: 'How designers are incorporating eco-friendly solutions.', image: '/api/placeholder/800/400', date: new Date('2024-10-03') },
  { id: 3, title: 'Startup Success Stories', description: 'Learn from entrepreneurs who made it big.', image: '/api/placeholder/800/400', date: new Date('2024-10-05') },
];

const Dashboard = () => {
  const [layout, setLayout] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  const renderPosts = () => {
    let filteredPosts = blogPosts;
    if (selectedDate) {
      filteredPosts = filteredPosts.filter(post => 
        post.date.toDateString() === selectedDate.toDateString()
      );
    }

    switch (layout) {
      case 'grid':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{post.description}</CardDescription>
                  <p className="text-sm text-gray-500 mt-2">{post.date.toDateString()}</p>
                  {/* Adding subtitle under each card */}
                  <div className="mt-2 text-gray-400">This is a demo subtitle under the post.</div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 'list':
        return (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="flex overflow-hidden">
                <div className="relative w-1/4">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                </div>
                <div className="w-3/4 p-4">
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="mt-2">{post.description}</CardDescription>
                  <p className="text-sm text-gray-500 mt-2">{post.date.toDateString()}</p>
                  {/* Adding subtitle under each card */}
                  <div className="mt-2 text-gray-400">This is a demo subtitle under the post.</div>
                </div>
              </Card>
            ))}
          </div>
        );
      case 'date':
        return (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="p-4">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="mt-2">{post.description}</CardDescription>
                <p className="text-sm text-gray-500 mt-2">{post.date.toDateString()}</p>
                {/* Adding subtitle under each card */}
                <div className="mt-2 text-gray-400">This is a demo subtitle under the post.</div>
              </Card>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <SearchBar />
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="rounded-full px-4 py-2 text-sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Separate audio play section */}
      <div className="flex flex-col items-start space-y-1">
        <div className="flex items-center space-x-2">
          <PlayCircle size={20} />
          <span>Demo Audio Transcription</span>
        </div>
        <span className="text-gray-400">Listen to the audio transcription demo for more insights.</span>
      </div>

      <div className="flex justify-end items-center space-x-2">
        <Button
          variant={layout === 'grid' ? "default" : "outline"}
          size="icon"
          onClick={() => setLayout('grid')}
        >
          <LayoutGrid size={20} />
        </Button>
        <Button
          variant={layout === 'list' ? "default" : "outline"}
          size="icon"
          onClick={() => setLayout('list')}
        >
          <List size={20} />
        </Button>
        <Button
          variant={layout === 'date' ? "default" : "outline"}
          size="icon"
          onClick={() => setLayout('date')}
        >
          <Calendar size={20} />
        </Button>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{selectedDate ? selectedDate.toDateString() : "Select Date"}</span>
            </Button>
          }
          dateFormat="MMMM d, yyyy"
        />
      </div>

      {renderPosts()}

      {/* Another audio play section below the cards */}
      <div className="flex flex-col items-start space-y-1 mt-6">
        <div className="flex items-center space-x-2">
          <PlayCircle size={20} />
          <span>Listen to Audio Transcription for Each Post</span>
        </div>
        <span className="text-gray-400">Additional insights available through audio transcription for each blog post.</span>
      </div>
    </div>
  );
};

export default Dashboard;
