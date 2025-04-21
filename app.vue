<template>

  <Head>
    <Link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    </Link>
  </Head>
  <div class="absolute inset-0">
    <ClientOnly>
      <BackgroundParticles></BackgroundParticles>
    </ClientOnly>
  </div>
  <main class="main-bg flex flex-col gap-5 relative z-1">
    <Header></Header>
    <Home></Home>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Footer></Footer>
  </main>
</template>
<style>
.typewriter {
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #fff;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em;
  /* Adjust as needed */
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: white;
  }
}
</style>