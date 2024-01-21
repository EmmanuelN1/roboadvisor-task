import sec3 from "../assets/sec3.png"

function Section4() {
  return (
    <div>
            <div className=" mt-16 md:mt-28 flex flex-col-reverse md:flex-row md:justify-between">
                <div className=" w-full md:w-[30%]">
                    <p className=" text-4xl md:text-5xl font-light text-indigo-950 font-[mono]">You make it custom. We’ll do the rest.</p>
                    <p className="  mt-4 md:mt-8 text-base  font-[georgia] text-indigo-950 ">Choose from hundreds of funds in categories like clean energy, tech, and crypto and we’ll handle the trades and rebalance your portfolio for you. Or start with a portfolio designed around your values with our Socially Responsible portfolio. We make it easy and safe to customize by helping you see when your choices won’t be in line with your preferred risk level.</p>
                    <button className="mt-8 mb-8 lg:mb-0 md:mt-12 fo text-sm px-4 py-4 rounded-md text-white  bg-indigo-950"> Get Started</button>
                </div>

                <div className="w-auto md:w-8/12 mb-4 " >
                    <img src={sec3} alt=""  />
                </div>
        </div>
    </div>
  )
}

export default Section4