import {serviceData} from '../constants/services'

const Services = () => {
  return (
    <>
      <div className='flex gap-5 pb-5'>
        {serviceData.map(servic => (
          <div key={servic.id} className='flex flex-col bg-[#efb326] w-24 rounded-xl p-2'>
            <span className='pb-1'>{servic.icon}</span>
            <p className='font-semibold'>{servic.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services
