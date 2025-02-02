import SvgFolder from '@/public/svg/folder.svg';
export default function Header() {
  return (
    <header className='flex justify-between align-center bg-cyan-500'>
      <SvgFolder width={40} height={64} className={'inline'} />
      <span className='flex-grow whitespace-nowrap overflow-hidden text-ellipsis m-0 pt-0 tracking-normal text-2xl font-normal text-white h-16 leading-[64px]'>
        TravelNote
      </span>
      <nav>
        <ul className='flex'>
          <li className='pl-4 pr-4 align-middle tracking-normal uppercase font-medium text-base text-white leading-[64px]'>
            <a href='#'>Log In</a>
          </li>
          <li className='pl-4 pr-4 align-middle tracking-normal uppercase font-medium text-base text-white leading-[64px]'>
            <a href='#'>Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
