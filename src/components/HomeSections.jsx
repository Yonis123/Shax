import React from 'react';
import somali_image_shax from '../assets/png/somali_image_shax.png';
import gameBoard from '../assets/png/game_board.png';

const HomeSections = () => {
  return (
    <section className=" min-h-screen">

      {/* first section */}
      <section className='bg-[#F1F6F1]'>
        <div className="max-w-[1240px] mx-auto px-4 py-8">
          {/* Section for Desktop */}
          <div className="hidden lg:flex justify-between items-start space-x-4">
              <div className='flex'>
                <div className='flex justify-center flex-col items-start'>
                  <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-5xl font-bold mb-4 pl-12">Shax</h2>
                  <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight'>
                  Welcome to the Shax demo! Experience Shax, a centuries-old Somali board game, cherished for generations. In this demo, you can enjoy playing with a friend in person. Stay tuned for the upcoming online version!
                  </p>
                  <div className='flex space-x-4 justify-items-start pl-12 pt-2'>
                    <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
                      Try Demo 
                    </button>
                    <button style={{ fontFamily: 'Roboto, sans-serif' }} className="text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
                      How to Play
                    </button>
                  </div>
                </div>
                <div>
                  <img
                  src={somali_image_shax}
                  alt="Tablet Section 1"
                  className=" w-full h-auto object-cover rounded-md max-w-[500px]"
                  />
                </div>
              </div>
          </div>

          {/* Section for Tablet */}
          <div className="hidden md:flex lg:hidden flex-col space-y-4">
            {/* Image for Tablet Section 1 */}
            <div className="flex justify-center">
              <img
                src={somali_image_shax}
                alt="Tablet Section 1"
                className=" w-full h-auto object-cover rounded-md max-w-[500px]"
              />
            </div>

            {/* Tablet Section 2 */}
            <div className="">
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-5xl font-bold mb-4 pl-12">Shax</h2>
              <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight'>
              Welcome to the Shax demo! Experience Shax, a centuries-old Somali board game, cherished for generations. In this demo, you can enjoy playing with a friend in person. Stay tuned for the upcoming online version!
              </p>
            </div>

            {/* Tablet Buttons */}
            <div className='flex space-x-4 justify-items-start pl-12'>
              <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
                Try Demo
              </button>
              <button style={{ fontFamily: 'Roboto, sans-serif' }} className="text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
                How to Play
              </button>
            </div>
          </div>

          {/* Section for Mobile */}
          <div className="flex flex-col md:hidden space-y-4">
            {/* Image for Mobile Section 1 */}
            <div className="flex justify-center">
              <img
                src={somali_image_shax}
                alt="Mobile Section 1"
                className=" w-full h-auto object-cover rounded-md max-w-[500px]"
              />
            </div>

            {/* Mobile Section 2 */}
            <div className="">
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-5xl font-bold mb-4 pl-12">Shax</h2>
              <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight'>
              Welcome to the Shax demo! Experience Shax, a centuries-old Somali board game, cherished for generations. In this demo, you can enjoy playing with a friend in person. Stay tuned for the upcoming online version!
              </p>
            </div>

            {/* Mobile Buttons */}
            <div className='flex space-x-4 justify-items-start pl-12'>
              <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
                Try Demo 
              </button>
              <button style={{ fontFamily: 'Roboto, sans-serif' }} className="text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
                How to Play
              </button>
            </div>
          </div>
        </div>
      </section>







      {/* second section */}
      <section>
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        {/* Section for Desktop */}
        <div className="hidden lg:flex justify-between items-start space-x-4">
        <div className="">
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl font-semibold mb-4 text-center">How To Play</h2>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
            <a className='text-lg text-black font-bold'>Objective</a>: The goal of Shax is to remove your opponent’s pieces from the board by forming "jare" (three pieces in a row). The game has two phases: placing pieces and moving them strategically.
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
            <a className=' text-lg text-black font-bold'>Phase 1: Placing pieces</a>: 
            <ol className='flex flex-col '>
              <li className='pt-4'>1. Each player has 12 pieces.</li>
              <li className='pt-4'>2. Players take turns placing one piece at a time on any corner or intersection of the board.</li>
              <li className='pt-4'>3. While placing pieces, aim to get three pieces in a row (this is called a "jare").</li>
              <li className='pt-4'>4. Be strategic! Don't make a jare at the cost of poor placement for future moves.</li>
              <li className='pt-4'>5. The first player to make a jare gets to start phase 2 giving them an advantage</li>
              <li className='pt-4'>6. Both players continue placing all 12 pieces on the board.</li>
            </ol>
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
            <a className=' text-lg text-black font-bold'>Phase 2: Moving pieces</a>: 
            <ol className='flex flex-col '>
              <li className='pt-4'>1. Once all pieces are placed, the player who made the first jare moves first. If no jare was made, the second player moves first.</li>
              <li className='pt-4'>2. On your turn, move one of your pieces to any adjacent empty space.</li>
              <li className='pt-4'>3. Each time you form a new jare (three in a row), you can remove one of your opponent's pieces from anywhere on the board.</li>
              <li className='pt-4'>4. Continue to move pieces, trying to create new jare and remove your opponent’s pieces.</li>
              <li className='pt-4'>5. If a player is trapped with no legal moves, they may request a "jid i sii aan jar aheyn" (Help without jare). The other player must open a space without creating a jare in that move.</li>
              <li className='pt-4'>6. The game continues until one player has only two pieces left, meaning they can no longer form a jare, and they lose.</li>
            </ol>
            </p>
            <div className='pt-2 flex space-x-4 justify-items-start pl-12'>
            <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
              <a href='https://mogadishuimages.wordpress.com/wp-content/uploads/2016/05/an-introduction-to-shax-a-somali-game2.pdf' > Learn More </a>
            </button>
            <button style={{ fontFamily: 'Roboto, sans-serif' }} className="text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
              Try Demo Now!
            </button>
          </div>

          </div>
          
        </div>

        {/* Section for Tablet */}
        <div className="hidden md:flex lg:hidden flex-col space-y-4">
          <div className="">
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl font-semibold mb-4 text-center">How To Play</h2>
              <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
              <a className='text-lg text-black font-bold'>Objective</a>: The goal of Shax is to remove your opponent’s pieces from the board by forming "jare" (three pieces in a row). The game has two phases: placing pieces and moving them strategically.
              </p>
              <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
              <a className=' text-lg text-black font-bold'>Phase 1: Placing pieces</a>: 
              <ol className='flex flex-col '>
                <li className='pt-4'>1. Each player has 12 pieces.</li>
                <li className='pt-4'>2. Players take turns placing one piece at a time on any corner or intersection of the board.</li>
                <li className='pt-4'>3. While placing pieces, aim to get three pieces in a row (this is called a "jare").</li>
                <li className='pt-4'>4. Be strategic! Don't make a jare at the cost of poor placement for future moves.</li>
                <li className='pt-4'>5. The first player to make a jare gets to start phase 2 giving them an advantage</li>
                <li className='pt-4'>6. Both players continue placing all 12 pieces on the board.</li>
              </ol>
              </p>
              <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
              <a className=' text-lg text-black font-bold'>Phase 2: Moving pieces</a>: 
              <ol className='flex flex-col '>
                <li className='pt-4'>1. Once all pieces are placed, the player who made the first jare moves first. If no jare was made, the second player moves first.</li>
                <li className='pt-4'>2. On your turn, move one of your pieces to any adjacent empty space.</li>
                <li className='pt-4'>3. Each time you form a new jare (three in a row), you can remove one of your opponent's pieces from anywhere on the board.</li>
                <li className='pt-4'>4. Continue to move pieces, trying to create new jare and remove your opponent’s pieces.</li>
                <li className='pt-4'>5. If a player is trapped with no legal moves, they may request a "jid i sii aan jar aheyn" (Help without jare). The other player must open a space without creating a jare in that move.</li>
                <li className='pt-4'>6. The game continues until one player has only two pieces left, meaning they can no longer form a jare, and they lose.</li>
              </ol>
              </p>

            </div>
            <div className='flex space-x-4 justify-items-start pl-12'>
              <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
                <a href='https://mogadishuimages.wordpress.com/wp-content/uploads/2016/05/an-introduction-to-shax-a-somali-game2.pdf' > Learn More </a>
              </button>
              {/* <button style={{ fontFamily: 'Roboto, sans-serif' }} className="text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
                Discover
              </button> */}
            </div>
        </div>

        {/* Section for Mobile */}
        <div className="flex flex-col md:hidden space-y-4">
          <div className="">
            <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-4xl font-semibold mb-4 text-center">How To Play</h2>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
            <a className='text-lg text-black font-bold'>Objective</a>: The goal of Shax is to remove your opponent’s pieces from the board by forming "jare" (three pieces in a row). The game has two phases: placing pieces and moving them strategically.
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
            <a className=' text-lg text-black font-bold'>Phase 1: Placing pieces</a>: 
            <ol className='flex flex-col '>
              <li className='pt-4'>1. Each player has 12 pieces.</li>
              <li className='pt-4'>2. Players take turns placing one piece at a time on any corner or intersection of the board.</li>
              <li className='pt-4'>3. While placing pieces, aim to get three pieces in a row (this is called a "jare").</li>
              <li className='pt-4'>4. Be strategic! Don't make a jare at the cost of poor placement for future moves.</li>
              <li className='pt-4'>5. The first player to make a jare gets to start phase 2 giving them an advantage</li>
              <li className='pt-4'>6. Both players continue placing all 12 pieces on the board.</li>
            </ol>
            </p>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight text-center'>
            <a className=' text-lg text-black font-bold'>Phase 2: Moving pieces</a>: 
            <ol className='flex flex-col '>
              <li className='pt-4'>1. Once all pieces are placed, the player who made the first jare moves first. If no jare was made, the second player moves first.</li>
              <li className='pt-4'>2. On your turn, move one of your pieces to any adjacent empty space.</li>
              <li className='pt-4'>3. Each time you form a new jare (three in a row), you can remove one of your opponent's pieces from anywhere on the board.</li>
              <li className='pt-4'>4. Continue to move pieces, trying to create new jare and remove your opponent’s pieces.</li>
              <li className='pt-4'>5. If a player is trapped with no legal moves, they may request a "jid i sii aan jar aheyn" (Help without jare). The other player must open a space without creating a jare in that move.</li>
              <li className='pt-4'>6. The game continues until one player has only two pieces left, meaning they can no longer form a jare, and they lose.</li>
            </ol>
            </p>

          </div>
          <div className='flex space-x-4 justify-items-start pl-12'>
            <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
              <a href='https://mogadishuimages.wordpress.com/wp-content/uploads/2016/05/an-introduction-to-shax-a-somali-game2.pdf' > Learn More </a>
            </button>
            {/* <button style={{ fontFamily: 'Roboto, sans-serif' }} className="text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
              Discover
            </button> */}
          </div>
        </div>
      </div>
      </section>
    </section>
    
  );
};

export default HomeSections;