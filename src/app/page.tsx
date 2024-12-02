import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello
      
      <Button asChild className="text-white">
        <Link href={'/create-merchant'}>Go to create Merchant</Link>
      </Button>
    </div>
  );
}
