const callouts = [
 {
  name: 'Storage',
  description: 'We provide a safe place for your package or goods before it is being shipped to your state location. Our warehouse is very safe with enough security protocols to safe guard your packages.',
  imageSrc: '/010.JPG',
  imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',

 },
 {
  name: 'Logistics',
  description: 'Our logistical solution is the best and helps to put you through in the right direction of which is the best cargo means to use depending on your goods or packages.',
  imageSrc: '/08.JPG',
  imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',

 },
 {
  name: 'Cargo',
  description: 'We have the best cargos that can transport large goods and packages across the world without the risk of being spoilt or damaged.',
  imageSrc: '/09.JPG',
  imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',

 },
 {
  name: 'TRUCKING',
  description: 'Our trucking system provides you with a means whereby you can ship packages locally within our designated location.',
  imageSrc: '/8.jpg',
  imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',

 },
 {
  name: 'Packaging',
  description: 'We make sure that your goods are well packaged before being shipped out to the stated destination.Our packaging method is the best and you need not worry about package spoilage.',
  imageSrc: '/01.jpg',
  imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',

 },
 {
  name: 'WAREHOUSING',
  description: 'We have different warehouse across the world. Our warehousing system is very conducive to keep your package until it is moved out for delivery or available for pickup.',
  imageSrc: '/5.jpg',
  imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',

 },

];

export default function Services() {
 return (
  <div className="bg-gray-100">
   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
     <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>

     <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {callouts.map((callout) => (
       <div key={callout.name} className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
         <img
          src={callout.imageSrc}
          alt={callout.imageAlt}
          className="h-full w-full object-cover object-center"
         />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
         <div>
          <span className="absolute inset-0" />
          {callout.name}
         </div>
        </h3>
        <p className="text-base font-semibold text-gray-900">{callout.description}</p>
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}
