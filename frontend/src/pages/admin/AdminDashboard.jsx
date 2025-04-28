import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      AdminDashboard
      <Link to="/admin/management" className="btn btn-primary">
        <Settings className="mr-2" size={18} />
        Management Section
      </Link>
    </div>
  );
};

export default AdminDashboard;
