import React from "react";
import './Contact.css';
import { FcPhoneAndroid } from 'react-icons/fc';
import { BiLocationPlus } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsSendCheck } from 'react-icons/bs';
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div id="contact">
      <div className="text-center mt-28 mb-20">
        <h2 className="text-5xl font-semibold">Contact Us</h2>
        <div className="custom-border mx-auto"></div>
        <p className="text-md mt-3 font-normal text-gray-500">Let's Connect and Make Things Happen</p>
       </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
            <div>
                
            </div>
          <div className="max-w-md md:max-w-lg md:ml-16">
            <div className="mb-10 md:ml-0 ml-2">
              <div className="flex items-center">
                <div>
                    <FcPhoneAndroid className="w-14 h-14 mr-3"></FcPhoneAndroid>
                </div>
                <div>
                    <p className="text-xl font-semibold">Phone Number</p>
                    <p className="text-lg font-medium">+01407837</p>
                </div>
              </div>
              <div className="flex items-center my-10">
                <div>
                    <BiLocationPlus className="w-14 h-14 mr-3 text-[#E05652]"></BiLocationPlus>
                </div>
                <div>
                    <p className="text-xl font-semibold">Location</p>
                    <p className="text-lg font-medium">6034 S Norcross Tucker Rd, Norcross, GA 30093</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                    <HiOutlineMail className="w-12 h-14 mr-3 text-[#FFB755]"></HiOutlineMail>
                </div>
                <div>
                    <p className="text-xl font-semibold">Email</p>
                    <p className="text-lg font-medium">crabhut@gmail.com</p>
                </div>
              </div>
            </div>
            <h1 className="text-3xl mb-3 md:ml-0 ml-2">Contact Form</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  className="custom-primary-btn"
                  
                >
                 <div className="flex items-center">Send Us <span className="ml-2"><BsSendCheck></BsSendCheck></span></div>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center md:mr-10">
            <div className="bg-[#F8F4F3] py-28">
                <p className="text-ms mb-3 text-orange-500 font-semibold">OPENING HOURS</p>
                <h2 className="md:text-6xl text-4xl mb-6">Call For Reservations</h2>
                <div className="divider-btn mx-12"></div>
                <div className="flex justify-evenly mt-10">
                    <div>
                        <p className="mb-3">Sunday to Tuesday</p>
                        <h3 className="text-5xl font-bold">10:00<br/>22:00</h3>
                    </div>
                    <div>
                        <p className="mb-3">Friday to Saturday</p>
                        <h3 className="text-5xl font-bold text-orange-500">11:00<br/>21:00</h3>
                    </div>
                </div>
                <button className="butn mt-16">+1 203-123-0606</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
