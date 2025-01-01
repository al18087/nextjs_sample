import Container from "@/components/container"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <Container>
      <Hero prop={{title:"CUBE", subtitle:"アウトプットしていくサイト"}} imageOn></Hero>
    </Container>
  )
}