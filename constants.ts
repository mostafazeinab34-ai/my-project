
import type { LessonCategory } from './types';

export const LESSON_CATEGORIES: LessonCategory[] = [
  {
    title: "الأساسيات",
    topics: [
      { id: "introduction-to-css", title: "مقدمة إلى CSS" },
      { id: "css-syntax", title: "بنية CSS" },
      { id: "how-to-add-css", title: "طرق إضافة CSS" },
    ],
  },
  {
    title: "المحددات (Selectors)",
    topics: [
      { id: "simple-selectors", title: "المحددات البسيطة" },
      { id: "combinator-selectors", title: "محددات التجميع" },
      { id: "pseudo-class-selectors", title: "محددات الأصناف الزائفة" },
      { id: "pseudo-element-selectors", title: "محددات العناصر الزائفة" },
    ],
  },
  {
    title: "الألوان والخلفيات",
    topics: [
      { id: "colors", title: "الألوان" },
      { id: "backgrounds", title: "الخلفيات" },
      { id: "gradients", title: "التدرجات اللونية" },
    ],
  },
  {
    title: "النصوص والخطوط",
    topics: [
      { id: "text-styling", title: "تنسيق النصوص" },
      { id: "fonts", title: "الخطوط" },
      { id: "google-fonts", title: "استخدام Google Fonts" },
    ],
  },
  {
    title: "نموذج الصندوق (Box Model)",
    topics: [
      { id: "box-model-intro", title: "مقدمة لنموذج الصندوق" },
      { id: "padding", title: "الهامش الداخلي (Padding)" },
      { id: "margin", title: "الهامش الخارجي (Margin)" },
      { id: "border", title: "الحدود (Border)" },
      { id: "box-sizing", title: "خاصية box-sizing" },
    ],
  },
  {
    title: "Flexbox",
    topics: [
      { id: "flexbox-intro", title: "مقدمة إلى Flexbox" },
      { id: "flex-container", title: "خصائص الحاوية (Container)" },
      { id: "flex-items", title: "خصائص العناصر (Items)" },
    ],
  },
  {
    title: "Grid",
    topics: [
      { id: "grid-intro", title: "مقدمة إلى Grid" },
      { id: "grid-container", title: "خصائص حاوية Grid" },
      { id: "grid-items", title: "خصائص عناصر Grid" },
    ],
  },
  {
    title: "التحويلات والانتقالات والأنيميشن",
    topics: [
      { id: "transforms", title: "التحويلات (Transforms)" },
      { id: "transitions", title: "الانتقالات (Transitions)" },
      { id: "animations", title: "الحركات (Animations)" },
    ],
  },
];
