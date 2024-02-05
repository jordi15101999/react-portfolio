/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const Portfolio = ({
  portfolio,
  setShowModal,
  fetchDescData,
  showModal,
  fetchdata,
}) => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-10 dark:text-gray-200">Projects</h3>
        <div className="flex items-center justify-center flex-col pb-20">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[100%] lg:max-w-[100%]"
          >
            {portfolio &&
              portfolio.map((port) => (
                <SwiperSlide
                  key={port.id}
                  onClick={() => {
                    setShowModal(true);
                    fetchDescData(port.id);
                  }}
                >
                  <div className="flex flex-col gap-6 group text-white px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-xl shadow-md overflow-hidden group-hover:opacity-50 cursor-pointer"
                      style={{
                        backgroundImage: `url("/${port.gambar}")`,
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {showModal ? (
        <>
          {fetchdata && (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl sm:mx-auto md:mx-auto">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black h-6 w-6 text-xl block outline-none focus:outline-none">
                          <AiOutlineClose />
                        </span>
                      </button>
                      <h3 className="text-center text-2xl font-semibold font-burtons">
                        {fetchdata.nama}
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <img
                        src={"/" + fetchdata.gambar}
                        width={630}
                        height={330}
                        className="rounded-lg object-cover"
                        alt="portfolio"
                      />
                    </div>
                    {/*footer*/}
                    <div className="text-lg text-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <h1>Website Build With :</h1>
                      <h1>{fetchdata.bahasa}</h1>
                      <h1>
                        Link :{" "}
                        <a href={fetchdata.link} className="text-teal-500">
                          {fetchdata.link}
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </>
      ) : null}
    </section>
  );
};

export default Portfolio;
