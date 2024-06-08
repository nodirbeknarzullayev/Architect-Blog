import { Typography } from '@material-tailwind/react'
import React from 'react'
import { TestimonialItems } from './testimonialItem'

const Testimonials = () => {
  return (
    <div className='text-center h-screen w-full flex flex-col items-center justify-center gap-y-20 py-40'>
      <div>
        <Typography variant='h5'>TESTIMONIAL</Typography>
        <Typography variant='h2'>Our Successful Students</Typography>
      </div>
      <TestimonialItems/>
    </div>
  )
}

export default Testimonials