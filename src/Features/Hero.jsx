import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Form, useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { BiMapPin } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { useUser } from './authentication/useUser';

const navigation = [
  { name: 'Product' },
  { name: 'Features' },
  { name: 'Marketplace' },
  { name: 'Company' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  const submit = data => {
    navigate(`/${data.trackingCode}`);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className=' font-bold tracking-widest text-2xl text-indigo-900 font-serif'>P.M.S</p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>


        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className=' font-bold tracking-widest text-2xl text-indigo-900 font-serif'>P.M.S</p>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <Cross1Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}

                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                  <div
                    onClick={() => navigate('/dashboard')}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {isAuthenticated && 'Dashboard'}
                  </div>
                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2">

          <div className="">
            <img src="/hero.png" alt="" />
          </div>
          <div className="">
            <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
              <div className="mb-8 flex justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{' '}

                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Prime Movers Services
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We’re a global company that values diversity, ambition and a collaborative can-do attitude. And that offers you all the support you need to make your career as rewarding as possible.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Form onSubmit={handleSubmit(submit)}>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm"><BiMapPin /></span>
                      </div>
                      <input
                        required
                        {...register('trackingCode', {
                          required: 'This field is required'
                        })}
                        id="trackingCode"
                        className="block w-[30rem] px-10 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Tracking code"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                          Track
                        </label>
                        <Button
                          type='submit'
                          className="h-full border-0 outline-none bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          Track
                        </Button>
                      </div>
                    </div>

                  </Form>
                </div>

              </div>
            </div>


            <div className="pb-32 pt-10 text-slate-500 grid grid-cols-2 lg:grid-cols-4 gap-y-20">
              <div className=" grid place-content-center gap-3">
                <p className=' text-center font-bold text-2xl'>30200</p>
                <div className=' h-1 bg-indigo-500 rounded-full'></div>
                <p className=' text-xs text-center'>Clients</p>
              </div>
              <div className=" grid place-content-center gap-3">
                <p className=' text-center font-bold text-2xl'>521</p>
                <div className=' h-1 bg-indigo-500 rounded-full'></div>
                <p className=' text-xs text-center'>Projects</p>
              </div>
              <div className=" grid place-content-center gap-3">
                <p className=' text-center font-bold text-2xl'>1453</p>
                <div className=' h-1 bg-indigo-500 rounded-full'></div>
                <p className=' text-xs text-center'>Support</p>
              </div>
              <div className=" grid place-content-center gap-3">
                <p className=' text-center font-bold text-2xl'>5000</p>
                <div className=' h-1 bg-indigo-500 rounded-full'></div>
                <p className=' text-xs text-center'>Workers</p>
              </div>

            </div>

          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
