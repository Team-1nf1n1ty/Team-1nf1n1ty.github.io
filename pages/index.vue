<template>
    <Html>
    <Head>
        <Title>Team 1nf1n1ty</Title>
        <Meta name="description" :content="`Team 1nf1n1ty is a CTF team`" />
        <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
    </Head>
    </Html>

    <div>
        <HeroSection />
        <Content />
        <Socials />
    </div>
</template>


<script>
import cacheControl from "../helper/cacheControl";
export default {
    name: "Home",
    middleware: cacheControl({
    'max-age': 3600,
    'stale-when-revalidate': 5
  }),
}
</script>