import DefaultLayoutHoc from '../layout/DefaultLayout'
import PlayFilter from '../components/playFilter/playFilter'
import Poster from '../components/poster/Poster.jsx'

const PlaysPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
          <h2 className='text-2xl font-bold mb-4'>Plays in Hospet</h2>
          <div className='flex flex-wrap'>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay={true} src="" title="So Rude of Me By Sweets" subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay={true} src="" title="So Rude of Me By Sweets" subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay={true} src="" title="So Rude of Me By Sweets" subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay={true} src="" title="So Rude of Me By Sweets" subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay={true} src="" title="So Rude of Me By Sweets" subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins"/>
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <Poster isPlay={true} src="" title="So Rude of Me By Sweets" subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins"/>
            </div>
          </div>
        </div>

        <div className='lg:w-1/4 bg-white rounded'>
          <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFilter title="Date" tags={["Today","Tommorrow","This Weekend"]}/>
          </div>
          <div>
            <PlayFilter title="Language" tags={["English","Kannada","Hindi"]}/>
          </div>
        </div>
      </div> 
    </>
  )
}

export default DefaultLayoutHoc(PlaysPage)
