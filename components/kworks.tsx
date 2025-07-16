import React from 'react'
import Image from 'next/image'
import Kworker from '../public/kworker.png'

const Kworks = () => {
  return (
    <div className='container'>
      <h1 className='text-[25px] font-bold'>Актуальные ворки</h1>
      <div className="flex flex-col gap-4 mt-9 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3">
        <div className="w-[90%] border-[1px] border-[#F2F0FE] p-5 flex flex-col gap-5">
          <div className="flex gap-3"><Image className='w-[60px] h-[60px]' src={Kworker} alt='Kworker avatarka' />
            <h3 className='font-bold text-[18px]'>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sed leo at hendrerit dictum diam, enim.
            Dolor in imperdiet ultrices mauris.
            Est vitae vulputate est nec cras.
            Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...
          </p>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Посмотреть</button>
        </div>
        <div className="w-[90%] border-[1px] border-[#F2F0FE] p-5 flex flex-col gap-5">
          <div className="flex gap-3"><Image className='w-[60px] h-[60px]' src={Kworker} alt='Kworker avatarka' />
            <h3 className='font-bold text-[18px]'>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sed leo at hendrerit dictum diam, enim.
            Dolor in imperdiet ultrices mauris.
            Est vitae vulputate est nec cras.
            Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...
          </p>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Посмотреть</button>
        </div>
        <div className="w-[90%] border-[1px] border-[#F2F0FE] p-5 flex flex-col gap-5">
          <div className="flex gap-3"><Image className='w-[60px] h-[60px]' src={Kworker} alt='Kworker avatarka' />
            <h3 className='font-bold text-[18px]'>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sed leo at hendrerit dictum diam, enim.
            Dolor in imperdiet ultrices mauris.
            Est vitae vulputate est nec cras.
            Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...
          </p>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Посмотреть</button>
        </div>
        <div className="w-[90%] border-[1px] border-[#F2F0FE] p-5 flex flex-col gap-5">
          <div className="flex gap-3"><Image className='w-[60px] h-[60px]' src={Kworker} alt='Kworker avatarka' />
            <h3 className='font-bold text-[18px]'>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sed leo at hendrerit dictum diam, enim.
            Dolor in imperdiet ultrices mauris.
            Est vitae vulputate est nec cras.
            Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...
          </p>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Посмотреть</button>
        </div>
        <div className="w-[90%] border-[1px] border-[#F2F0FE] p-5 flex flex-col gap-5">
          <div className="flex gap-3"><Image className='w-[60px] h-[60px]' src={Kworker} alt='Kworker avatarka' />
            <h3 className='font-bold text-[18px]'>Сделать дизайн интернет-магазина</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam sed leo at hendrerit dictum diam, enim.
            Dolor in imperdiet ultrices mauris.
            Est vitae vulputate est nec cras.
            Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...
          </p>
          <button className='w-full h-[40px] border-[1px] border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white'>Посмотреть</button>
        </div>
        <div className="w-[90%] border-[1px] bg-[#F2F0FE] rounded-md p-5 flex items-center justify-center gap-5">
          <h3 className='text-green-500 text-[25px] font-bold'>Смотреть все ворки</h3>
        </div>
      </div>
    </div>
  )
}

export default Kworks