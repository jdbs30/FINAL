export type ProjectId = 'documents' | 'inventory' | 'sign-language' | 'dental';
export type Project = {
  category: string;
  filter: 'web' | 'vision';
  title: string;
  intro: string;
  details: string[];
  tags: string[];
  sourceUrl?: string;
};

export const projects: Record<ProjectId, Project> = {
  documents: {
    category: 'WEB APPLICATION',
    filter: 'web',
    title: 'Document Management System',
    intro: 'One connected workspace for document approvals, part and drawing registries, and project checklists.',
    details: [
      'Developed document submission, reservation, revision, and approval interfaces with role-based actions, approval templates, status tracking, and notifications.',
      'Implemented searchable tables with pagination, sorting, and level-based grouping. Persisted filters and expanded sections using Zustand.',
      'Integrated authenticated PDF viewing, file uploads, and administration tools for approvers, originators, and internal and external documents.',
      'Built the part and drawing registry within the document management system, including assignment, category grouping, revision and lifecycle fields, and links to drawings and bills of materials.',
      'Implemented project checklists for manual uploads and links to existing technical files, with internal and external document handling.',
    ],
    tags: ['Next.js', 'React', 'Chakra UI', 'Strapi', 'Zustand'],
  },
  inventory: {
    category: 'WEB APPLICATION',
    filter: 'web',
    title: 'Inventory Dispatch & Label Printing',
    intro: 'A connected workflow for scanning barcodes, entering quantities, dispatching inventory, and printing labels.',
    details: [
      'Built camera and USB barcode scanning workflows with scan debouncing and quantity entry.',
      'Integrated JWT-authenticated dispatch requests through REST APIs.',
      'Created TSPL label generation and QZ Tray integration for the Clabel CT321D printer.',
    ],
    tags: ['React', 'REST APIs', 'Html5Qrcode', 'QZ Tray', 'JWT', 'TSPL'],
  },
  'sign-language': {
    category: 'COMPUTER VISION / WEB APPLICATION',
    filter: 'vision',
    title: 'Sign Language to Text',
    intro: 'Real-time hand gesture recognition that turns signed letters and gestures into written text.',
    details: [
      'Built a Next.js and TypeScript web application with MediaPipe hand landmark tracking and TensorFlow.js model inference.',
      'Implemented separate alphabet and gesture recognition modes. Alphabet mode assembles letters into words; gesture mode adds recognized labels to the sentence.',
      'Added two-second hold confirmation with visual progress indicators, plus a NEXT gesture to commit a completed word to the sentence.',
      'Created text editing controls, camera flipping, and a debug view for inspecting recognition behavior.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MediaPipe', 'TensorFlow.js'],
    sourceUrl: 'https://github.com/jdbs30/sign-to-text-web-app',
  },
  dental: {
    category: 'UNDERGRADUATE THESIS / COMPUTER VISION',
    filter: 'vision',
    title: 'Dental Anomaly Detection',
    intro: 'An undergraduate thesis prototype exploring dental anomaly detection with embedded computer vision.',
    details: [
      'Developed a prototype for detecting impacted wisdom teeth, odontoma, and radicular cysts using YOLOv8.',
      'Built around a Raspberry Pi 4 and a 7-inch touchscreen.',
    ],
    tags: ['YOLOv8', 'Raspberry Pi 4', '7-inch touchscreen', 'Prototype'],
  },
};
