import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import FetchBanner from './FetchBanner';
import { useHistory } from 'react-router-dom';

export default function Signup() {
    const history = useHistory();
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [validationMessage, setValidationMessage] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [formData, setFormData] = React.useState({
        firstN: "",
        lastN: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    React.useEffect(() => {
      const handleSubmit = async () => {
    
        try {
          const response = await fetch('http://localhost:8000/postsignup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers as needed
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            // Handle error here
            console.error('Failed to submit form:', response.statusText);
            setErrorMessage(`Failed to submit form: ${response.statusText}${' status code '}${response.status}`);
            return;
          }
    
          // Handle success here
          console.log('Form submitted successfully');
          setValidationMessage(`Form submitted successfully: ${response.statusText}${' status code '}${response.status}`)
          setFormData({ ...formData,
            firstN: "",
            lastN: "",
            email: "",
            password: "",
            confirmPassword: ""
            })
          setFormSubmitted(false);
          history.push('/'); //redirect to home page
        } catch (error) {
          // Handle network or other errors
          console.error('Error:', error.message);
          setErrorMessage(`Error: ${error.message}`);
        }
      };
      if (formSubmitted) {
        handleSubmit();
      }
    },[formSubmitted])

  return (
    <>
    {validationMessage && <FetchBanner bannerMessage={validationMessage}/>}
    {errorMessage && <FetchBanner bannerMessage={errorMessage}/>}
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sign Up</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Please enter your information below.
        </p>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        setFormSubmitted(true);
      }} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstN" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstN"
                id="firstN"
                autoComplete='firstN'
                value={formData.firstN}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastN" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastN"
                id="lastN"
                autoComplete='lastN'
                value={formData.lastN}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete='email'
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Enter your password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete='password'
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold leading-6 text-gray-900">
              Confirm your password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  )
}