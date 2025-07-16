import Ellipse from '../public/ellipse.png'
import SecondEllipse from '../public/ellipse2.png'
import Image from 'next/image'
import Down from '../public/todown.png'

const Hero = () => {
  const btn_titles = [
    { title: 'Тексты и переводы' },
    { title: 'Разработка' },
    { title: 'Дизайн' },
    { title: 'Аудио, видео монтаж ' },
    { title: 'SEO и оптимизация' },
    { title: 'Бизнес и жизнь' },
    { title: 'Соцсети и реклама' },
  ]
  return (
    <div className='container lg:flex lg:items-center lg:justify-between lg:gap-3'>
      <div className="hidden lg:flex">
        <Image src={Ellipse} alt='ellipse image' />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className='font-bold text-[20px] md:text-[30px] md:text-center lg:text-[35px] xl:text-[40px]'>
          Ищите и находите подходящую работу среди
          <span className='text-green-500'>
            10,000+
          </span>
          проектов и покажите на что Вы способны
        </h1>
        <div className="flex justify-between w-[90%] mt-5 h-[40px] rounded-xl bg-[#F2F0FE] md:w-[500px]">
          <input type="text" placeholder='Какую работу ищете?' className='outline-none bg-transparent p-4' />
          <button className='bg-[#FBA457] p-2 rounded-xl text-white w-[100px]'>Найти</button>
        </div>
        <div className="mt-2 flex flex-wrap gap-5 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
          {
            btn_titles.map(item => {
              return <button className='border-[1px] border-[#F2F0FE] w-[150px] h-[45px] rounded-lg' key={item.title}  >{item.title}</button>
            })
          }
          <button className='border-[1px] border-[#FBA457] w-[180px] h-[40px] rounded-lg text-[#FBA457]'>Все категории</button>
        </div>
        <div className="flex flex-col items-center  gap-2 mt-4">
          <h3 className='text-[18px] font-semibold md:text-[20px]'>Ниже все заказы по <span className='text-green-500'>дизайну</span></h3>
          <Image src={Down} alt='to down image' />
        </div>
      </div>
      <div className="hidden lg:flex">
        <Image src={SecondEllipse} alt='ellipse image' />
      </div>
    </div>
  )
}

export default Hero