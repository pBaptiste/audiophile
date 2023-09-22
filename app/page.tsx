import NewProduct from './components/newproduct'
import ResponsiveImage from './components/responsive-image'
import ProductLinks from './components/product-links'
import Trending from './components/trending'
import About from './components/about'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      <section className="relative overflow-hidden bg-[#191919] pt-[106px] md:pt-[126px] xl:pt-[128px] px-6 xl:px-[165px] pb-[112px] md:pb-[167px] xl:pb-[158px] flex justify-center xl:justify-start">
        <NewProduct
          title="XX99 Mark II Headphones"
          desc="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          link="/productdetail/xx99-mark-two-headphones" />
        <div className='absolute w-full h-full top-[-40px] xl:top-[-60px] left-0 flex items-center justify-center xl:justify-end z-[10]'>
          <div className="flex-none w-[375px] md:w-[780px] xl:w-full h-full relative z-10">
            <ResponsiveImage
              sm='/assets/home/mobile/image-header.jpg'
              md='/assets/home/tablet/image-header.jpg'
              lg='/assets/home/desktop/image-hero.jpg'
              alt='Banner Image'
            />
          </div>
        </div>
      </section>

      <section className="pt-[92px] xl:pt-[148px] pb-[120px] xl:pb-[200px] md:py-24 px-6 md:px-10 xl:px-[165px] flex justify-center ">
        <div className='flex flex-col gap-[120px] md:gap-24 xl:gap-[168px] w-[327px] md:w-[689px] xl:w-[1110px]'>
          <ProductLinks />
          <Trending />
          <About />
        </div>
      </section>



    </main>
  )
}
