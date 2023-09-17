export class NewsSchema {
  readonly id: number;
  readonly by?: string;
  readonly descendants?: number;
  readonly kids?: number[];
  readonly score?: number;
  readonly time?: number;
  readonly title?: string;
  readonly type?: string;
  readonly url?: string;
}
