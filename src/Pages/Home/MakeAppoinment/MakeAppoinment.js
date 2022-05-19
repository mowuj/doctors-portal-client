import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
const MakeAppoinment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae ipsam quidem odio tempora quo dolorem modi dicta quaerat libero aspernatur necessitatibus ut nam dolore doloribus inventore in, saepe quae totam. Quam commodi, enim optio nesciunt dicta reprehenderit quis! Consequuntur!</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppoinment;