
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DoctorRow from '../../Dashboard/DoctorRow/DoctorRow'
import DeleteConModal from '../DeleteConModal/DeleteConModal';
const ManageDoctors = () => {
    const [deletingDoctor,setDeletingDoctor]=useState(null)
    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('https://whispering-river-73719.herokuapp.comdoctor', {
        headers: {
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors:{ doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)                
        }
    </tbody>
</table>
            </div>
            {
                deletingDoctor && <DeleteConModal
                    deletingDoctor={deletingDoctor}
                    refetch={refetch}
                    setDeletingDoctor={setDeletingDoctor}
                ></DeleteConModal>
            }
        </div>
    );
};

export default ManageDoctors;