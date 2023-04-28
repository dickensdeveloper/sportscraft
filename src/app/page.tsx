import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="w-full">
          <div className="grid md:mx-36 mx-5 mt-5 grid-cols-1">

              <div className="grid grid-cols-3" >
                  <div className="col-span-2" >
                      <h1 className="text-3xl font-bold">
                          SportsCraft
                      </h1>
                  </div>

                  <div className="grid max-[1200px]:hidden gap-1 grid-cols-4">
                      <a href='#' className="hover:text-blue-200 hover:underline hover:underline-offset-4 hover:decoration-amber-100">
                          Services
                      </a>
                      <a href='#' className="hover:text-blue-200 hover:underline hover:underline-offset-4 hover:decoration-amber-100">
                          Clients
                      </a>
                      <a href='#' className="hover:text-blue-200 hover:underline hover:underline-offset-4 hover:decoration-amber-100">
                          About
                      </a>
                  </div>
                  <div className="md:hidden grid justify-end justify-items-end">
                      <button type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                          <span className="sr-only">Icon description</span>
                      </button>
                  </div>
              </div>

              <div className="grid  md:grid-cols-2 gap-2 mt-32">

                  <div className="grid justify-items-center content-center">
                      <div className="relative  h-48 w-48 md:h-96 md:w-96">
                          <Image
                              src="/Businessdevelopment.jpg"
                              alt="Logo"
                              layout="fill" // required
                              objectFit="cover" // change as you like
                              // you can use other classes here too
                          />
                      </div>
                  </div>

                  <div className="md:order-first">
                      <h1 className="text-5xl text-blue-200 font-extrabold">
                          BUSINESS DEVELOPMENT
                      </h1>
                      <p className="mt-5">
                          Our team is committed to helping our athlete and corporate clients successfully navigate
                          the many facets of the sports marketing, events and sponsorship industries.
                      </p>
                      <div className="mt-5">
                          <button className="font-bold py-2 px-4 rounded bg-blue-200 text-black">
                              Read more
                          </button>
                          <button className="font-bold ml-2 py-2 px-4 rounded bg-blue-200 text-black">
                              Contact us {">"}
                          </button>
                      </div>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 mt-24">
                  <div className="grid justify-center content-center">
                      <div className="relative  h-48 w-48 md:h-96 md:w-96">
                          <Image
                              src="/Sportsbusinessconsultancy.jpg"
                              alt="Logo"
                              layout="fill" // required
                              objectFit="cover" // change as you like
                              // you can use other classes here too
                          />
                      </div>
                  </div>
                  <div>
                      <h1 className="text-xl mt-5 uppercase font-bold">
                          Sports business consultancy
                      </h1>
                      <p className="mt-5">
                          SportsCraft Business Development consults on behalf of corporations in strategically identifying sports and entertainment marketing, sponsorship, licensing and athlete/entertainer partnership opportunities. We also represent our corporate clients in the negotiation and execution of the contracts and to fulfill sponsorships. We have unique connections and exceptional influence to help build a company’s brand and increase revenues by reaching the desired audience through effective sports and entertainment marketing.
                      </p>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-24">

                  <div>
                      <div className="grid justify-items-center content-center">
                          <div className="relative  h-48 w-48 md:h-96 md:w-96">
                              <Image
                                  src="/Sponsorshipdealflow.jpg"
                                  alt="Logo"
                                  layout="fill" // required
                                  objectFit="cover" // change as you like
                                  // you can use other classes here too
                              />
                          </div>
                      </div>
                  </div>

                  <div className="md:order-first mt-5">
                      <h1 className="text-xl uppercase font-bold">
                          Sponsorship deal flow
                      </h1>
                      <p className="mt-5">
                          SportsCraft Business Development provides assistance in sponsorship procurement for various sports and entertainment entities including, but not limited to, events, television programming, properties, conventions, athletes and entertainers and teams.  We understand the complexities of sponsorship sales and have developed a strategic method using our extensive contact list to effectively sell sponsorship for multi-faceted sports and entertainment properties.
                      </p>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-24">
                  <div className="grid justify-center  content-center">
                      <div className="relative  h-48 w-48 md:h-96 md:w-96">
                          <Image
                              src="/event_management.jpg"
                              alt="Logo"
                              layout="fill" // required
                              objectFit="cover" // change as you like
                              // you can use other classes here too
                          />
                      </div>
                  </div>
                  <div>
                      <h1 className="text-xl uppercase font-bold">
                          Event management
                      </h1>
                      <p className="mt-5">
                          SportsCraft Business Development provides assistance in sponsorship procurement for various sports and entertainment entities including, but not limited to, events, television programming, properties, conventions, athletes and entertainers and teams.  We understand the complexities of sponsorship sales and have developed a strategic method using our extensive contact list to effectively sell sponsorship for multi-faceted sports and entertainment properties.
                      </p>
                  </div>
              </div>

              <div className="grid mt-5">
                  <div className="h-96">
                  </div>

              </div>
          </div>
          <div className="grid h-24 text-black bg-blue-200 justify-items-center content-center">
              <p className="text-xs ">©SportsCraft, 2023</p>
          </div>
      </div>




  )
}
