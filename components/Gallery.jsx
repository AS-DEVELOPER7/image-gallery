
import { useStateContext } from '../context/StateContext'
import Photo from './Photo'
import Pagination from './Pagination'
import { BeatLoader } from 'react-spinners'
const Gallery = () => {
    const{isLoading,images}=useStateContext()
   
  return (
    <div className="">

    <div className='w-[95%] mx-auto columns-2 lg:columns-3 mt-[2em] space-y-4 lg:mr-[1.5em] z-0'>
      {isLoading ? (
          <div className="flex justify-center items-center">
            <BeatLoader color="#242424" size={150} />
          </div>
        ) :  (<>
       {images?.map((photo)=>(
         <Photo key={photo.id} download={photo.links.download} img={photo.urls.regular}/>
         ))}
        </>)}
    </div>
        <div className="w-[90%] mx-auto">
          <Pagination/>
        </div>
         </div>
  )
}

export default Gallery
