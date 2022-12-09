// "links": {
//     "next": null,
//     "previous": null
// },
// "count": 2,
// "page_size": 9,
// "num_pages": 1,
// "current_page": 1,
// "countItemsOnPage": 2,
// "results":

interface ILinkPagination {
  next: null | string;
  previous: null | string;
}

export interface IMeta {
  links: ILinkPagination;
  count: number;
  page_size: number;
  num_pages: number;
  current_page: number;
  countItemsOnPage: number;
}
