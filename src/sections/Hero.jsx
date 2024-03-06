import Button from "../components/Button"
import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br/>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="info-text text-lg mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for you active life</p>
        <Button label="Show now"
        iconURL={arrowRight}/>
        <div className="flex justify-around items-start flex-wrap w-full mt-20  max-sm:gap-10 gap-16">
          {statistics.map((stat) =>(
            <div key={stat.label}>
              <p className="max-sm:text-3xl text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="info-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> 
      <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-conver bg-center">
        <img src={bigShoeImg} alt="show collection" width={610} height={500} className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap:4 position absolute -bottom-[5%] max-sm:px-6"> 
          {shoes.map((shoe) => (
            <ShoeCard 
            imgURL={shoe}
            changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
            bigShoeImg = {bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
