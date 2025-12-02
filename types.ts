import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface NavItem {
  label: string;
  href: string;
}