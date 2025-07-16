'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import './style.css'
import MenuIcon from '../public/menu.webp'
import CloseIcon from '../public/icon/x.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const header_links = [
    { title: 'Биржа', link: '/stock' },
    { title: 'Ворки', link: '/' },
    { title: 'Конкурсы', link: '/' },
    { title: 'Создать ворк', link: '/profile' },
    { title: 'Создать заказ', link: '/' },

  ]

  // Закрытие по Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);
  return (
    <div className='w-[80%] flex items-center justify-between gap-5 container pr-5 relative'>
      <Link href='/'><Image
        className='w-[165px] h-[30px]'
        src={logo}
        alt="Company Logo"
      /></Link>
      <ul className='gap-5 items-center hidden xl:flex'>
        {
          header_links.map(item => {
            return <Link className='transition hover:text-green-500' href={item.link} key={item.title}  >{item.title}</Link>
          })
        }
      </ul>
      <div className="gap-2 hidden xl:flex">
        <Link href='/register' className='flex items-center justify-center bg-[#F2F0FE] w-[171px] h-[40px] rounded-xl text-green-500'>Регистрация</Link>
        <Link href='/login' className='flex items-center justify-center bg-[#1DBF73] w-[113px] h-[40px] rounded-xl text-white border-[1px] border-green-500 hover:bg-transparent hover:text-green-500'>Войти</Link>
      </div>
      {/* Burger menu icon for <1280px */}
      <button className="xl:hidden flex items-center" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
        <Image src={MenuIcon} alt="menu" width={32} height={32} />
      </button>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end" onClick={() => setMenuOpen(false)}>
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in" onClick={e => e.stopPropagation()}>
            <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Закрыть меню">
              <Image src={CloseIcon} alt="close" width={28} height={28} />
            </button>
            <nav className="flex flex-col gap-4">
              {header_links.map(item => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="text-lg font-medium transition hover:text-green-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <Link href='/register' className='flex items-center justify-center bg-[#F2F0FE] h-[40px] rounded-xl text-green-500' onClick={() => setMenuOpen(false)}>Регистрация</Link>
              <Link
                href='/login'
                className='flex items-center justify-center bg-[#1DBF73] h-[40px] rounded-xl text-white border-[1px] border-green-500 hover:bg-transparent hover:text-green-500'
                onClick={() => setMenuOpen(false)}>
                Войти
              </Link>
            </div>
            <button className="mt-8 w-full h-[45px] rounded-xl bg-gray-200 text-black font-semibold text-lg hover:bg-gray-300 transition" onClick={() => setMenuOpen(false)}>
              Закрыть меню
            </button>
          </div>
        </div>
      )}
      {/* Старый мобильный блок с кнопками */}
    </div>
  )
}

export default Header
