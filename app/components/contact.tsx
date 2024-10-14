export const Contact: React.FC = () => {
  return (
    <div 
      id="contact" 
      className="py-[48px] lg:py-[60px] bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] flex justify-center items-center"
    >
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-[#172026] text-center text-2xl font-bold lg:text-[42px] mb-4">
          Contact Us
        </h2>
        <p className="text-center text-[#36485C] text-md lg:text-[18px] mb-8">
          We’re here to help you with any questions or concerns.
        </p>
        <form>
          <div className="mb-6">
            <label className="block text-[#36485C] text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:shadow-lg"
              id="name" 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#36485C] text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:shadow-lg"
              id="email" 
              type="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#36485C] text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-200 hover:shadow-lg" 
              id="message" 
              placeholder="Your Message" 
              rows={4} 
              required
            ></textarea>
          </div>
          <button 
              className="w-full bg-[#4328EB] text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-lg"
              type="submit"
            >
              Send
            </button>
        </form>
      </div>
    </div>
  );
};