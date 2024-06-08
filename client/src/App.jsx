import {Card} from '@material-tailwind/react';
import { AboutMe, BlogPost, Home, Portfolio, Pricing, Services, MyFooter } from './pages';
import { Navbar } from './components';
// import Testimonials from './pages/testimonials';

const App = () => {
  return (
    <Card className="bg-fixed relative banner h-screen w-full rounded-none flex items-center justify-start">
      <Navbar/>
      <div className='bg-fixed author__fon w-full'>
        <Home/>
      </div>
      <AboutMe/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <BlogPost/>
      <Pricing/>
      <MyFooter/>
    </Card>
  )
}

export default App;