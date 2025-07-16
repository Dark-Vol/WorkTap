import React from 'react'
import Stars from '../public/stars.png'
import Kworker from '../public/icon/kworker1.svg'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      image_of_kworker: Kworker,
      title: 'Нужно сделать Дизайн сайта по тематике авто',
      name: 'Екатерина Иванова',
      projects: 'Размещено проектов на бирже: 25',
      stars: Stars,
      budjet: 'Бюджет: 50 000 UAH',
      online: '4 часа 28 минут назад',
      offers: 'Предложений: 50'
    }
  ]
  return (
    <div className='container'>
      <div className="flex flex-col items-center justify-between gap-5 md:flex md:flex-row md:justify-between">
        <h3 className='font-bold text-[20px]'>65 проектов по дизайну</h3>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
          <button className='border-[1px] p-3 rounded-3xl'>Минимальная цена</button>
          <button className='border-[1px] p-3 rounded-3xl'>Максимальная цена</button>
          <button className='border-[1px] p-3 rounded-3xl'>По возрастанию цены</button>
        </div>
      </div>
      {
        projects.map((item, index) => {
          return <div key={index} className="flex flex-col gap-5 mt-[100px]">
            <div className="w-[95%] rounded-md h-[100%] flex flex-col gap-5  p-4 shadow-lg border-[1px] sm:flex-row sm:justify-between sm:p-10">
              <div className="flex flex-col gap-2">
                <h3 className='text-[17px] font-bold sm:text-[19px] md:text-[25px]' key={item.title}>{item.title}</h3>
                <div className="flex gap-3">
                  <Image className='w-[30%] sm:w-[100px] sm:h-[100px]' key={item.image_of_kworker} src={item.image_of_kworker} alt='kworker img' />
                  <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.name}>{item.name}</h3>
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.projects}>{item.projects}</h3>
                    <Image src={item.stars} alt='stars' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center sm:justify-between">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-[15px] text-green-500 md:text-[20px] xl:text-[25px]' key={item.budjet}>{item.budjet}</h3>
                  <h3 className='font-bold text-gray-400 text-[15px]' key={item.online}>{item.online}</h3>
                </div>
                <div>
                  <p className='text-gray-500 text-[15px] xl:text-[20px]' key={item.offers}>{item.offers}</p>
                </div>
              </div>

            </div>
            <div className="w-[95%] rounded-md h-[100%] flex flex-col gap-5  p-4 shadow-lg border-[1px] sm:flex-row sm:justify-between sm:p-10">
              <div className="flex flex-col gap-2">
                <h3 className='text-[17px] font-bold sm:text-[19px] md:text-[25px]' key={item.title}>{item.title}</h3>
                <div className="flex gap-3">
                  <Image className='w-[30%] sm:w-[100px] sm:h-[100px]' key={item.image_of_kworker} src={item.image_of_kworker} alt='kworker img' />
                  <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.name}>{item.name}</h3>
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.projects}>{item.projects}</h3>
                    <Image src={item.stars} alt='stars' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center sm:justify-between">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-[15px] text-green-500 md:text-[20px] xl:text-[25px]' key={item.budjet}>{item.budjet}</h3>
                  <h3 className='font-bold text-gray-400 text-[15px]' key={item.online}>{item.online}</h3>
                </div>
                <div>
                  <p className='text-gray-500 text-[15px] xl:text-[20px]' key={item.offers}>{item.offers}</p>
                </div>
              </div>

            </div>
            <div className="w-[95%] rounded-md h-[100%] flex flex-col gap-5  p-4 shadow-lg border-[1px] sm:flex-row sm:justify-between sm:p-10">
              <div className="flex flex-col gap-2">
                <h3 className='text-[17px] font-bold sm:text-[19px] md:text-[25px]' key={item.title}>{item.title}</h3>
                <div className="flex gap-3">
                  <Image className='w-[30%] sm:w-[100px] sm:h-[100px]' key={item.image_of_kworker} src={item.image_of_kworker} alt='kworker img' />
                  <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.name}>{item.name}</h3>
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.projects}>{item.projects}</h3>
                    <Image src={item.stars} alt='stars' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center sm:justify-between">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-[15px] text-green-500 md:text-[20px] xl:text-[25px]' key={item.budjet}>{item.budjet}</h3>
                  <h3 className='font-bold text-gray-400 text-[15px]' key={item.online}>{item.online}</h3>
                </div>
                <div>
                  <p className='text-gray-500 text-[15px] xl:text-[20px]' key={item.offers}>{item.offers}</p>
                </div>
              </div>

            </div>
            <div className="w-[95%] rounded-md h-[100%] flex flex-col gap-5  p-4 shadow-lg border-[1px] sm:flex-row sm:justify-between sm:p-10">
              <div className="flex flex-col gap-2">
                <h3 className='text-[17px] font-bold sm:text-[19px] md:text-[25px]' key={item.title}>{item.title}</h3>
                <div className="flex gap-3">
                  <Image className='w-[30%] sm:w-[100px] sm:h-[100px]' key={item.image_of_kworker} src={item.image_of_kworker} alt='kworker img' />
                  <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.name}>{item.name}</h3>
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.projects}>{item.projects}</h3>
                    <Image src={item.stars} alt='stars' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center sm:justify-between">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-[15px] text-green-500 md:text-[20px] xl:text-[25px]' key={item.budjet}>{item.budjet}</h3>
                  <h3 className='font-bold text-gray-400 text-[15px]' key={item.online}>{item.online}</h3>
                </div>
                <div>
                  <p className='text-gray-500 text-[15px] xl:text-[20px]' key={item.offers}>{item.offers}</p>
                </div>
              </div>

            </div>
            <div className="w-[95%] rounded-md h-[100%] flex flex-col gap-5  p-4 shadow-lg border-[1px] sm:flex-row sm:justify-between sm:p-10">
              <div className="flex flex-col gap-2">
                <h3 className='text-[17px] font-bold sm:text-[19px] md:text-[25px]' key={item.title}>{item.title}</h3>
                <div className="flex gap-3">
                  <Image className='w-[30%] sm:w-[100px] sm:h-[100px]' key={item.image_of_kworker} src={item.image_of_kworker} alt='kworker img' />
                  <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.name}>{item.name}</h3>
                    <h3 className='font-bold text-[15px] lg:text-[18px]' key={item.projects}>{item.projects}</h3>
                    <Image src={item.stars} alt='stars' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center sm:justify-between">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold text-[15px] text-green-500 md:text-[20px] xl:text-[25px]' key={item.budjet}>{item.budjet}</h3>
                  <h3 className='font-bold text-gray-400 text-[15px]' key={item.online}>{item.online}</h3>
                </div>
                <div>
                  <p className='text-gray-500 text-[15px] xl:text-[20px]' key={item.offers}>{item.offers}</p>
                </div>
              </div>

            </div>
          </div>
        })

      }
      <div className="flex items-center justify-center mt-[50px]">
        <button className='border-[1px] border-[#1DBF73] text-[#1DBF73] w-[180px] h-[40px] rounded-3xl transition-all hover:bg-[#1DBF73] hover:text-white'>Загрузить еще</button>
      </div>
    </div>
  )
}

export default Projects