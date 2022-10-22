export interface BibleBook {
  name : string;
  category : string;
  testament : string;
  chapters : number;
}

export const BookList : BibleBook[] = [
  // The Pentateuch
  {
    name: 'Genesis',
    category: 'The Pentateuch',
    testament: 'Old',
    chapters: 50,
  },
  {
    name: 'Exodus',
    category: 'The Pentateuch',
    testament: 'Old',
    chapters: 40,
  },
  {
    name: 'Leviticus',
    category: 'The Pentateuch',
    testament: 'Old',
    chapters: 27,
  },
  {
    name: 'Numbers',
    category: 'The Pentateuch',
    testament: 'Old',
    chapters: 36,
  },
  {
    name: 'Deuteronomy',
    category: 'The Pentateuch',
    testament: 'Old',
    chapters: 34,
  },
  // OT History, Part 1
  {
    name: 'Joshua',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 24,
  },
  {
    name: 'Judges',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 21,
  },
  {
    name: 'Ruth',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 4,
  },
  {
    name: '1 Samuel',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 31,
  },
  {
    name: '2 Samuel',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 24,
  },
  {
    name: '1 Kings',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 22,
  },
  {
    name: '2 Kings',
    category: 'Old Testament History, part 1',
    testament: 'Old',
    chapters: 25,
  },
  // OT History, Part 2
  {
    name: '1 Chronicles',
    category: 'Old Testament History, part 2',
    testament: 'Old',
    chapters: 29,
  },
  {
    name: '2 Chronicles',
    category: 'Old Testament History, part 2',
    testament: 'Old',
    chapters: 36,
  },
  {
    name: 'Ezra',
    category: 'Old Testament History, part 2',
    testament: 'Old',
    chapters: 10,
  },
  {
    name: 'Nehemiah',
    category: 'Old Testament History, part 2',
    testament: 'Old',
    chapters: 13,
  },
  {
    name: 'Esther',
    category: 'Old Testament History, part 2',
    testament: 'Old',
    chapters: 10,
  },
  {
    name: 'Job',
    category: 'Old Testament History, part 2',
    testament: 'Old',
    chapters: 42,
  },
  // Poetry
  {
    name: 'Psalms',
    category: 'Poetry',
    testament: 'Old',
    chapters: 150,
  },
  {
    name: 'Proverbs',
    category: 'Poetry',
    testament: 'Old',
    chapters: 31,
  },
  {
    name: 'Ecclesiastes',
    category: 'Poetry',
    testament: 'Old',
    chapters: 12,
  },
  // {
  //   name: 'Song of Solomon',
  //   category: 'Poetry',
  //   testament: 'Old',
  //   chapters: 8,
  // },
  // OT Prophets
  {
    name: 'Isaiah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 66,
  },
  {
    name: 'Jeremiah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 52,
  },
  {
    name: 'Lamentations',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 5,
  },
  {
    name: 'Ezekiel',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 48,
  },
  {
    name: 'Daniel',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 12,
  },
  {
    name: 'Hosea',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 14,
  },
  {
    name: 'Joel',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 3,
  },
  {
    name: 'Amos',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 9,
  },
  {
    name: 'Obadiah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 1,
  },
  {
    name: 'Jonah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 4,
  },
  {
    name: 'Micah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 7,
  },
  {
    name: 'Nahum',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 3,
  },
  {
    name: 'Habakkuk',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 4,
  },
  {
    name: 'Zephaniah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 3,
  },
  {
    name: 'Haggai',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 2,
  },
  {
    name: 'Zechariah',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 14,
  },
  {
    name: 'Malachi',
    category: 'Old Testament Prophets',
    testament: 'Old',
    chapters: 4,
  },
  // NT History
  {
    name: 'Matthew',
    category: 'New Testament History',
    testament: 'New',
    chapters: 28,
  },
  {
    name: 'Mark',
    category: 'New Testament History',
    testament: 'New',
    chapters: 16,
  },
  {
    name: 'Luke',
    category: 'New Testament History',
    testament: 'New',
    chapters: 24,
  },
  {
    name: 'John',
    category: 'New Testament History',
    testament: 'New',
    chapters: 21,
  },
  {
    name: 'Acts',
    category: 'New Testament History',
    testament: 'New',
    chapters: 28,
  },
  // New Testament Letters
  {
    name: 'Romans',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 16,
  },
  {
    name: '1 Corinthians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 16,
  },
  {
    name: '2 Corinthians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 13,
  },
  {
    name: 'Galatians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 6,
  },
  {
    name: 'Ephesians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 6,
  },
  {
    name: 'Philippians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 4,
  },
  {
    name: 'Colossians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 4,
  },
  {
    name: '1 Thessalonians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 5,
  },
  {
    name: '2 Thessalonians',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 3,
  },
  {
    name: '1 Timothy',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 6,
  },
  {
    name: '2 Timothy',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 4,
  },
  {
    name: 'Titus',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 3,
  },
  {
    name: 'Philemon',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 1,
  },
  {
    name: 'Hebrews',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 13,
  },
  {
    name: 'James',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 5,
  },
  {
    name: '1 Peter',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 5,
  },
  {
    name: '2 Peter',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 3,
  },
  {
    name: '1 John',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 5,
  },
  {
    name: '2 John',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 1,
  },
  {
    name: '3 John',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 1,
  },
  {
    name: 'Jude',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 1,
  },
  {
    name: 'Revelation',
    category: 'New Testament Letters',
    testament: 'New',
    chapters: 22,
  },

];

