import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import Star from '../public/star.png'
import Notification from '../public/notification.png'
import Chat from '../public/chat.png'
import AccountImage from '../public/account.png'
import './style.css'

const Header = () => {
  const header_links = [
    { title: 'Биржа', link: '/stock' },
    { title: 'Ворки', link: '/' },
    { title: 'Конкурсы', link: '/' },
    { title: 'Создать ворк', link: '/profile' },
    { title: 'Создать заказ', link: '/' },

  ]
  return (
    <div className='w-[80%] flex items-center justify-between gap-5 container pr-5'>
      <Link href='/'><Image
        className='w-[165px] h-[30px]'
        src={logo}
        alt="Company Logo"
      /></Link>
      <ul className='gap-5 items-center hidden xl:flex'>
        {
          header_links.map(item => {
            return <Link className='transition hover:text-green-500' href={item.link} key={item.title}  >{item.title}</Link>
          })
        }
      </ul>
      <div className="gap-4 flex items-center">
        <Image src={Star} alt='star image' />
        <Image src={Notification} alt='notification image' />
        <Image src={Chat} alt='chat image' />
        <h3 className='text-[18px] font-bold hidden md:flex'>Ернар Ибрагимов</h3>
        <Image className='w-[25%] sm:w-[50px] sm:h-[50px]' src={AccountImage} alt='account image' />
      </div>
    </div>
  )
}

export default Header
