import React from 'react'
import HeroImg from '../assets/hero_img.svg'
import PcParts from '../assets/subHero/pcparts.png'
import NetEuip from '../assets/subHero/nequip.png'
import Cctv from '../assets/subHero/cctv.png'
import Arrow from '../assets/arrow.svg'
import EastIcon from '@mui/icons-material/East';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const Home = () => {

    const subHeroData = [
        {
            img: PcParts,
            title: 'High Quality PC Parts',
            description: 'We provide high quality PC parts for your desktop and laptop. We also provide repair services for your desktop and laptop.'
        },
        {
            img: NetEuip,
            title: 'Network Equipments',
            description: 'We provide network and router configuration services. We also provide network maintenance services.'
        },
        {
            img: Cctv,
            title: 'High Definition CCTV Cameras',
            description: 'We provide maintenance services for both IP and normal cameras. We also provide installation services for new cameras.'
        }
    ]

    const serviceData = [
        {
            title: "CCTV Maintenance ( IP Camera & Normal Camera )",
            description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!"
        },
        {
            title: "Network and Router Configuration",
            description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!"
        },
        {
            title: "Desktop and Laptop Repairs",
            description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!"
        },
        {
            title: "Printer Servicing",
            description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!"
        },
        {
            title: "Server Maintainance",
            description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!"
        }
    ]

    const contactDetails = [
        {
            icon: PlaceIcon,
            description: '123,Straight Road, City, State, Country, 700001'
        },
        {
            icon: PhoneIcon,
            description: '+91 9999999999'
        },
        {
            icon: WhatsAppIcon,
            description: '+91 9999999999'
        }
    ]

    return (
        <>

            {/* Heroes Section */}
            <section id='home' className='flex items-center justify-center h-screen px-20'>

                <div className='w-1/2 flex flex-col gap-10'>
                    <h1 className='text-6xl font-medium'>Techtester Infotech</h1>
                    <p>
                        Welcome to <strong>Techtester Infotech</strong>, your IT heroes! We specialize in CCTV maintanece ( IP & normal cameras ),network and router configuration, desktop and laptop repairs, printer servicing, and server maintainance. We are a team of dedicated professionals who are always ready to help you with your IT needs. We are available 24/7, so you can reach out to us anytime. We are here to help you with all your IT needs.
                    </p>
                    <a className='bg-black w-max text-[#F9C869] rounded-xl font-medium px-12 py-2' href='#home'>Contact Us</a>
                </div>

                <div className='w-1/2 flex items-baseline justify-end'>

                    <img src={HeroImg} className='w-[80%] mt-32' alt="" />

                </div>

            </section>

            {/* Sales Section */}
            <section id='sales' className='h-screen bg-black px-20 py-10 flex flex-col gap-10'>

                <h2 className='text-2xl text-[#F9C869] font-medium'>What we sell ?</h2>

                <div className='grid grid-cols-3 h-full w-full gap-10'>

                    {
                        subHeroData.map((data, index) => {
                            return (
                                <div key={index} className='w-full h-full flex flex-col justify-around p-5 bg-black custom-shadow rounded-xl'>
                                    <img src={data.img} className='w-full object-contain' />
                                    <h2 className='text-2xl text-[#F9C869] font-medium'>{data.title}</h2>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates facilis alias adipisci temporibus laboriosam sed excepturi sunt explicabo animi repudiandae mollitia officiis, facere sit sapiente? Odit, ipsa fuga. Necessitatibus!
                                    </p>
                                    <a href="#contact" className='w-max flex items-center justify-around gap-2 px-10 py-2 rounded-lg outline outline-2 outline-[#F9C869] text-[#F9C869] hover:text-black hover:outline-black hover:bg-[#F9C869] transition-all ease-in-out duration-300'>

                                        <div className='text-xl font-medium w-max'>Contact Us</div>

                                        <EastIcon />

                                    </a>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            {/* Services Section */}
            <section id='services' className='flex flex-col gap-10 items-center justify-center h-screen px-20 min-h-screen max-h-max'>

                <h2 className='text-2xl font-medium text-center'>Our Services</h2>

                <div className='grid grid-cols-3 gap-10 w-full'>

                    {
                        serviceData?.map((data, index) => {
                            return (
                                <div key={index} className='card-shadow rounded-xl w-full p-10'>
                                    <h4 className='font-medium text-xl mb-5'>{data.title}</h4>
                                    <p>{data.description}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            {/* Contact Section */}
            <section id='contact' className='bg-black px-20 py-10 flex justify-between'>

                <div className='flex flex-col gap-10 w-[20%]'>

                    <h2 className='text-2xl font-medium text-white'>Contact Us</h2>

                    <div className='flex flex-col gap-5'>

                        {
                            contactDetails?.map((data, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-5'>
                                        <data.icon fontSize='large' className='text-white' />
                                        <p className='text-white text-lg'>{data.description}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                {/* Contact Form */}
                <form className='flex flex-col gap-2 w-[30%]'>

                    <p className='text-white text-lg mb-5'>Submit your contact details our team will contact you soon.</p>

                    <input className='outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg' type="text" placeholder='Name' />

                    <input className='outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg' type="email" placeholder='Email' />

                    <input className='outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg' type="text" pattern="^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$" placeholder="Contact No." />

                    <button className='bg-[#F9C869] text-black text-lg rounded-xl font-medium w-[40%] py-2'>
                        Submit
                    </button>

                </form>
            </section>

        </>
    )
}

export default Home