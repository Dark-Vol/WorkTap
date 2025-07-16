import Image from 'next/image'
import CreditCard from '../public/icon/credit.svg'
import Money from '../public/icon/moneyy.svg'
import Clock from '../public/icon/clock 1.svg'

const TopFooter = () => {
  return (
    <div className='top_footer'>
      <div className="container">
        <h1 className='text-white font-bold text-[40px] mt-16'>Как WorkTap помогает бизнесу?</h1>
        <div className="flex flex-col gap-5 mt-20">
          <div className="flex items-center gap-3 mt-6 w-[90%] bg-white p-3 rounded-lg md:w-[430px]">
            <Image src={CreditCard} alt='credit card' />
            <p>Оплачивайте с р/с или карты компании</p>
          </div>
          <div className="flex items-center gap-3 w-[90%] bg-white p-3 md:w-[430px] rounded-lg">
            <Image src={Money} alt='credit card' />
            <p>Оплачивайте с р/с или карты компании</p>
          </div>
          <div className="flex items-center gap-3 w-[90%] bg-white p-3 md:w-[430px] rounded-lg">
            <Image src={Clock} alt='credit card' />
            <p>Оплачивайте с р/с или карты компании</p>
          </div>
        </div>
        <h2 className='text-white font-bold text-[25px] mt-4'>WorkTap — быстро, просто и безопасно!</h2>
        <button className='bg-[#5E4EDB] border-[1px] transition-all border-[#5E4EDB] mt-3 w-[221px] h-[49px] text-[23px] text-white rounded-lg hover:bg-transparent'>Начать!</button>
      </div>
    </div>
  )
}

export default TopFooter