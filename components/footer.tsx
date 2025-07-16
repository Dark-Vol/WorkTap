import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import Facebook from '../public/icon/facebook.svg';
import X from '../public/icon/x.svg';
import Instagram from '../public/icon/instagram.svg'
import Linkedin from '../public/icon/linkedin.svg'


const Footer = () => {
  const images = [
    { image: Facebook, alt: 'facebook' },
    { image: X, alt: 'twitter' },
    { image: Instagram, alt: 'instagram' },
    { image: Linkedin, alt: 'linkedin' }

  ]
  return (
    <div className='container grid grid-cols-1 gap-4 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <div className="flex flex-col gap-2">
        <h1 className='font-bold text-[25px]'>Топ категории</h1>
        <Link href='/'>Тексты и переводы</Link>
        <Link href='/'>Разработка</Link>
        <Link href='/'>Аудио, видео монтаж</Link>
        <Link href='/'>Соцсети и реклама</Link>
        <Link href='/'>Бизнес и жизнь</Link>
        <Link href='/'>SEO и оптимизация</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className='font-bold text-[25px]'>О Проекте</h1>
        <Link href='/'>О Нас</Link>
        <Link href='/'>Как Это Работает</Link>
        <Link href='/'>Политика Приватности</Link>
        <Link href='/'>Правила Пользования </Link>
        <Link href='/'>Пресса о нас</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className='font-bold text-[25px]'>Поддержка</h1>
        <Link href='/'>Контакты</Link>
        <Link href='/'>Политика Безопасности</Link>
        <Link href='/'>FAQ</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className='font-bold text-[25px]'>Follow</h1>
        <div className="flex gap-4">
          {
            images.map(item => {
              return <Image className='w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]' priority key={item.image} src={item.image} alt={item.alt} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer