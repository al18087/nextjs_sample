import Accordion from "@/components/accordion";
import Contact from "@/components/contact";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Meta from "@/components/meta";
import PostBody from "@/components/post-body";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import eyecatch from "@/images/about.jpg";
import Image from "next/image";

export default function About() {
    return (
        <Container>
            <Meta pageTitle="アバウト" pageDesc="About development activities" pageImg={eyecatch.src} pageImgW={eyecatch.width} pageImgH={eyecatch.height}></Meta>
            <Hero prop={{ title: "About", subtitle: "About development activities" }}></Hero>

            <figure>
                <Image src={eyecatch} alt="" layout="responsive" sizes="(min-width: 1152px) 1152px, 100vw" priority placeholder="blur"></Image>
            </figure>

            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            Cubeが得意とする分野はものづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <h2>ものづくりで目指していること</h2>
                        <p>
                            私たちがものづくりで目指しているのは、人々の生活に価値をもたらす「本質的な体験」を創造することです。単なる機能や形を追求するだけでなく、その製品やサービスが誰かの課題を解決し、喜びや感動を生む瞬間を大切にしています。
                            技術革新を通じて新たな可能性を探り、デザインと実用性を融合させることで、長く愛されるものを生み出すことが私たちの使命です。また、サステナビリティを意識した素材やプロセスを取り入れ、未来の環境に配慮したものづくりにも取り組んでいます。
                            私たちは、「使う人が笑顔になるもの」「社会や環境に貢献できるもの」「心を動かすもの」を目指し、創造と挑戦を続けます。それが、ものづくりを通じて実現したい私たちのビジョンです。
                        </p>
                        <h3>新しいことへのチャレンジ</h3>
                        <p>
                            新しいことへの挑戦は、未知への不安と期待が入り混じるものですが、私はその中に大きな成長の可能性を見出しています。この挑戦を通じて、自分自身の限界を超え、これまでにない視点やスキルを得ることを目指します。
                            失敗を恐れず、学びの機会として捉えることで、一歩一歩確実に前進していきます。柔軟な発想と粘り強さを持って、どんな壁も乗り越えていけると信じています。そして、この経験を周囲の人々や社会にとって価値ある成果へとつなげていきたいと思います。
                            新しいことに挑む今この瞬間を楽しみながら、未来への大きな一歩を踏み出します！
                        </p>

                        <h2>FAQ</h2>
                        <Accordion heading="プログラミングのポイントについて">
                            <p>プログラミングにおけるポイントは、単にコードを書くことだけでなく、問題解決や価値の創造のために、効率的かつ効果的なアプローチを取ることにあります。</p>
                        </Accordion>
                        <Accordion heading="古代語の解読について">
                            <p>古代語の解読は、歴史や文化の理解を深め、人類の知識を広げる魅力的かつ挑戦的な分野です。</p>
                        </Accordion>
                        <Accordion heading="公開リポジトリの活用について">
                            <p>公開リポジトリの活用は、ソフトウェア開発において非常に強力で多岐にわたる利点をもたらします。GitHub、GitLab、Bitbucket などのプラットフォームでの公開リポジトリを利用することにより、個人やチーム、さらにはコミュニティ全体での協力が可能になります。</p>
                        </Accordion>
                    </PostBody>
                </TwoColumnMain>

                <TwoColumnSidebar>
                    <Contact></Contact>
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}