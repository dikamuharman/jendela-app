import JProgramStudiCard from '../../../components/program-studi/card';

export default function Home() {
  return (
    <>
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
    </>
  );
}
