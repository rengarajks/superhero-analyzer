import React from 'react'
import '../App.css'

function HeroInput() {
  return (
    <div className='w-[100vh] p-8 backdrop-blur-sm bg-blue-950/50 rounded-md'>
      
    <div>
      
      <input type="text" id="first_name" placeholder='Your name' class="bg-gray-700 font-bold border  text-sm rounded-lg custom-focus block w-full p-2.5 dark:focus:border-blue-500 dark:border-gray-600 "/>
    </div>

  {/* Gender */}
    <div className='flex gap-4 my-4'>
    <div class="flex items-center ">
        <input id="default-radio-1" type="radio" value="m" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
    </div>

    <div class="flex items-center">
        <input id="default-radio-1" type="radio" value="m" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
    </div>
    </div>

    <div className='my-4'>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Have you faced any significant challenges or tragedies in your life?</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
    </select>
    </div>

    <div className='my-4'>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Are you interested in...</option>
        <option value="1">technology</option>
        <option value="2">social service</option>
        <option value="3">nothing</option>
    </select>
    </div>

    <div className='my-4'>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Do you believe in...</option>
        <option value="1">strict rules</option>
        <option value="2">flexible guidelines</option>
    </select>
    </div>

    <div className='my-4'>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>How important is family and friendship to you?</option>
        <option value="1">I can do whatever to save them</option>
        <option value="2">Duty is important</option>
    </select>
    </div>

    <div className='my-4'>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>How do you view the concept of good and evil?</option>
        <option value="1">I see the world as a battleground between forces of good and evil. People play a role in this struggle, and their actions contribute to one side or the other</option>
        <option value="2">I think good and evil are inherent aspects of human nature, influenced by both biological and psychological factors.</option>
    </select>
    </div>


    <div className='my-4'>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg custom-focus focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>What motivates you the most?</option>
        <option value="1">justice</option>
        <option value="2">knowledge</option>
        <option value="1">power</option>
        <option value="2">love</option>
    </select>
    </div>



         



      <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Analyze</button>
    </div>
  )
}

export default HeroInput