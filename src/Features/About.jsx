const links = [
 { name: 'Core Value', description: 'We’re committed to innovating. Practicing inclusion. Delivering more sustainable solutions. And improving all the time. See how we put these commitments into practice.' },
 { name: 'Our Vision', description: 'To be the best logistics solutions provider for e-commerce industry in the entire world at large.' },
 { name: 'Mission', description: 'We are dedicated in providing the best delivery services and improving the customer services of good carriage from one country to another.' },

];
const stats = [
 { name: 'Offices worldwide', value: '12' },
 { name: 'Full-time colleagues', value: '300+' },
 { name: 'Hours per week', value: '40' },
 { name: 'Paid time off', value: 'Unlimited' },
];

export default function About() {
 return (
  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
   <img
    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    alt=""
    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
   />
   <div
    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    aria-hidden="true"
   >
    <div
     className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
     style={{
      clipPath:
       'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
     }}
    />
   </div>
   <div
    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    aria-hidden="true"
   >
    <div
     className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
     style={{
      clipPath:
       'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
     }}
    />
   </div>
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
     <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
     <p className="mt-6 text-lg leading-8 text-gray-300">
      We’re a global company that values diversity, ambition and a collaborative can-do attitude. And that offers you all the support you need to make your career as rewarding as possible.
     </p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
     <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
      {links.map((link) => (
       <span key={link.name}>
        {link.name}: <span aria-hidden="true" className=" font-normal">{link.description}</span>
       </span>
      ))}
     </div>
     <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
       <div key={stat.name} className="flex flex-col-reverse">
        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
       </div>
      ))}
     </dl>
    </div>
   </div>
  </div>
 );
}
