import { useState } from 'react';
import Close from '@/src/assests/close.png';
import { Link } from '@tanstack/react-router';
import call from '@/src/assests/Call.svg';
import cards from '@/src/assests/Cards.svg';
import location from '@/src/assests/Location.svg';
import chat from '@/src/assests/Message.svg';
import Search from '@/src/assests/send.png';
const LmsScreenComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    {
      icon: cards,
      text: 'Pay with cards',
      action: () => console.log('Pay with cards'),
    },
    {
      icon: call,
      text: 'Phone call mom',
      action: () => console.log('Phone call mom'),
    },
    {
      icon: location,
      text: 'See the location of the ne...',
      action: () => console.log('Location'),
    },
    {
      icon: chat,
      text: 'Message your friend',
      action: () => console.log('Message friend'),
    },
  ];

  return (
    <div className="relative flex min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 h-full w-80 bg-[#4778F7] shadow-lg">
        <div className="p-6 pt-20">
          <h2 className="mb-8 text-center text-2xl font-semibold text-white">
            The most used
          </h2>
          <div className="mb-8 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="bg-opacity-90 hover:bg-opacity-100 flex w-full items-center space-x-3 rounded-full bg-white px-4 py-3 text-left transition-all duration-200"
              >
                <img src={item.icon} alt="" className="h-7 w-7" />
                <span className="font-medium text-black">{item.text}</span>
              </button>
            ))}
          </div>

          <div className="border-opacity-30 my-7 ml-8 w-[200px] items-center justify-center rounded-full border-3 border-t border-white"></div>
          <div className="space-y-3">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className="bg-opacity-90 hover:bg-opacity-100 flex w-full items-center space-x-3 rounded-full bg-gray-300 px-4 py-3 text-left transition-all duration-200"
              >
                <img src={chat} alt="" className="h-7 w-7" />
                <span className="text-gray-600">Message your friend</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="mt-[100px] ml-80 flex flex-1 flex-col items-center justify-center p-8">
        <Link to="/">
          <div className="absolute top-6 right-6 cursor-pointer">
            <img src={Close} alt="close" width={40} height={40} />
          </div>
        </Link>
        <h1 className="mb-[-5px] text-8xl text-black">LMS это я!</h1>
        <div className="my-7 w-[150px] items-center justify-center rounded-full border-1 border-t border-[#8D8D8D]"></div>
        <p className="mb-20 text-lg text-gray-600">
          напишите че вы от меня хотите
        </p>
        <div className="relative mt-[150px] w-full max-w-4xl">
          <div className="flex items-center rounded-full border border-gray-300 bg-white px-6 py-2 shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="salam..."
              className="flex-1 border-none text-lg outline-none placeholder:text-gray-400"
            />
            <button className="ml-4 flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-blue-600">
              <img src={Search} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsScreenComponent;
