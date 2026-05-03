export class Repos {
  constructor(
    public name: string,
    public avatarUrl: string,
    public description: string,
    public url: string,
    public language: string,
    public stars: number,
    public forks: number,
    public updatedAt: string
  ) {}
}
