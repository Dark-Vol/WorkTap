import Image from 'next/image'
import Reviewer from '../public/icon/kworker2.svg'
import Stars from '../public/stars.png'
import './style.css'

const ProfileReviews = () => {
  return (
    <div className='container'>
      <h1 className='text-[20px] font-bold'>Отзывы</h1>
      <div className="flex gap-2">
        <h3 className='text-[14px] hover:text-green-500'>Положительные (65)</h3>
        <h3 className='text-[14px] hover:text-green-500'>Отрицательные(10)</h3>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div className="w-[100%] p-4 border-[1px] border-gray-300 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image className='w-[30%] sm:w-[130px] sm:h-[130px]' src={Reviewer} alt='review image' />
            <div className="flex flex-col gap-1">
              <h3 className='font-bold sm:text-[22px]'>Никита Евреев</h3>
              <Image src={Stars} alt='stars image' />
            </div>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
            Morbi sed enim facilisis metus pretium leo, mauris.
            In egestas cursus orci dignissim in lectus nulla.
          </p>
        </div>
        <div className="w-[100%] p-4 border-[1px] border-gray-300 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image className='w-[30%] sm:w-[130px] sm:h-[130px]' src={Reviewer} alt='review image' />
            <div className="flex flex-col gap-1">
              <h3 className='font-bold sm:text-[22px]'>Никита Евреев</h3>
              <Image src={Stars} alt='stars image' />
            </div>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
            Morbi sed enim facilisis metus pretium leo, mauris.
            In egestas cursus orci dignissim in lectus nulla.
          </p>
        </div>
        <div className="w-[100%] p-4 border-[1px] border-gray-300 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image className='w-[30%] sm:w-[130px] sm:h-[130px]' src={Reviewer} alt='review image' />
            <div className="flex flex-col gap-1">
              <h3 className='font-bold sm:text-[22px]'>Никита Евреев</h3>
              <Image src={Stars} alt='stars image' />
            </div>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
            Morbi sed enim facilisis metus pretium leo, mauris.
            In egestas cursus orci dignissim in lectus nulla.
          </p>
        </div>
        <div className="w-[100%] p-4 border-[1px] border-gray-300 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image className='w-[30%] sm:w-[130px] sm:h-[130px]' src={Reviewer} alt='review image' />
            <div className="flex flex-col gap-1">
              <h3 className='font-bold sm:text-[22px]'>Никита Евреев</h3>
              <Image src={Stars} alt='stars image' />
            </div>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
            Morbi sed enim facilisis metus pretium leo, mauris.
            In egestas cursus orci dignissim in lectus nulla.
          </p>
        </div>
        <div className="w-[100%] p-4 border-[1px] border-gray-300 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image className='w-[30%] sm:w-[130px] sm:h-[130px]' src={Reviewer} alt='review image' />
            <div className="flex flex-col gap-1">
              <h3 className='font-bold sm:text-[22px]'>Никита Евреев</h3>
              <Image src={Stars} alt='stars image' />
            </div>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
            Morbi sed enim facilisis metus pretium leo, mauris.
            In egestas cursus orci dignissim in lectus nulla.
          </p>
        </div>
        <div className="w-[100%] p-4 border-[1px] border-gray-300 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image className='w-[30%] sm:w-[130px] sm:h-[130px]' src={Reviewer} alt='review image' />
            <div className="flex flex-col gap-1">
              <h3 className='font-bold sm:text-[22px]'>Никита Евреев</h3>
              <Image src={Stars} alt='stars image' />
            </div>
          </div>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
            Morbi sed enim facilisis metus pretium leo, mauris.
            In egestas cursus orci dignissim in lectus nulla.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className='w-[200px] h-[40px] rounded-full border-[1px] border-[#1DBF73] transition-all text-[#1DBF73] hover:bg-[#1DBF73] hover:text-white'>Загрузить еще</button>
      </div>
    </div>
  )
}

export default ProfileReviews