// File: src/components/UserForm.jsx
import React, { useState, useEffect } from 'react';

export default function UserForm({ initialData = {}, onSubmit }) {
  // Normalize educationalQualifications even if it's missing
  const {
    educationalQualifications = {},
    skills: initSkills = [],
    age: initAge,
    ...restData
  } = initialData;

  const {
    degree: initDegree = '',
    university: initUniversity = '',
    session: initSession = '',
    cgpa: initCgpa,
  } = educationalQualifications;

  if (isError) {
    console.error(error); // This will log the entire error object to the console
    const errorMessage = error?.data?.message || error?.message || "Unknown error occurred";
    return (
      <p className="text-center py-10 text-red-600">
        Error loading users: {errorMessage}
      </p>
    );
  }

  // Build default form state
  const buildFormState = () => ({
    image: restData.image || '',
    name: restData.name || '',
    email: restData.email || '',
    age: initAge != null ? String(initAge) : '',
    nationality: restData.nationality || '',
    skills: Array.isArray(initSkills) ? initSkills.join(', ') : initSkills,
    nid: restData.nid || '',
    address: restData.address || '',
    phone: restData.phone || '',
    website: restData.website || '',
    gender: restData.gender || '',
    degree: initDegree,
    university: initUniversity,
    session: initSession,
    cgpa: initCgpa != null ? String(initCgpa) : '',
  });

  const [formData, setFormData] = useState(buildFormState());

  // Whenever initialData changes, re-set the form
  useEffect(() => {
    setFormData(buildFormState());
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setFormData((fd) => ({ ...fd, image: reader.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((fd) => ({ ...fd, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      image,
      name,
      email,
      age,
      nationality,
      skills,
      nid,
      address,
      phone,
      website,
      gender,
      degree,
      university,
      session,
      cgpa,
    } = formData;

    const payload = {
      image,
      name,
      email,
      age: age ? Number(age) : null,
      nationality,
      skills: skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      nid,
      address,
      phone,
      website,
      gender,
      educationalQualifications: {
        degree,
        university,
        session,
        cgpa: cgpa ? Number(cgpa) : null,
      },
    };

    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Image Upload */}
      <div className="col-span-1 md:col-span-2 flex flex-col items-center">
        <label className="text-gray-600 font-medium mb-1">
          Upload Image
        </label>
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="h-24 w-24 rounded-full mt-4 object-cover"
          />
        )}
      </div>

      {[
        { key: 'name', label: 'Name', type: 'text' },
        { key: 'email', label: 'Email', type: 'text' },
        { key: 'age', label: 'Age', type: 'number' },
        { key: 'nationality', label: 'Nationality', type: 'text' },
        { key: 'skills', label: 'Skills (comma-separated)', type: 'text' },
        { key: 'nid', label: 'NID', type: 'text' },
        { key: 'address', label: 'Address', type: 'text' },
        { key: 'phone', label: 'Phone', type: 'text' },
        { key: 'website', label: 'Website', type: 'text' },
        { key: 'gender', label: 'Gender', type: 'text' },
        { key: 'degree', label: 'Degree', type: 'text' },
        { key: 'university', label: 'University', type: 'text' },
        { key: 'session', label: 'Session', type: 'text' },
        { key: 'cgpa', label: 'CGPA', type: 'number' },
      ].map(({ key, label, type }) => (
        <div key={key} className="flex flex-col">
          <label className="text-gray-600 font-medium mb-1">{label}</label>
          <input
            name={key}
            type={type}
            value={formData[key] || ''}
            onChange={handleChange}
            placeholder={label}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      ))}

      {/* Submit */}
      <div className="col-span-1 md:col-span-2 text-center mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md"
        >
          Save
        </button>
      </div>
    </form>
  );
}
