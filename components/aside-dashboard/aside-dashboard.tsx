'use client';
import { FiCheck, FiTrash2 } from 'react-icons/fi';

const JAsideDashboard = () => {
  return (
    <aside className="col-start-9 col-end-13 bg-white p-9">
      <span className=" text-netural-40">Detail</span>
      <h2 className="text-3xl mb-6">Nama program studi</h2>
      <span className=" text-netural-40 mb-2 block">Description</span>
      <p className="mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut repellendus
        temporibus tempore ipsa vero fuga delectus nulla fugiat ratione
        asperiores!
      </p>
      <hr className="mb-5" />
      <h3 className="text-netural-40 ">Masukan program studi</h3>
      <div className="flex flex-col">
        <div className="p-4 border rounded-lg flex-col my-4">
          <h4 className="font-medium">Suggestion</h4>
          <span className="text-sm text-netural-40 block mb-1">userxxx</span>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nesciunt consequatur eaque vero, tempore
          </p>
          <div className="flex items-center justify-end gap-2">
            <button className="flex items-center bg-success-10 rounded-full">
              <div className="bg-success-50 p-2 rounded-full">
                <FiCheck color="#ffffff" size={20} />
              </div>
              <span className="pr-6 pl-3 block">Sudah dibaca</span>
            </button>
            <button className="p-2 bg-error-50 rounded-full">
              <FiTrash2 color="#ffffff" size={20} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default JAsideDashboard;
