import Link from 'next/link'
import React from 'react'
import {DownloadIcon, ShareIcon}from '@heroicons/react/solid'
import { WhatsappShareButton } from 'react-share'
const Photo = ({download,img}) => {
  return (
    <div className='relative rounded-xl shadow-md overflow-hidden'>
      <img src={img} className=''/>
      <div className='absolute top-2 right-2 flex space-x-6 lg:space-x-3'>

<WhatsappShareButton url={download} className='cursor-pointer'>
  <ShareIcon className='text-slate-900 bg-slate-200 bg-opacity-70  lg:h-[2.5em] p-2 rounded-lg'/>
</WhatsappShareButton>
      <Link className=''  href={download}>
        <DownloadIcon className=' text-slate-900 bg-slate-200 bg-opacity-70 h-[2em] lg:h-[2.5em] p-2 rounded-lg cursor-pointer'/>
      </Link>
      </div>
      </div>
  )
}

export default Photo 