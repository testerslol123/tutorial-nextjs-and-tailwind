import Head from 'next/head'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline';

import Header from './components/Header';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];


export default function Home() {
  return (
    <div>
      <Head>
        <title>Percobaan kedua: Buat Simple Navbar</title>
      </Head>
      {/*Header*/}
      <Header />











    </div>
  )
}
