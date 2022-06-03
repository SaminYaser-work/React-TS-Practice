export interface ITour {
  Tour: {
    id: string
    name: string
    info: string
    image: string
    price: string
  }[],
  RemoveTour: (id: string) => void
}
