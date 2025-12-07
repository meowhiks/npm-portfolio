'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-8">
        <div className="relative ">
          <h1 className="text-5xl font-normal text-white">
            <span className="relative inline-block">
              Приветствую, я
            </span>
            {' '}
            <span className="relative inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              meowhiks
            </span>
          </h1>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full h-full rounded-full bg-[#02030a] flex items-center justify-center p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/icon.svg"
                  alt="meowhiks"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

