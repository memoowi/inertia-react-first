import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Movies({auth, movies}) {
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Movies</h2>}
        >
            <Head title="Movies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className='text-3xl text-center font-bold mb-4'>Movies</h1>
                            {/* You're logged in! */}
                            <Link href={route('admin.new.movie')}>
                                <PrimaryButton>
                                    Add Movie
                                </PrimaryButton>
                            </Link>
                            <table className='w-full text-start border-2 border-gray-300 mt-10'>
                                <thead className='py-18'>
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Genre</th>
                                        <th>Year</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map((movie) => (
                                    <tr key={movie.id}>
                                        <td>{movie.id}</td>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie.year}</td>
                                        <td>
                                           <SecondaryButton href={route('admin.detail.movie', movie.id)}>Detail</SecondaryButton>
                                        </td>
                                   </tr> 
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
  )
}
