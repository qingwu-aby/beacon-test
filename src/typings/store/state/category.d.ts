declare namespace Category {
  interface ICategoryItem {
    id: number;
    logo?: string;
    name: string;
    preId: number;
    seq: number;
    status: number;
    createTime: string;
  }

  interface ICategory {
    list: ICategoryItem[];
    loading: boolean;
  }
}