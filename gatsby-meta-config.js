module.exports = {
  title: `sin prisa pero sin pausa`,
  description: `sin prisa pero sin pausa`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://whatseop.netlify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: 'wanderer-s/gatsby-blog',
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `오원섭`,
    bio: {
      role: `개발자`,
      description: ['불편함을 해소하는', '항상 나아가는', '꾸준한'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/wanderer-s`,
      linkedIn: ``,
      email: `ows0871@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      //   // =====       [Timestamp Sample and Structure]      =====
      //   // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      //   // ========================================================
      //   // ========================================================
      //   {
      //     date: '2021.02 ~',
      //     activity: '개인 블로그 개발 및 운영',
      //     links: {
      //       post: '/gatsby-starter-zoomkoding-introduction',
      //       github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //       demo: 'https://www.zoomkoding.com',
      //     },
      //   },
    ],
    projects: [
      //   // =====        [Project Sample and Structure]        =====
      //   // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      //   // ========================================================
      //   // ========================================================
      //   {
      //     title: '개발 블로그 테마 개발',
      //     description:
      //       '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //     techStack: ['gatsby', 'react'],
      //     thumbnailUrl: 'blog.png',
      //     links: {
      //       post: '/gatsby-starter-zoomkoding-introduction',
      //       github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //       demo: 'https://www.zoomkoding.com',
      //     },
      //   },
    ],
  },
};
