import sec1 from "../assets/sec1.png"
function Header() {
  return (
    <div className=" mt-12 flex flex-col-reverse md:flex-row md:justify-between mb-8 md:mb-16">
        <div className=" w-full md:w-[30%]">
            <p className=" text-3xl md:text-5xl italic text-indigo-950 font-[georgia]">There’s no secret to long-term wealth, but if there were it would be this: <span className="md:block not-italic text-4xl md:text-5xl font-black "> automated index investing.</span> </p>
            <p className="  mt-4 md:mt-8 text-base font-[georgia] text-indigo-950 ">Even with the inevitable ups and downs of the market, our expert-built, globally-diversified Automated Investing Account makes it easy to start building long-term wealth by managing your risk, maximizing returns, and minimizing taxes.</p>
            <button className="mt-8 mb-8 lg:mb-0 md:mt-12 text-sm px-4 py-4 rounded-md text-white  bg-indigo-950"> Get Started</button>
        </div>

        <div className="w-auto md:w-8/12 mb-4 " >
              <img src={sec1} alt=""  />
        </div>
    </div>
  )
}

export default Header