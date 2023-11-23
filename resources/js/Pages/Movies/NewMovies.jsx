import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';



export default function NewMovies({auth}) {
    const { data, setData, processing, patch } = useForm({
        title: "",
        genre: "",
        year: "",
    });
    const handleChange = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value || '',
        }));
    };
    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        patch(route('admin.save.movie'));
    };
  return (
    // <div>NewMovies</div>
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Movies</h2>}
        >
            <Head title="New Movie" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="max-w-xl">
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">Add New Movie</h2>

                                        <p className="mt-1 text-sm text-gray-600">
                                            Add a new movie to the list of movies
                                        </p>
                                    </header>

                                    <form onSubmit={submit} className="mt-6 space-y-6">
                                        <div>
                                            <InputLabel htmlFor="title" value="Title" />

                                            <TextInput
                                                id="title"
                                                className="mt-1 block w-full"
                                                value={data.title}
                                                onChange={(e) => handleChange('title', e.target.value)}
                                                required
                                                isFocused
                                                autoComplete="title"
                                                placeholder="Movie Title"
                                            />

                                            <InputError className="mt-2" message="" />
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="genre" value="Genre" />

                                            <TextInput
                                                id="genre"
                                                className="mt-1 block w-full"
                                                value={data.genre}
                                                onChange={(e) => handleChange('genre', e.target.value)}
                                                required
                                                placeholder="Movie Genre"
                                            />

                                            <InputError className="mt-2" message="" />
                                        </div>
                                        
                                        <div>
                                            <InputLabel htmlFor="year" value="Year" />

                                            <TextInput
                                                id="year"
                                                type="number"
                                                min="1900"
                                                max="2099"
                                                className="mt-1 block w-full"
                                                value={data.year}
                                                onChange={(e) => handleChange('year', e.target.value)}
                                                required
                                                placeholder="Movie Year"
                                            />

                                            <InputError className="mt-2" message="" />
                                        </div>


                                        <div className="flex items-center gap-4">
                                            <PrimaryButton disabled={processing}>ADD</PrimaryButton>
                                        </div>
                                    </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    </AuthenticatedLayout>
  )
}
