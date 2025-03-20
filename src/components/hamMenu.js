import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const HamMenu = () => {
  const menuItems = [
    "what's new",
    "payments",
    "upgrades",
    "company",
    "insider perks",
  ];

  return (
    <div className="text-[#FFFFFFB3]">
      <div className="fixed z-10 inset-0 h-screen w-screen bg-black py-[50px] px-[100px] overflow-y-scroll opacity-100">
        <div className="flex justify-start items-start w-full pt-[200px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center items-center flex-[0_0_30%] cursor-pointer"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden pt-8 pb-8 border-b border-white/20 w-full"
              >
                <div className="w-full text-[24px] font-medium leading-[28px] tracking-[6px] uppercase text-left pr-[150px]">
                  {item}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            style={{ marginLeft: "150px" }}
          >
            <div className="flex flex-col items-start justify-between w-full animate-fadein">
              <div className="relative w-full">
                <Image
                  width={900}
                  height={255}
                  alt="navbar-images"
                  src="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/cards/now-live-wide.png?tr=q-95"
                  className=" cursor-pointer border border-white/20"
                />
                <div className="absolute top-[-18px] left-[30px] px-[15px] py-[5px] flex items-center justify-center border border-white/20 bg-black text-white text-[14px] leading-[24px] font-gilroy font-bold tracking-[4px] uppercase text-center">
                  now live
                </div>
              </div>
              <div className="flex justify-between items-center w-full gap-[60px] mt-[5%]">
                <div className="flex flex-col justify-center items-center cursor-pointer w-[180px]">
                  <Image
                    width={180}
                    height={180}
                    alt="navbar-images"
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/money-thumbnail.png"
                    className="border border-white/10"
                  />
                  <div className="text-center text-[17px] leading-[24px] font-semibold tracking-[5px] text-white/90 uppercase mt-[25px] h-[44px]">
                    MONEY
                  </div>
                  <div className="text-center text-[14px] leading-[23px] font-medium tracking-[0.1px] text-white/40 mt-[5px]">
                    track, analyze, and reflect on your financial behavior
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer w-[180px]">
                  <Image
                    width={180}
                    height={180}
                    alt="navbar-images"
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/garage-thumbnail.png"
                    className="border border-white/10"
                  />
                  <div className="text-center text-[17px] leading-[24px] font-semibold tracking-[5px] text-white/90 uppercase mt-[25px] h-[44px]">
                    garage
                  </div>
                  <div className="text-center text-[14px] leading-[23px] font-medium tracking-[0.1px] text-white/40 mt-[5px]">
                    manage, maintain, and
                    <br />
                    obsess over your cars
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer w-[180px]">
                  <Image
                    width={180}
                    height={180}
                    alt="navbar-images"
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/p2p-thumbnail.png"
                    className="border border-white/10"
                  />
                  <div className="text-center text-[17px] leading-[24px] font-semibold tracking-[5px] text-white/90 uppercase mt-[25px] h-[44px]">
                    pay anyone
                  </div>
                  <div className="text-center text-[14px] leading-[23px] font-medium tracking-[0.1px] text-white/40 mt-[5px]">
                    pay anyone, no matter
                    <br />
                    what UPI app {"they're"} on
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer w-[180px]">
                  <Image
                    width={180}
                    height={180}
                    alt="navbar-images"
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/careers-thumbnail.png"
                    className="border border-white/10"
                  />
                  <div className="text-center text-[17px] leading-[24px] font-semibold tracking-[5px] text-white/90 uppercase mt-[25px] h-[44px]">
                    WORK FOR CRED
                  </div>
                  <div className="text-center text-[14px] leading-[23px] font-medium tracking-[0.1px] text-white/40 mt-[5px]">
                    apply to build the most
                    <br />
                    trustworthy community
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HamMenu;
