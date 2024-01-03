import React , {useRef} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const formRef = useRef();
    const handleclick =()=>{
        navigate('/login')

    }
    const handleContactSubmit = async (e) => {
        e.preventDefault();
    
        // Create a new FormData object from the form element
        const formData = new FormData(e.target);
    
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
    
        try {
          // Make a POST request to the backend API endpoint
          const response = await axios.post('https://aftabassignmentbackend.onrender.com/api/contact', {
            name,
            email,
            message,
          });
    
          // Check if the submission was successful
          if (response.data.success) {
            alert('Contact form submitted successfully!');
            // You can also reset the form if needed
            e.target.reset();
          } else {
            alert('Failed to submit the contact form. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting the contact form:', error);
          alert('Internal server error. Please try again later.');
        }
      };
    
  return (
    <div className="w-full bg-gray-100">
      <header className="flex h-20 w-full items-center px-4 md:px-6 bg-black-500 text-blue">
        <div className="w-[150px]">
          <a href="#">
            <span className="sr-only">Home Shop</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <nav className="hidden lg:flex">
            <ul className="flex space-x-4">
              <li>
                <a href="#homepage">Home</a>
              </li>
              <li>
                <a href="#listings">Listings</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto w-[150px]">
          <button className="text-black-500 bg-white px-4 py-2 rounded border border-blue-500 " onClick={handleclick}>
            Login
          </button>
        </div>
      </header>
      <main className="container px-4 md:px-6 py-8">
        <section className="w-full py-12 md:py-24 lg:py-32 space-y-8" id="homepage">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black-500">
            Welcome to Rooms
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find your dream Room Here.
          </p>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 space-y-8" id="listings">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black-500">Our Listings</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt="Room"
                      className="w-full h-full object-cover object-center"
                      src="https://imgs.search.brave.com/BzJFHobC2VlshUG3WgyZM5307kFn-TH7sH_QDbd7INg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg1/MTMxNDU0L3Bob3Rv/L21vZGVybi1vZmZp/Y2UtYnVpbGRpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW40QjZzcnRacTZD/cjdkYy1ITDhRMElO/cUZZWVIzRTZuV1ot/dnhwdDVabUU9"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Home</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Room `}
                      className="w-full h-full object-cover object-center"
                      src="https://imgs.search.brave.com/lugQcA1BAAd0B-n5p3vC_0pYjMGOdKWcbP36fIgFWn0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM1/NzIyMjAwL3Bob3Rv/L2F0LXQtYmF0bWFu/LWJ1aWxkaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1n/OS1HQVdtY3h5MHdW/RkF0RWNKcnRwcWlD/cDU0aTQ1OHQ3SnRj/cERoMHdVPQ"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Homes</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Room `}
                      className="w-full h-full object-cover object-center"
                      src="https://imgs.search.brave.com/R2Z8ncD-U46t8_NhkukE-7E_NUlEcx9wdz7iGXESTDM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0LzgyLzQy/LzM2MF9GXzY0ODI0/Mjk4X21IeUZFaFcw/djVpUDhBc3JvY2w0/dVR3bmU0eWtocTdL/LmpwZw"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Homes</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Room `}
                      className="w-full h-full object-cover object-center"
                      src="https://imgs.search.brave.com/R2Z8ncD-U46t8_NhkukE-7E_NUlEcx9wdz7iGXESTDM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0LzgyLzQy/LzM2MF9GXzY0ODI0/Mjk4X21IeUZFaFcw/djVpUDhBc3JvY2w0/dVR3bmU0eWtocTdL/LmpwZw"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Homes</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Room `}
                      className="w-full h-full object-cover object-center"
                      src="https://imgs.search.brave.com/OPNcrdm6f-pP5ufKRe_7bvmvNaOAMEfifYKLk-hA6zo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQw/MjUxNzc4L3Bob3Rv/L2NvbnN0cnVjdGlv/bi1zaXRlLXZpZXct/d2l0aC10b3dlci1j/cmFuZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aDc4emts/WElHQUtqSVFpM0FJ/N2hrcDRGTkVPRmhY/WEwxTXo5S05vZ2Rp/ST0"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Homes</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Room `}
                      className="w-full h-full object-cover object-center"
                      src="https://imgs.search.brave.com/--3eTAMHTr5wpNW-c6nkOgxbG3yiiGkMOPnGZ2Ky6Wc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzIzLzQ1LzIw/LzM2MF9GXzYyMzQ1/MjA2OF92OHJLYlJF/aGRpZW1uQk9VTHZD/M1FLNjlEb2xWYWdX/Ui5qcGc"
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Homes</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
           
          </div>
          
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black-500">Contact Us</h2>
        <form className="mt-4 space-y-4" onSubmit={handleContactSubmit}>
          <input
            className="block w-full p-2 border border-gray-300 rounded-md"
            name="name"
            placeholder="Enter your name"
            required
            type="text"
          />
          <input
            className="block w-full p-2 border border-gray-300 rounded-md"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
          <textarea
            className="block w-full p-2 border border-gray-300 rounded-md"
            name="message"
            placeholder="Enter your message"
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Submit</button>
        </form>
      </section>
      </main>
      <footer className="w-full py-12 bg-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h3 className="text-lg font-semibold">© 2023 Rooms. All rights reserved.</h3>
        </div>
      </footer>
    </div>
  );
}
