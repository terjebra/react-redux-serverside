export interface State<T> {
  items: Array<T>;
  isFetching: boolean;
  currentItem: T;
}