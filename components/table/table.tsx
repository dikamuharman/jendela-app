import { FiEye, FiTrash2 } from 'react-icons/fi';

const JTable = () => {
  return (
    <table className="table-auto w-full mt-4">
      <thead className="border-b">
        <tr>
          <th className="text-left py-2 px-2">Name</th>
          <th className="text-left py-2 px-2 w-[120px]">Status</th>
          <th className="text-left py-2 px-2 w-[120px]">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-50">
          <td className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quae
            asperiores minus commodi nihil voluptatibus. Natus!
          </td>
          <td className="p-2">
            <span className="px-6 py-1 rounded-full bg-warning-10">Draft</span>
          </td>
          <td className="p-2">
            <button className="p-3 hover:bg-primary-10 mr-4 rounded-lg transition-colors">
              <FiEye />
            </button>
            <button className="p-3 hover:bg-error-10 rounded-lg transition-colors">
              <FiTrash2 />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default JTable;
