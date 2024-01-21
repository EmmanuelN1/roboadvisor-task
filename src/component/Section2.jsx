import sec2 from "../assets/sec2.png"
function Section2() {
  return (
    <div>
          <div className=" mt-12 flex flex-col-reverse md:flex-row-reverse md:justify-between">
                <div className=" w-full md:w-[30%]">
                    <p className=" text-4xl md:text-6xl font-light text-indigo-950 font-[mono]">Smarter investing, brilliantly personalized. </p>
                    <p className="  mt-4 md:mt-8 text-base  font-[georgia] text-indigo-950 ">Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.</p>
                    <button className="mt-8 mb-8 lg:mb-0 md:mt-12 fo text-sm px-4 py-4 rounded-md text-white  bg-indigo-950"> Get Started</button>
                </div>

              <div className="w-auto md:w-8/12 mb-4 " >
                    <img src={sec2} alt=""  />
              </div>
        </div>
    </div>
  )
}

export default Section2