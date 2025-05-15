import { useState, useEffect } from "react";
import { useAccount, useToken } from "wagmi";
import UserToken from "../views/userToken";

function CurrentUser() {
  const [count, setCount] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const account = useAccount();
  useEffect(() => {
    setAddresses(account?.addresses);
  }, [account?.addresses]);

  return (
    <div className="advantage nyxBorderTop nyxContainer" id="features">
      <div className="nyxBorderX">
        <div>
          <div className="w-full relative"></div>
        </div>

        <div className="nyxBorderTop  bg-[#070C10] bg-[url('../assets/images/bg_images/rightLighting.png')] bg-no-repeat bg-right-top">
          <div className="gridLine xl:pt-[64px] lg:pt-[40px] md:pt-[24px] sm:pt-[12px] pt-[12px] xl:pb-[64px] lg:pb-[40px] md:pb-[24px] pb-[24px]">
            <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] font-[RobotoMono] flex flex-col gap-12">
              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <div className="shape-outer customize-outer">
                    <div className="shape-inner customize-inner relative">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Current User
                          </p>
                        </div>
                        <div className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          {addresses?.map((address, idx) => {
                            return <UserToken key={idx} address={address} />;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 hidden xl:block fadeUpAnimation">
                <div className="shape-container_44">
                  <div className="shape-outer_44 customize-outer_44">
                    <div className="shape-inner_44 customize-inner_44">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Current User
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          {addresses?.map((address, idx) => {
                            return <UserToken key={idx} address={address} />;
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left_44"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right_44"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-top_44"
                    src="./assets/images/nyxBorderBox/border-top.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <div className="shape-outer customize-outer">
                    <div className="shape-inner customize-inner relative"></div>
                  </div>
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 hidden xl:block fadeUpAnimation"></div>

              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentUser;
