import Nav from "../component/Nav"
import user from "../assets/user.png"

function Profile() {
  return (
      <div className="px-6 md:px-12 mx-auto">
          <Nav/>
          <div className="h-screen w-full  flex justify-center items-center">
                {/* Card */}
                  <div className="z-50 shadow-lg rounded-lg py-8 px-12"> 
                      
                      {/* Avatar */}
                        <div className="h-12 w-16 flex mx-auto object-contain mb-4"> 
                            <img src={user} alt="profileImg" />
                        </div>

                        <div className=" flex flex-col gap-1 text-center ">
                            <p className="text-md text-indigo-700 font-bold ">
                                Gbenga Tumi 
                            </p>

                            <p className="text-sm text-gray-400 tracking-[2px]">Lagos</p>
                        </div>

                        <div className="flex justify-between gap-4 items-center py-5">
                              <div className="flex gap-[-8px] flex-col items-center">
                                    <p className="text-indigo-700 text-md font-bold"> 80k </p>
                                    <p className="text-xs tracking-[2px] text-gray-400">Followers</p>
                              </div>

                              <div className="flex gap-[-8px] flex-col items-center">
                                    <p className="text-indigo-700 text-md font-bold"> 1.9k </p>
                                    <p className="text-xs tracking-[2px] text-gray-400">Likes</p>
                              </div>

                              <div className="flex gap-[-8px] flex-col items-center">
                                    <p className="text-indigo-700 text-md font-bold"> 100k </p>
                                    <p className="text-xs tracking-[2px] text-gray-400">Impressions</p>
                              </div>
                        </div>
                        

                  </div>
          </div>
      </div>
  )
}

export default Profile