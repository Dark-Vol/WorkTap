import React from 'react'
import FirstKworker from '../public/icon/kworker1.svg'
import SecondKworker from '../public/icon/kworker2.svg'
import ThirdKworker from '../public/icon/kworker3.svg'
import FourthKworker from '../public/icon/kworker4.svg'
import FeefthKworker from '../public/icon/kworker5.svg'
import Stars from '../public/stars.png'

import Image from 'next/image'

const Freelancer = () => {
  return (
    <div className='container'>
      <h1 className='text-[25px] font-bold'>Топ фрилансеров</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3">
        <div className="mt-[50px] w-[90%] border-[1px] p-5 flex flex-col gap-5 justify-between">
          <div className="flex gap-3">
            <Image className='w-[90px] h-[90px]' src={FirstKworker} alt='Kworker avatarka' />
            <div className="flex flex-col">
              <h3 className='font-bold text-[18px]'>Марина Королёва</h3>
              <h4 className='font-bold text-[20px] text-orange-500'>Разработчик PHP</h4>
              <p>Выполено проектов: 65</p>
              <Image src={Stars} alt='stars of kworker' />
            </div>
          </div>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Написать</button>
        </div>
        <div className="mt-[50px] w-[90%] border-[1px] p-5 flex flex-col gap-5 justify-between">
          <div className="flex gap-3">
            <Image className='w-[90px] h-[90px]' src={SecondKworker} alt='Kworker avatarka' />
            <div className="flex flex-col">
              <h3 className='font-bold text-[18px]'>Семён Сергеев</h3>
              <h4 className='font-bold text-[20px] text-orange-500'>Копирайтер</h4>
              <p>Выполено проектов: 104</p>
              <Image src={Stars} alt='stars of kworker' />
            </div>
          </div>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Написать</button>
        </div>
        <div className="mt-[50px] w-[90%] border-[1px] p-5 flex flex-col gap-5 justify-between">
          <div className="flex gap-3">
            <Image className='w-[90px] h-[90px]' src={ThirdKworker} alt='Kworker avatarka' />
            <div className="flex flex-col">
              <h3 className='font-bold text-[18px]'>Ангелина Сорокина</h3>
              <h4 className='font-bold text-[20px] text-orange-500'>Дизайнер сайтов</h4>
              <p>Выполено проектов: 25</p>
              <Image src={Stars} alt='stars of kworker' />
            </div>
          </div>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Написать</button>
        </div>
        <div className="mt-[50px] w-[90%] border-[1px] p-5 flex flex-col gap-5 justify-between">
          <div className="flex gap-3">
            <Image className='w-[90px] h-[90px]' src={FourthKworker} alt='Kworker avatarka' />
            <div className="flex flex-col">
              <h3 className='font-bold text-[18px]'>Никита Зайцев</h3>
              <h4 className='font-bold text-[20px] text-orange-500'>Маркетолог</h4>
              <p>Выполено проектов: 65</p>
              <Image src={Stars} alt='stars of kworker' />
            </div>
          </div>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Написать</button>
        </div>
        <div className="mt-[50px] w-[90%] border-[1px] p-5 flex flex-col gap-5 justify-between">
          <div className="flex gap-3">
            <Image className='w-[90px] h-[90px]' src={FeefthKworker} alt='Kworker avatarka' />
            <div className="flex flex-col">
              <h3 className='font-bold text-[18px]'>Наталья Захарова</h3>
              <h4 className='font-bold text-[20px] text-orange-500'>Motion дизайнер</h4>
              <p>Выполено проектов: 71</p>
              <Image src={Stars} alt='stars of kworker' />
            </div>
          </div>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Написать</button>
        </div>
        <div className="w-[90%] mt-3 border-[1px] bg-[#F2F0FE] rounded-md p-5 flex items-center justify-center gap-5">
          <h3 className='text-green-500 text-[20px] text-center font-bold'>Посмотреть всех ТОП фрилансеров</h3>
        </div>

      </div>
    </div>
  )
}

export default Freelancer