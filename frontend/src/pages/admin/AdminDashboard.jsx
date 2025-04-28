import { useEffect, lazy, Suspense } from "react";
import { BarChart4, LayoutDashboard, Settings } from "lucide-react";
import { Link } from "react-router-dom";

// Lazy loaded dashboard component
const Analytics = lazy(() => import("../../components/Analytics"));

import { useAnalyticsStore } from "../../stores/useAnalyticsStore";

const AdminDashboard = () => {return(

  <div>AdminDashboard</div>
)
}



export default AdminDashboard;
