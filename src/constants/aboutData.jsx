import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";

import people1 from '../assets/people1.png'
import people2 from '../assets/people2.png'
import people3 from '../assets/people3.png'

export const aboutInfo = [
  {
    id: 1,
    image: <HiOutlineBuildingStorefront size={30}/> ,
    number: '10.5K',
    desc: 'Sellers active in our site'
  },
  {
    id: 2,
    image: <RiMoneyDollarCircleLine size={30}/>,
    number: '33K',
    desc: 'Monthly product sale'
  },
  {
    id: 3,
    image: <FiShoppingBag size={30}/>,
    number: '45.5K',
    desc: 'Customer active in our site'
  },
  {
    id: 4,
    image: <TbMoneybag size={30}/>,
    number: '25K',
    desc: 'Annual growth sale in our site'
  },
]

export const people = [
  {
    id: 1,
    image: people1,
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
  },
  {
    id: 2,
    image: people2,
    name: 'Emma Watson',
    role: 'Managing Director',
  },
  {
    id: 3,
    image: people3,
    name: 'Will Smith',
    role: 'Product Designer',
  },
  {
    id: 4,
    image: people1,
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
  },
  {
    id: 5,
    image: people2,
    name: 'Emma Watson',
    role: 'Managing Director',
  },
  {
    id: 6,
    image: people3,
    name: 'Will Smith',
    role: 'Product Designer',
  },
]