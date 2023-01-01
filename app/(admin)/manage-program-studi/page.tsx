import Link from 'next/link';
import JAsideDashboard from '../../../components/aside-dashboard/aside-dashboard';
import JTable from '../../../components/table/table';

const ProgramStudiPage = () => {
  return (
    <>
      <main className="col-start-4 col-end-9 ">
        <header className="mt-10 mb-7">
          <h1 className="text-4xl">Program studi</h1>
          <div className="flex items-center gap-4 mt-5">
            <Link
              href="/"
              className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded"
            >
              Program studi
            </Link>
            <Link href="/" className="underline">
              Suggest
            </Link>
          </div>
        </header>
        <section className="bg-white rounded-xl p-8 shadow">
          <h2 className="text-2xl font-medium text-netural-90">
            Table heading
          </h2>
          <p className="text-netural-50">Description table</p>
          <JTable />
        </section>
      </main>
      <JAsideDashboard />
    </>
  );
};

export default ProgramStudiPage;
