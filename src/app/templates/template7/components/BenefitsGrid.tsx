import { Globe2, HeartPulse, Laptop, Sparkles } from "lucide-react";
import BenefitCard from "./BenefitCard";
const icons = [Laptop, Sparkles, HeartPulse, Globe2];

interface BenefitsGridProps {
  benefits: { benefitTitle: string; benefitDetail: string; benefitNote: string }[];
}

export default function BenefitsGrid({ benefits }: BenefitsGridProps) { return <section className="mx-auto w-full max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-6"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit, index) => <BenefitCard key={benefit.benefitTitle} icon={icons[index] ?? Sparkles} title={benefit.benefitTitle} detail={benefit.benefitDetail} note={benefit.benefitNote} />)}</div></section>; }
