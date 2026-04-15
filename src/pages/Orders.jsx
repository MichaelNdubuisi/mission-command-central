import { Package, Truck, Clock, CheckCircle, Calendar, ChevronRight } from "lucide-react";

const mockOrders = [
  {
    id: "#ORD-001",
    item: "M4A1 Carbine (2 units)",
    date: "2024-01-15",
    status: "delivered",
    tracking: "USPS-123456789",
  },
  {
    id: "#ORD-002",
    item: "ACH Combat Helmet",
    date: "2024-01-12",
    status: "in transit",
    tracking: "USPS-987654321",
  },
  {
    id: "#ORD-003",
    item: "M9A3 Pistol",
    date: "2024-01-10",
    status: "pending approval",
    tracking: "-",
  },
];

const statusIcon = {
  delivered: CheckCircle,
  "in transit": Truck,
  "pending approval": Clock,
};

const OrdersSection = () => {
  return (
    <section className="min-h-screen p-6 sm:p-8 lg:p-10 text-white">
      <div className="flex items-start gap-4 mb-10">
        <div className="mt-1 h-10 w-1 bg-[#f0c400]" />
        <div>
          <h2 className="text-3xl font-black uppercase tracking-wider text-[#f3f0e8]">
            My Orders
          </h2>
          <p className="mt-2 text-sm text-[#9ea293]">
            Track your equipment requisitions and delivery status.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => {
          const Icon = statusIcon[order.status];
          return (
            <div key={order.id} className="group flex items-center gap-4 p-6 rounded-lg border border-[#2a3526] bg-gradient-to-r from-[#162317] to-[#111c12] hover:border-[#f0c400] hover:shadow-lg transition-all duration-200">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#2b2705]/30 flex items-center justify-center">
                <Package size={24} className="text-[#f0c400]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#f0c400]">{order.id}</span>
                  <Icon size={16} className={`text-xs ${order.status === 'delivered' ? 'text-[#00df66]' : order.status === 'in transit' ? 'text-[#f0c400]' : 'text-[#dccb78]'}`} />
                  <span className="text-xs capitalize text-[#9ea293]">{order.status}</span>
                </div>
                <h3 className="text-lg font-bold truncate text-[#f5f2e9]">{order.item}</h3>
                <p className="text-sm text-[#9ea293]">Ordered: {order.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-[#9ea293] mb-1">Tracking:</p>
                <span className="font-mono text-sm text-[#f0c400]">{order.tracking}</span>
              </div>
              <ChevronRight size={20} className="text-[#9ea293] group-hover:text-[#f0c400] transition-colors ml-auto flex-shrink-0" />
            </div>
          );
        })}
      </div>

      {mockOrders.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-64 text-center">
          <Package size={64} className="text-[#8e927f] mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-wide mb-4 text-[#d7d4c8]">
            No Orders Found
          </h3>
          <p className="text-lg text-[#9ea293] max-w-md">
            Your recent equipment requisitions will appear here.
          </p>
        </div>
      )}
    </section>
  );
};

export default OrdersSection;

