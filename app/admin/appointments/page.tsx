import { Heading } from "@/components";

export default function AdminAppointmentsPage() {
  return (
    <>
      <Heading level={1}>Appointments</Heading>
      <p className="mt-2 text-gray-600">Manage all appointments in a table.</p>
      <div className="mt-6 overflow-x-auto rounded border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-medium">Date</th>
              <th className="px-4 py-2 font-medium">Time</th>
              <th className="px-4 py-2 font-medium">Customer</th>
              <th className="px-4 py-2 font-medium">Service</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2">Sample</td>
              <td className="px-4 py-2">10:00</td>
              <td className="px-4 py-2">John</td>
              <td className="px-4 py-2">Haircut</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
