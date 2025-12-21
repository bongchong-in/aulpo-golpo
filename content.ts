import { Story, WidgetItem } from './types';

const content = {
  navbar: [
    { label: "START", href: "#prologue" },
    { label: "STORIES", href: "#chapters" },
    { label: "CONTACT", href: "#epilogue" }
  ],
  prologue: {
    bengaliTitle: "অল্প গল্প",
    titlePart1: "Aulpo",
    titlePart2: "Golpo",
    quote: "Journaling life as it unfolds,\n one quiet story at a time.",
    cta: "Open the Journal",
    heroImage1: {
      src: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/1.jpg",
      alt: "Journal entry winter",
      caption: "winter memories..."
    },
    heroImage2: {
      src: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/2.jpg",
      alt: "Textured memories"
    }
  },
  chapters: [
    {
      id: "1",
      title: "Mountain Whispers",
      bengaliTitle: "ভ্রমণ ডায়েরি",
      description: "There is a silence in the mountains that feels louder than the city's noise. Walking through the snow, I found pieces of myself I didn't know were missing.",
      image: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/3.jpg",
      date: "December, 2024",
      link: "https://instagram.com/aulpo_golpo",
      orientation: "left"
    },
    {
      id: "2",
      title: "Threads of Heritage",
      bengaliTitle: "ঐতিহ্য",
      description: "Wearing a saree isn't just about the fabric; it's about carrying a legacy. Every fold tells a story of the weavers, the mothers, and the history we wear.",
      image: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/4.jpg",
      date: "The colors of home",
      link: "https://instagram.com/aulpo_golpo",
      orientation: "right"
    }
  ] as Story[],
  liveWall: {
    label: "Happening Now",
    title: "Latest From The Journal",
    footer: "Powered by Instagram Feed",
    comingSoonText: "More stories coming soon...",
    items: [
      { id: "1", type: "image", image: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/5.jpg" },
      { id: "2", type: "image", image: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/6.jpg" },
      { id: "3", type: "image", image: "https://raw.githubusercontent.com/bongchong-in/aulpo-golpo/refs/heads/main/images/7.jpg" },
      { id: "4", type: "more" }
    ] as WidgetItem[]
  },
  epilogue: {
    title: "Let's write the next chapter.",
    description: "Interested in collaborations or just want to say hello? \nI'm always looking for new stories to tell.",
    emailLabel: "Email Me",
    emailUrl: "mailto:c.shreoshree@gmail.com",
    instagramLabel: "Instagram",
    instagramUrl: "https://instagram.com/aulpo_golpo",
    whatsappLabel: "WhatsApp",
    whatsappUrl: "https://wa.me/7982813208",
    copyright: "© 2025 Aulpo Golpo. All rights reserved.",
    bengaliFooter: "ছোট গল্প, বড় স্মৃতি"
  }
};

export default content;
