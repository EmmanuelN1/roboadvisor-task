import sec4 from "../assets/sec4.png"

function Section5() {
  return (
    <div>
            <div className=" mt-16 md:mt-28 flex flex-col-reverse md:flex-row-reverse md:justify-between">
                <div className=" w-full md:w-[30%]">
                    <p className=" text-4xl md:text-5xl font-light text-indigo-950 font-[mono]">Our not-so-secret ingredient? Automation</p>
                    <p className="  mt-4 md:mt-8 text-base  font-[georgia] text-indigo-950 ">Keep your eyes on the big picture, your other investments, or basically anything besides the busywork. We rebalance your portfolio, automatically diversify deposits, and can help save you taxes, all without you ever lifting a finger.</p>
                    <button className="mt-8 mb-8 lg:mb-0 md:mt-12 fo text-sm px-4 py-4 rounded-md text-white  bg-indigo-950"> Get Started</button>
                </div>

                <div className="w-auto md:w-8/12 mb-4 " >
                    <img src={sec4} alt=""  />
                </div>

            </div>
    
    </div>
  )
}

export default Section5