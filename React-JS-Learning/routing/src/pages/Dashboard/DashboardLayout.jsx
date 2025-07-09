import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-6">
                <h2 className="text-2xl font-bold mb-6 text-green-400">Dashboard</h2>
                <nav className="flex flex-col gap-4">
                    <Link to="/" className="hover:text-green-400">Home</Link>
                    <Link to="/dashboard/orders" className="hover:text-green-400">Orders</Link>
                    <Link to="/dashboard/messages" className="hover:text-green-400">Messages</Link>
                    <Link to="/dashboard/todo" className="hover:text-green-400">Todo</Link>

                </nav>
            </aside>

            {/* Page content */}
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
