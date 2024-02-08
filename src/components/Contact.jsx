import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
const Contact = () => {
  return (
    // <section className="min-h-full bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
    //   <div className="container flex flex-col px-6 py-12 mx-auto">
    //     <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
    //       <div className="text-white lg:w-1/2 lg:mx-6">
    //         <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
    //           Contact Me
    //         </h1>

    //         <p className="max-w-xl mt-6">
    //           Ask me everything and i would love to hear from you
    //         </p>

    //         <div className="mt-6 space-y-8 md:mt-8">
    //           <p className="flex items-start -mx-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-2 text-white"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //               />
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>

    //             <span className="mx-2 text-white truncate w-72">
    //               Cempaka Putih, Jakarta, Indoesia
    //             </span>
    //           </p>

    //           <p className="flex items-start -mx-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-2 text-white"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    //               />
    //             </svg>

    //             <span className="mx-2 text-white truncate w-72">
    //               (+62) 8956-0436-2510
    //             </span>
    //           </p>

    //           <p className="flex items-start -mx-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6 mx-2 text-white"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //               />
    //             </svg>

    //             <span className="mx-2 text-white truncate w-72">
    //               johannesjordi@rocketmail.com
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <h3 className="text-center text-white pb-10">
    //     © 2023 Johannes Jordi. All rights reserved.
    //   </h3>
    // </section>

    <section className="py-10 mt-5">
      <hr />

      <div className="flex flex-col space-y-4 justify-center mt-10 sm:gap-6 sm:flex sm:flex-row sm:space-y-0">
        <div className="flex text-teal-600 gap-2 p-3  rounded-lg shadow-lg  items-center text-md dark:text-white dark:shadow-neutral-700">
          <FaLocationDot />
          <p>Jakarta Pusat, Indonesia</p>
        </div>
        <div className="flex text-teal-600 gap-2 p-3  rounded-lg shadow-lg items-center text-md dark:text-white dark:shadow-neutral-700">
          <MdEmail />
          <p>johannesjordi@rocketmail.com</p>
        </div>
        <div className="flex text-teal-600 gap-2 p-3  rounded-lg shadow-lg items-center text-md dark:text-white dark:shadow-neutral-700">
          <MdPhoneIphone />
          <p>+62895604362510</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
