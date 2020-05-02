export interface Menu {
  title: string;
  listItems: Items [];
}

export interface Items {
  icon: string;
  description: string;
  code: number;
}