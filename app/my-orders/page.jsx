import { orders } from "@/assets/data";

export default function MyOrders() {
  return (
    <div className="p-10 max-w-4xl mx-auto min-h-screen bg-gray-50" dir="ltr">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-black text-gray-900">Order History</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage and track your previous purchases
        </p>
      </div>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border">
            <p className="text-gray-400 font-medium">No orders found yet.</p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-100 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-left space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Order ID
                  </span>
                  <p className="font-black text-gray-800">#{order.id}</p>
                </div>
                <p className="text-xs text-gray-400">Date: {order.date}</p>
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  Items:{" "}
                  <span className="text-gray-400">
                    {order.items.join(", ")}
                  </span>
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-left md:text-right w-full md:w-auto flex md:flex-col justify-between items-center md:items-end border-t md:border-0 pt-4 md:pt-0">
                <p className="text-orange-600 font-black text-xl">
                  ${order.total}
                </p>
                <span className="bg-green-50 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full border border-green-100 uppercase tracking-tighter">
                  {order.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
