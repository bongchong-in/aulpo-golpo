export interface Story {
  id: string;
  title: string;
  bengaliTitle: string;
  description: string;
  image: string;
  date: string;
  link: string;
  orientation: 'left' | 'right';
}

export interface WidgetItem {
  id: string;
  image?: string;
  text?: string;
  type: 'image' | 'more';
}

export interface Content {
  navbar: { label: string; href: string }[];
  prologue: {
    bengaliTitle: string;
    titlePart1: string;
    titlePart2: string;
    quote: string;
    cta: string;
    heroImage1: { src: string; alt: string; caption: string };
    heroImage2: { src: string; alt: string };
  };
  chapters: Story[];
  liveWall: {
    label: string;
    title: string;
    footer: string;
    comingSoonText: string;
    items: WidgetItem[];
  };
  epilogue: {
    title: string;
    description: string;
    emailLabel: string;
    emailUrl: string;
    instagramLabel: string;
    instagramUrl: string;
    whatsappLabel: string;
    whatsappUrl: string;
    copyright: string;
    bengaliFooter: string;
  };
}
