import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { FaFeather } from 'react-icons/fa';
import useLoginModal from '@/hooks/useLoginModal';

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div 
        className='
          mt-6
          lg:hidden
          rounded-full
          h-14
          w-14
          p-4
          flex
          items-center
          justify-center
          bg-primary
          hover:bg-opacity-10
          transition
          cursor-pointer
        '
      >
        <FaFeather size={24} color='white'/>
      </div>
      <div
        className='
          mt-6
          hidden
          lg:block
          px-4
          py-2
          rounded-full
          bg-primary
          hover:bg-opacity-90
          cursor-pointer
          transtition
        '
      >
        <p className='hidden lg:block text-center font-semibold text-white text-[20px]'>
          Post
        </p>
      </div>
    </div>
  )
}

export default SidebarTweetButton