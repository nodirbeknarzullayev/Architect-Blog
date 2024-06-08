import { Typography } from '@material-tailwind/react'
import ServiceCard from '../components/serviceCard'
import { VscFeedback, VscFolderActive } from "react-icons/vsc";
import { TbCup } from "react-icons/tb";

const Services = () => {
  return (
    <div id='service' className='flex flex-col items-center justify-center gap-x-16 h-[170vh] py-40 w-full bg-gray-50'>
      <Typography variant='h5' className='w-1/2 uppercase text-center mb-4 font-semibold text-teal-600'>Services</Typography>
      <Typography variant='h2' className='w-[35%] text-center text-black'>This is My Expertise, The Services I'll Provide My Clients</Typography>
      <div className='flex items-center justify-center gap-x-8 mt-8'>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
      <div className='h-auto py-20 w-full text-center'>
        <Typography variant='h6' color='gray'>
          Have any works you want to done by me? <a href='#' className='text-teal-700'>Contact Me</a> 
        </Typography>
        <Typography className='text-md mt-4' color='gray'>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Typography>

        <div className='banner-img h-[36vh] w-full mt-20'>
          <div className='banner-color h-full w-full flex items-center justify-evenly'>
            <div className='flex items-center justify-center gap-x-4 text-white'>
                <VscFeedback className='text-[80px]'/>
              <div className="text-start">
                <Typography variant='h2'>3,000</Typography>
                <Typography variant="h6">HAPPY CUSTOMER</Typography>
              </div>
            </div>
            <div className='flex items-center justify-center gap-x-4 text-white'>
                <VscFolderActive className='text-[80px]'/>
              <div className="text-start">
                <Typography variant='h2'>110</Typography>
                <Typography variant="h6">COMPLETED PROJECTS</Typography>
              </div>
            </div>
            <div className='flex items-center justify-center gap-x-4 text-white'>
                <TbCup className='text-[80px]'/>
              <div className="text-start">
                <Typography variant='h2'>1,000</Typography>
                <Typography variant="h6">CUPS OF COFFE</Typography>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services