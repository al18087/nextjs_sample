import Container from "@/components/container"
import Hero from "@/components/hero"
import Meta from "@/components/meta"

export default function Home() {
  return (
    <Container>
      <Meta></Meta>
      <Hero prop={{ title: "CUBE", subtitle: "アウトプットしていくサイト" }} imageOn></Hero>
    </Container>
  )
}