import FAQItem from '../components/FAQItem';

const FAQList = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-8 gap-4'>
        <h2 className='text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto'>
          Frequently Asked Questions
        </h2>
        <div className='flex items-center space-x-4'>
          <button className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-ponter'>

          </button>
        </div>
      </div>
      <FAQItem />
    </div>
  )
}

export default FAQList