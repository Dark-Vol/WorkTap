import Image from 'next/image'
import HeroImage from '../public/icon/hero.svg'

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
    <div className='container flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-[30px] md:text-[45px]'>Покупайте фриланс-услуги в <span className='text-green-500'>два клика</span></h1>
        <p>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
        <div className="flex items-center justify-between w-[90%] mt-5 h-[40px] rounded-xl bg-[#F2F0FE]">
          <input type="text" placeholder='Что нужно сделать?' className='outline-none bg-transparent p-4' />
          <button className='bg-[#FBA457] p-2 rounded-xl text-white w-[100px]'>Найти</button>
        </div>
        <h3 className='mt-4'>Выберите рубрику, чтобы начать</h3>
        <div className="mt-2 flex flex-wrap gap-5 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
          {
            btn_titles.map(item => {
              return <button className='border-[1px] border-[#F2F0FE] w-[180px] h-[40px] rounded-lg' key={item.title}  >{item.title}</button>
            })
          }
          <button className='border-[1px] border-[#FBA457] w-[180px] h-[40px] rounded-lg text-[#FBA457]'>Все категории</button>
        </div>

      </div>
      <div className='mt-5'>
        <Image priority src={HeroImage} alt='Hero Image' />
      </div>
    </div>
  )
}

export default Hero