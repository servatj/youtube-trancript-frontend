import Pricing from "@/components/Pricing";
import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <Pricing />
    </div>
  );
}
