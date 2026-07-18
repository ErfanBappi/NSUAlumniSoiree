/**
 * Types and interfaces for the NSU Alumni Soirée 2026 website
 */

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface AttendReason {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SponsorItem {
  name: string;
  category: string;
  logo: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface EventInfoCard {
  title: string;
  value: string;
  subValue: string;
  iconName: string;
}
