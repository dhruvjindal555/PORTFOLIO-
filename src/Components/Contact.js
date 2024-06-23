import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export default function Contact({contactRef}) {
    const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   

    const [contactDetails, setContactDetails] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
    })
    const onChange = (e) => {
        setContactDetails({
            ...contactDetails,
            [e.target.name]: e.target.value
        })
    }
    const templateID = process.env.REACT_APP_TEMPLATE_ID
    const serviceID = process.env.REACT_APP_SERVICE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const form = useRef();
    const notify = (msg, type) => {
        if (type === 'success') {
            toast.success(msg)
        } else {
            toast.error(msg)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            contactDetails.first_name === "" ||
            contactDetails.last_name === "" ||
            contactDetails.email === "" ||
            contactDetails.message === ""
        ) {
            notify("Please fill out all fields", "error")
        } else {
            sendEmail()
        }
    };
    const sendEmail = () => {

        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    notify("Thank you for your message! I will get back to you soon.", "success")
                },
                (error) => {
                    console.log('FAILED...', error);
                    notify("Oops! Something went wrong. Please try again later.", "error")
                },
            );
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='flex justify-between relative w-screen mt-20' ref={contactRef}>
                <div className='absolute md:-left-24 -left-36 z-10 -top-24'>
                    {/* <img src='pattern-circles.svg' /> */}
                    <div className='border-2 border-gray-400 shadow-md w-60 h-60 rounded-full'></div>
                </div>
                <div className='absolute md:-right-20 -right-36 z-10 -top-24'>
                    <div className='border-2 border-gray-400 shadow-md w-60 h-60 rounded-full'></div>
                </div>
            </div>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8 border-t-2 bg-gray-200 border-black "
                style={{ "borderTopLeftRadius": "10rem", "borderTopRightRadius": "10rem" }}>

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact me</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Feel free to reach out to discuss potential opportunities or collaborations!
                    </p>
                </div>
                <form ref={form} onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={contactDetails.first_name}
                                    onChange={onChange}
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={contactDetails.last_name}
                                    onChange={onChange}
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={contactDetails.email}
                                    type="email"
                                    onChange={onChange}
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    value={contactDetails.message}
                                    name="message"
                                    onChange={onChange}
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <motion.button
                         whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} 
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's talk
                        </motion.button>
                    </div>
                </form>
            </div>
        </>
    )
}