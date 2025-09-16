import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Mail from '@/src/assests/message.png';
import Menu from '@/src/assests/menu.png';
import User from '@/src/assests/user.png';
import email from '@/src/assests/Email-New.png';
import SearchBar from '@/src/components/SearchBar';
import UserCards from '@/src/components/Cards';
import MenunWhite from '@/src/assests/menuWhite.png';
import call from '@/src/assests/Call.svg';
import cards from '@/src/assests/Cards.svg';
import location from '@/src/assests/Location.svg';
import chat from '@/src/assests/Message.svg';

export const Route = createFileRoute('/')({
  component: SearchScreen,
});

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

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

  const userCards = [
    { id: 1, hasUser: true },
    { id: 2, hasUser: true },
    { id: 3, hasUser: true },
    { id: 4, hasUser: true },
    { id: 5, hasUser: true },
    { id: 6, hasUser: false },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F5F8FF]">
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 transform bg-gradient-to-r from-[#002586] to-[#66666699] backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <button className="relative z-30 p-2" onClick={toggleMenu}>
            <img src={MenunWhite} alt="menu" className="h-15 w-15" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="mb-8 ml-10 text-xl font-semibold text-white">
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
          <div className="my-6 flex justify-center">
            <div className="bg-opacity-30 h-px w-48 bg-white"></div>
          </div>
          <div className="space-y-3">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className="bg-opacity-90 hover:bg-opacity-100 flex w-full items-center space-x-3 rounded-full bg-[#C6C6C6] px-4 py-3 text-left transition-all duration-200"
              >
                <img src={chat} alt="" className="h-7 w-7" />
                <span className="text-[#6B6B6B]">Message your friend</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex min-h-screen flex-col">
        <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-[#F5F8FF]/70 backdrop-blur-md">
          <button className="relative z-30 p-2" onClick={toggleMenu}>
            <img src={Menu} alt="menu" className="h-15 w-15" />
          </button>
          <div className="flex-1 text-center">
            <p className="text-xl text-[#0A2260]">
              revolutionary LMS by Kashgari...
            </p>
          </div>
          <button className="p-2">
            <img src={User} alt="user" className="h-13 w-13" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="mx-auto mt-[100px] max-w-md flex-1 px-4 py-8">
          <h1 className="mb-8 text-center text-8xl text-[#0A2260]">
            Dana Tiin
          </h1>

          <div className="mt-[-43px]">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <UserCards userCards={userCards} />
        </div>

        {/* Email Button */}
        <button
          className="fixed right-6 bottom-6 p-4 transition-colors"
          onClick={() => setIsEmailOpen(!isEmailOpen)}
        >
          {isEmailOpen ? (
            <div className="fixed right-10 bottom-10 z-50 h-[70px] w-[320px] rounded-xl bg-[#2E56BF] p-4 text-white shadow-lg">
              <button
                onClick={() => setIsEmailOpen(false)}
                className="absolute top-[-10px] right-[-5px] flex h-7 w-7 items-center justify-center rounded-full bg-[#4774E6]/80 text-sm"
              >
                ✕
              </button>
              <div className="mt-[-5px] flex items-center space-x-3">
                <img src={email} alt="email icon" className="h-10 w-10" />
                <div>
                  <p className="text-start font-semibold">Алена Андреевна</p>
                  <p className="text-sm text-gray-200">
                    (мать Алины Малиновой 10 Б)
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <img src={Mail} alt="mail" className="h-13 w-13" />
          )}
        </button>
      </div>
    </div>
  );
}
