<template>
  <div class="bg-grey all-center landing-page__section">
    <div class="t-align-c landing-page__section__review-card">
      <div class="extra-bold mb-5 font-36">
        What developers say about HackerBlocks
      </div>
      <client-only>
        <carousel v-bind="carouselOptions">
          <slide class="bg-white p-5" v-for="review in reviews" :key="review.name">
            <img
              :src="review.img"
              class="round s-100x100"
            />
            <div class="font-mds my-4 light">
              {{ review.review }}
            </div>
            <h2>{{ review.name }}</h2>
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    carouselOptions: {
      loop: true,
      perPage: 1,
      paginationColor: '#a8a6a8'
    },
    reviews: [
      {
        img: 'https://codingblocks.com/assets/images/reviews/pic2.jpg',
        name: 'Naman Kumar',
        review: `The coding problems are divided into categories, which makes
              it very easy to prepare for any job interview. Moreover, they
              are extensive and cover almost all the general/most important
              questions asked by companies. Programming problems are
              maintained and extremely up to date.`
      },
      {
        img: 'https://minio.codingblocks.com/hackerblocks-images/darsh_testimonial.jpeg',
        name: 'Darsh Singh',
        review: `So many topics were covered in-depth, that the knowledge and
              skill I gained helped me clear my interviews. My crystal
              clear concepts, as well as familiarity with data structures
              enabled me to clear all three rounds in the very first
              campus interview I appeared for.`
      },
      {
        img: 'https://minio.codingblocks.com/hackerblocks-images/anirudh_testimonial.jpeg',
        name: 'Anirudh Gupta',
        review: `Coding Blocks has played a major role both in my career
              development and strengthening my programming basics.
              Guidance provided by Coding Blocks mentors made really made
              a great impact and helped me gained skills that were
              beneficial in an interview process. I was able to make quite
              significant apps, and now I find myself contributing to open
              source quite frequently.`
      },
    ]
  })
}
</script>
