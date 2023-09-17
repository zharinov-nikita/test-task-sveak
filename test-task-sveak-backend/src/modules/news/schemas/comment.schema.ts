export class CommentSchema {
  id: number;
  readonly by?: string;
  readonly parent?: number;
  readonly text?: string;
  readonly time?: number;
  readonly type?: string;
  readonly kids?: number[];
}
