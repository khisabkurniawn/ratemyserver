import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <div className="space-y-4 font-sans">
        <div className="rounded-full bg-gray-900 px-6 py-1 text-center text-xs font-bold text-white shadow">
          Verified. Tracked. Ranked.
        </div>
        <div className="mx-auto max-w-3/4 text-center text-8xl font-bold text-gray-900">
          Discover the Best Game Servers
        </div>
        <div className="flex flex-row justify-center space-x-4 text-sm font-semibold">
          <div className="rounded-full border bg-gray-900 px-6 py-1 text-white">
            Explore Servers
          </div>
          <div className="rounded-full border bg-white px-6 py-1 text-gray-900">
            Submit Your Server
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="text-center text-sm text-gray-500">
          <div>Used by 1000+ servers globally</div>
          <div>Built with transparency and performance in mind</div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 border">
          <div>🔥 Trending Today</div>
          <Table>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>📊 Weekly Top Servers</div>
          <Table>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>🏆 All-Time Favorites</div>
          <Table>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>🚀 Coming Soon Servers</div>
          <Table>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-2 border">Sidebar</div>
      </div>
    </div>
  );
}
