import JProgramStudiCard from '../../components/program-studi/card';

export default function Home() {
  return (
    <>
      <div className="w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-secondary-50 absolute top-0 right-0 rounded-full -z-10 opacity-[.15] blur-2xl" />
      <div className="w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-primary-50 absolute top-[600px] left-0 rounded-full -z-10 opacity-[.15] blur-2xl" />
      <section className="mt-8">
        <h1 className="text-3xl font-medium">Heading</h1>
        <p className="text-netural-50 leading-tight mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
          ante sit amet nisl pulvinar maximus et ac turpis. Fusce non massa
          consequat, rhoncus purus eget, interdum nisl.
        </p>
      </section>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <JProgramStudiCard />
        <JProgramStudiCard />
        <JProgramStudiCard />
        <JProgramStudiCard />
      </section>
      <div className="w-full flex justify-center my-7">
        <button className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded-lg">
          More
        </button>
      </div>
    </>
  );
}
