import React from 'react'
import BoraBora from '../images/borabora.jpg';
import BoraBora2 from '../images/borabora2.jpg';
import Maldives from '../images/maldives.jpg';
import Maldives2 from '../images/maldives2.jpg';
import Maldives3 from '../images/maldives3.jpg';
import KeyWest from '../images/keywest.jpg';
import SelectCard from './SelectCard';
const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    <SelectCard bg={BoraBora} text=' Haiti' />
    <SelectCard bg={BoraBora2} text='Maldives' />
    <SelectCard bg={Maldives} text='Antigua' />
    <SelectCard bg={Maldives2} text='Grenada' />
    <SelectCard bg={Maldives3} text='Jamaica' />
    <SelectCard bg={KeyWest} text='Key West' />        
    </div>
  )
}
export default Selects