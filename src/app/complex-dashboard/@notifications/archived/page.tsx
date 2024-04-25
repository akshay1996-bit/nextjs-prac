import Card from "@/components/card";
import Link from "next/link";
const ArchivedNotificationsComponent = () => {
    /**
     * This is a sub navigation route inside a slot
     * if we go to /complex-dashbioard/archived and reload the page'
     * it returns 404 error, the nextjs searches for archived in other slots as well
     * so it is required to have default.tsx in other slots and in parent folder.
     * Default.tsx acts as a fallback, which is shown when the route is not found
     */
  return (
    <Card>
      Archived Notifications
      <Link href="/complex-dashboard">Prev</Link>
    </Card>
  );
};

export default ArchivedNotificationsComponent;
