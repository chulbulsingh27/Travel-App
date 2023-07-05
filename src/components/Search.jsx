import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR FOUR PEOPLE</h2>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, ad, hic dolorem animi sequi beatae saepe esse unde ratione qui inventore itaque veniam maiores velit facilis soluta reprehenderit modi corrupti repellendus sint ipsam cumque, dicta assumenda aliquid! Voluptas, aut. Aperiam ipsa, reiciendis quo unde ab dignissimos omnis aliquid tempore provident quasi cupiditate distinctio id nesciunt delectus, quod natus quisquam numquam aliquam, nisi obcaecati? Harum nobis dolores cumque et nam quisquam quis neque id culpa cupiditate quidem tempora quasi perspiciatis vero quaerat laboriosam ipsum enim dicta est soluta voluptate fuga, earum hic ad! Culpa praesentium tempora facere ipsam qui, vel corporis veritatis in iste nostrum ea architecto quaerat tempore fugit illum consequatur dolores molestiae quod nesciunt obcaecati iure perspiciatis ut. Maiores doloremque dolorem dicta? Maiores, ab sequi tempora sint aut eos vitae, magnam ipsam non illum dignissimos commodi dolorem accusamus modi beatae maxime, amet explicabo. Expedita vero velit quia minima cumque!
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 15+ YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 15+ YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-[#460a4e] text-gray-200 py-2 rounded-md'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option> Aruba</option>
                      <option>Key West</option>
                      <option>Maldives</option>
                      <option>Barbados</option>
                      <option> Haiti</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  )
}

export default Search