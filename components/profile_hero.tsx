import './style.css'
import Image from 'next/image'
import ProfileHero from '../public/profile-hero.png'

const Hero = () => {
  return (
    <div className='container grid grid-cols-1 md:grid md:grid-cols-2 md:gap-5'>
      <div className="flex flex-col">
        <h1 className='text-[#FBA457] font-bold text-[23px] md:text-[30px] lg:text-[36px]'>Дизайнер</h1>
        <h2 className='text-[26px] font-bold md:text-[35px] lg:text-[40px]'><span className='text-green-500'>Ернар</span> Ибрагимов</h2>
        <p className='text-[15px] lg:text-[18px]'>Работаю дизайнером с 1999 года.
          Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.</p>
        <div className="grid grid-cols-2 gap-2 mt-4 lg:grid-cols-3 lg:gap-4">
          <button className='p-1 border-[1px] border-[#F2F0FE] rounded-md 2xl:w-[200px]'>Adobe photoshop</button>
          <button className='p-1 border-[1px] border-[#F2F0FE] rounded-md 2xl:w-[200px]'>Adobe illustrator</button>
          <button className='p-1 border-[1px] border-[#F2F0FE] rounded-md 2xl:w-[200px]'>Figma</button>
          <button className='p-1 border-[1px] border-[#F2F0FE] rounded-md 2xl:w-[200px]'>Corel draw</button>
          <button className='p-1 border-[1px] border-[#F2F0FE] rounded-md 2xl:w-[200px]'>Adobe After Effects</button>
          <button className='p-1 border-[1px] border-[#F2F0FE] rounded-md 2xl:w-[200px]'>HTML/CSS</button>
        </div>
        <select className='p-3 outline-none border-[1px] border-[#F2F0FE] mt-3 rounded-xl lg:w-[500px] lg:mt-5 bg-[#F2F0FE]'>
          <option >Показать подробную информацию</option>
        </select>
      </div>
      <div className='mt-3 flex items-center justify-center'>
        <Image src={ProfileHero} alt='profile hero' />
      </div>
    </div>
  )
}

export default Hero