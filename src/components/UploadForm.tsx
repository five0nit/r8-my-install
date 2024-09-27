'use client'

import { useState } from 'react'

export default function UploadForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    serviceType: '',
    price: 0,
    installationDate: '',
    salesTeamRating: 5,
    installationTeamRating: 5,
    cleanlinessRating: 5,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="serviceType" className="block">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="">Select a service type</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="HVAC">HVAC</option>
        </select>
      </div>
      <div>
        <label htmlFor="price" className="block">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="installationDate" className="block">Installation Date</label>
        <input
          type="date"
          id="installationDate"
          name="installationDate"
          value={formData.installationDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="salesTeamRating" className="block">Sales Team Rating</label>
        <input
          type="range"
          id="salesTeamRating"
          name="salesTeamRating"
          min="1"
          max="10"
          value={formData.salesTeamRating}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="installationTeamRating" className="block">Installation Team Rating</label>
        <input
          type="range"
          id="installationTeamRating"
          name="installationTeamRating"
          min="1"
          max="10"
          value={formData.installationTeamRating}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="cleanlinessRating" className="block">Cleanliness Rating</label>
        <input
          type="range"
          id="cleanlinessRating"
          name="cleanlinessRating"
          min="1"
          max="10"
          value={formData.cleanlinessRating}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  )
}