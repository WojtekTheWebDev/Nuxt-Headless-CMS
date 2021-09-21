type TwitterCards = 'summary' | "summary_large_image" | "app" | "player";

type Meta = {
  title: string,
  description: string,
  ogImage: string,
  ogURL: string,
  ogType: string,
  twitterCard: TwitterCards
}

export default Meta;