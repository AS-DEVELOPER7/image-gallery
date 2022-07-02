
import { useStateContext } from '../context/StateContext'
import Photo from './Photo'
const Gallery = () => {
    const{isLoading,images}=useStateContext()
   
  return (
    <div className='w-[95%] mx-auto columns-2 lg:columns-3 mt-[2em] space-y-4 lg:mr-[1.5em] '>
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
  )
}

export default Gallery