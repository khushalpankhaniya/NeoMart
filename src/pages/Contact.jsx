const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-2 text-center max-w-md">
          Have any questions or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
  
        <div className="mt-6 w-full max-w-lg bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <form className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="text-base text-gray-700 font-medium">Full Name</label>
              <input type="text" placeholder="Enter your name" className="p-2 border border-gray-300 rounded-md mt-1" />
            </div>
            <div className="flex flex-col">
              <label className="text-base text-gray-700 font-medium">Email Address</label>
              <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded-md mt-1" />
            </div>
            <div className="flex flex-col">
              <label className="text-base text-gray-700 font-medium">Message</label>
              <textarea placeholder="Write your message here..." className="p-2 border border-gray-300 rounded-md h-24 mt-1"></textarea>
            </div>
            <div className="flex justify-center">
              <button className="px-6 py-2 bg-red-500 text-white text-base rounded-md shadow-md hover:bg-red-600 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  