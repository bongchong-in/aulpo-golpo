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