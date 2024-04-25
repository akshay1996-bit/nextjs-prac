import Card from "@/components/card";
import Link from "next/link";

const DefaultLoginComponent = () => {
  return (
    <>
      <Card>Not Allowed! Login to continue
        <Link href='/complex-dashboard'>Back to Login</Link>
      </Card>
      
    </>
  );
};

export default DefaultLoginComponent;
