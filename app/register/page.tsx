import React from 'react'
import Image from 'next/image'
import '../login/style.css'
import Logo from '../../public/logo.png'
import Register from '../../public/sign-up.jpg'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:items-center xl:justify-evenly'>
      <div className="container xl:items-center">
        <Image className='w-[50%] min-[400px]:w-[150px] lg:w-[170px]' src={Logo} alt='logo image' />
        <div className="flex flex-col mt-5">
          <div className="flex flex-col">
            <p>Давайте создадим Вам аккаунт</p>
            <h1 className='font-bold text-[25px] xl:text-[30px]'>Заполните все поля</h1>
          </div>
          <form className='flex flex-col gap-3 mt-3'>
            <div className='flex flex-col gap-1'>
              <label>Ваше имя</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="text" placeholder='Имя' />
            </div>
            <div className='flex flex-col gap-1'>
              <label>Ваше фамилия</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="password" placeholder='Фамилия' />
            </div>
            <div className='flex flex-col gap-1'>
              <label>E-mail</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="password" placeholder='E-mail' />
            </div>
            <div className='flex flex-col gap-1'>
              <label>Телефон номер</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="password" placeholder='Телефон номер' />
            </div>
            <div className='flex flex-col gap-1'>
              <label>Пароль</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="password" placeholder='Пароль' />
            </div>
            <div className='flex flex-col gap-1'>
              <label>Повтарите пароль</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="password" placeholder='Повтарите пароль' />
            </div>
            <div className="flex items-center gap-2 xl:w-[450px]">
              <div className="flex gap-1">
                <input type="checkbox" />
                <h3>Я исполнитель</h3>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h3>Я заказчик</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className='h-[40px] bg-green-500 border-[1px] transition-all border-green-500 rounded-3xl text-white font-bold hover:bg-transparent hover:text-green-500 xl:w-[450px]'>Зарегестрироваться</button>
            </div>
          </form>
          <h3 className='flex flex-col items-center justify-center mt-5 lg:items-start lg:w-[450px] lg:flex-row lg:justify-between'>
            У Вас есть аккаунт?
            <Link href='/login' className='text-[#FBA457]'>
              Войдите
            </Link>
          </h3>
        </div>
      </div>
      <div className='hidden sm:flex'>
        <Image className='h-[100%]' src={Register} alt='login image' />
      </div>
    </div>
  )
}

export default Page