import React from 'react'
import Image from 'next/image'
import './style.css'
import Logo from '../../public/logo.png'
import GoogleLogo from '../../public/google.png'
import Login from '../../public/login.jpg'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:items-center xl:justify-evenly'>
      <div className="container xl:items-center">
        <Image className='w-[50%] min-[400px]:w-[150px] lg:w-[170px]' src={Logo} alt='logo image' />
        <div className="flex flex-col mt-5">
          <div className="flex flex-col">
            <p>Добро пожаловать!</p>
            <h1 className='font-bold text-[25px] xl:text-[30px]'>Войдите в свой аккаунт</h1>
          </div>
          <form className='flex flex-col gap-3 mt-3'>
            <div className='flex flex-col gap-1'>
              <label>Email</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="text" placeholder='E-mail' />
            </div>
            <div className='flex flex-col gap-1'>
              <label>Пароль</label>
              <input className='w-[100%] h-[40px] outline-none border-[1px] shadow-sm p-4 rounded-xl xl:w-[450px]' type="password" placeholder='Пароль' />
            </div>
            <div className="flex items-center justify-between xl:w-[450px]">
              <div className="flex gap-1">
                <input type="checkbox" />
                <h3>Запомнить меня</h3>
              </div>
              <h3 className='text-[#FBA457]'>Забыли пароль?</h3>
            </div>
            <div className="flex flex-col gap-2">
              <button className='h-[40px] bg-green-500 border-[1px] transition-all border-green-500 rounded-3xl text-white font-bold hover:bg-transparent hover:text-green-500 xl:w-[450px]'>Войти</button>
              <button className='flex items-center justify-center gap-2 h-[40px] text-[13px] border-[1px] transition-all bg-[#2D3748] rounded-3xl text-white font-bold hover:bg-transparent hover:text-[#2D3748] xl:w-[450px]'>
                <Image src={GoogleLogo} alt='google logo' /> Или войдите с помощю Google
              </button>
            </div>
          </form>
          <h3 className='flex flex-col items-center justify-center mt-5 lg:items-start lg:w-[450px] lg:flex-row lg:justify-between'>
            У Вас все еще нет аккауна?
            <Link href='/register' className='text-[#FBA457]'>
              Зарегистрируйтесь бесплатно!
            </Link>
          </h3>
        </div>
      </div>
      <div className='hidden sm:flex'>
        <Image className='h-[100vh]' src={Login} alt='login image' />
      </div>
    </div>
  )
}

export default Page