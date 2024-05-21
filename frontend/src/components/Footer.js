const Footer = () => {
  return (
    <>
    <footer className="w-full py-8">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
    <div className="flex-1 bg-white p-4 mr-4 rounded">
      <h2 className="text-3xl font-semibold mb-8">Just say Hi.</h2>
      <p className="mb-8 text-[#212121]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="mr-4 text-[#212121]">Mail me at</span>
          <span className="ml-auto text-[#212121]">Follow me:</span>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-[#212121]">your-email@example.com</span>
          <div className="flex space-x-4 ml-auto">
            <a href="https://linkedin.com/in/yourprofile" className="hover:underline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/yourprofile" className="hover:underline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 bg-[#212121] p-4 rounded">
      <h2 className="text-3xl font-semibold mb-8 text-white">Say Hi.</h2>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Your name"
          className="p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded"
        />
        <textarea
          placeholder="Your project description"
          className="p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-[#212121] hover:bg-[#212121] hover:text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</footer>
<link 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
rel="stylesheet">
</link>
</>
  );
};

export default Footer;
