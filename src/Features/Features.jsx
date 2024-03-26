import { BiSolidPackage, BiSolidTruck } from "react-icons/bi";
import { MdRollerSkating } from "react-icons/md";












const features = [
 {
  name: 'Fast and Reliable.',
  description:
   'We deliver your shipment using the fastest means possible that you can afford.You can trust us and we will not fail you at all.',
  icon: MdRollerSkating,
 },
 {
  name: 'Quick Processing and Tracking.',
  description: 'Our processing methods is the best and you can also track your package as soon as it is on route to your desired location by entering you tracking id.',
  icon: BiSolidTruck,
 },
 {
  name: 'Insurance.',
  description: 'In the case of any unforseen circumstances, we have package insurance on every goods that is on route to its destination.',
  icon: BiSolidPackage,
 },
];

export default function Features() {
 return (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
     <div className="lg:pr-8 lg:pt-4">
      <div className="lg:max-w-lg">
       <h2 className="text-base font-semibold leading-7 text-indigo-600">Deliver faster</h2>
       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
       <p className="mt-6 text-lg leading-8 text-gray-600">
        Experience the convenience of lightning-fast delivery with our service. Say goodbye to long waits and hello to speedy arrivals—because we know your time is valuable. Trust us to get your package where it needs to go, quickly and efficiently.
       </p>
       <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        {features.map((feature) => (
         <div key={feature.name} className="relative pl-9">
          <dt className="inline font-semibold text-gray-900">
           <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
           {feature.name}
          </dt>{' '}
          <dd className="inline">{feature.description}</dd>
         </div>
        ))}
       </dl>
      </div>
     </div>
     <img
      src="about.jpg"
      className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
      width={2432}
      height={1442}
     />
    </div>
   </div>
  </div>
 );
}
