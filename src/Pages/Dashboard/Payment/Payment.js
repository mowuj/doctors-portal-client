import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3HzCFICgNuMVET4lm1alcn4VyaJfMWJm0ke7akqFag2hi9hvzX0ZHIYGh48uaHZh5f2T4dUVyA44XHPcBVwelS006dwqyc2O');
const Payment = () => {
    const { id } = useParams();
    const url=`https://whispering-river-73719.herokuapp.combooking/${id}`
    const { data:appointment,isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
            headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello,{ appointment.patientName}</p>
                            <h2 class="card-title">Pay for { appointment.treatment}</h2>
                            <p>Your Appointment:<span className='text-orange-700'>{appointment.date}</span> at { appointment.slot}</p>
                    <p>Please Pay :${ appointment.price}</p>
  </div>
</div>
{/* pk_test_51L3HzCFICgNuMVET4lm1alcn4VyaJfMWJm0ke7akqFag2hi9hvzX0ZHIYGh48uaHZh5f2T4dUVyA44XHPcBVwelS006dwqyc2O */}
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
            <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={ appointment}/>
            </Elements>
        </div>
    </div>
  </div>

    );
};

export default Payment;