import video from '../assets/jj-aw23-launch_03.gif'

const JewelryIntro = () => {
  return (
    <div className='container max-w-7xl px-4 mx-auto my-14'>
      <h2 className="text-3xl text-center font-semibold">Jewelry Collection</h2>
      <p className='text-center text-md mt-2 mb-7'>Introducing the new collection.</p>
      <img className='w-full h-[544px] object-cover rounded-lg' src={video}/>
    </div>
  )
}

export default JewelryIntro
