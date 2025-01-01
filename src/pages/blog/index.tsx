import Container from "@/components/container";
import Hero from "@/components/hero";

export default function Blog() {
    return (
        <Container>
            <Hero prop={{title:"Blog", subtitle:"Recent Posts"}}></Hero>
        </Container>
    )
}