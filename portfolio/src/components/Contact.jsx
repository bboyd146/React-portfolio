import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Email sent successfully');
                // Reset form after successful submission
                setFormData({ name: '', company: '',  email: '', message: '' });
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto bg-white p-8">
            <h2 className="text-2xl text-center font-semibold mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-6/12 bg-gray-500 hover:bg-blue-600 mx-auto block text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
